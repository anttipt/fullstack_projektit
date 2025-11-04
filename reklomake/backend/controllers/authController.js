const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Täytä kaikki kentät' });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      email,
      passwordHash
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Virhe rekisteröinnissä:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Täytä kaikki kentät' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { username: user.username, id: user._id },
      process.env.JWT_SECRET || 'salainenavain',
      { expiresIn: '1h' }
    );

    res.json({ token, username: user.username });
  } catch (err) {
    console.error('Virhe kirjautumisessa:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  registerUser,
  loginUser
};