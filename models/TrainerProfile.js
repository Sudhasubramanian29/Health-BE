const mongoose = require('mongoose');

const TrainerProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  bio: String,
  specialties: [String],
  experience: Number,
  photo: { type: String }, // Stores file path or filename
}, {
  timestamps: true
});

module.exports = mongoose.model('TrainerProfile', TrainerProfileSchema);
