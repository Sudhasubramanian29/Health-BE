const mongoose = require('mongoose');

const meditationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  duration: { type: Number, required: true }, // in minutes
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Meditation', meditationSchema);
