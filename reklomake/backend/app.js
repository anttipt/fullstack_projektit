require('dotenv').config(); // Tämä pitää olla ensimmäisenä!

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();

console.log('MONGO_URI:', process.env.MONGO_URI); // Testitulostus

app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

module.exports = app;