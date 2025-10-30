require('dotenv').config();
const mongoose = require('mongoose');

console.log('Yritetään yhdistää MongoDB:hen...');
console.log('MONGO_URI:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Yhteys MongoDB:hen onnistui!');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('❌ Yhteys epäonnistui:', err.message);
  });