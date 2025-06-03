const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  steps: { type: Number, default: 10000 },
  workouts: { type: Number, default: 3 },
  calories: { type: Number, default: 2000 },
}, { timestamps: true });

module.exports = mongoose.model('Goal', goalSchema);
