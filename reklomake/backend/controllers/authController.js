// backend/controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const registerUser = async (req, res) => {
  const { username, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const user = new User({ username, passwordHash });
  await user.save();
  res.status(201).json({ message: 'User created' });
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const passwordCorrect = user && await bcrypt.compare(password, user.passwordHash);
  if (!passwordCorrect) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ username: user.username, id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.status(200).json({ token, username: user.username });
};

module.exports = { registerUser, loginUser };