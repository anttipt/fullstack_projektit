const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ MongoDB connected');
  app.listen(3001, () => {
    console.log('🚀 Server running on http://localhost:3001');
  });
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});