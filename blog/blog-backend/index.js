const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const articleRoutes = require('./routes/articles');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/articles', articleRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Yhdistetty MongoDB:hen'))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send('Blogialustan backend toimii!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Palvelin käynnissä portissa ${PORT}`));
