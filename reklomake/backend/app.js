// Ladataan ympäristömuuttujat .env-tiedostosta
require('dotenv').config(); // Tämä pitää olla ensimmäisenä, jotta process.env toimii

// Tuodaan tarvittavat Node.js-kirjastot
const express = require('express'); // Express: kevyt web-palvelin
const mongoose = require('mongoose'); // Mongoose: MongoDB:n objektimallinnus
const cors = require('cors'); // CORS: sallii frontendin ja backendin välisen viestinnän eri domaineista
const authRoutes = require('./routes/authRoutes'); // Tuodaan reitit käyttäjän rekisteröintiin ja kirjautumiseen

// Luodaan Express-sovellus
const app = express();

// Tulostetaan MongoDB:n URI testimielessä
console.log('MONGO_URI:', process.env.MONGO_URI); // Varmistetaan että .env latautui oikein

// Middlewaret
app.use(cors()); // Sallii frontendin yhteydet eri portista
app.use(express.json()); // Parsii JSON-dataa saapuvista pyynnöistä
app.use('/api', authRoutes); // Käytetään authRoutes-reittejä polun /api alla

// Yhdistetään MongoDB-tietokantaan
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected')) // Onnistunut yhteys
  .catch(err => console.error('❌ MongoDB connection error:', err)); // Virhe yhteydessä

// Viedään Express-sovellus käytettäväksi esim. server.js:ssä
module.exports = app;