const mongoose = require('mongoose');

const stressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  level: { type: String, enum: ['Low', 'Medium', 'High'], required: true },
  note: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Stress', stressSchema);
