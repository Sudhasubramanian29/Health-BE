const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true }, 
  distance: { type: Number }, 
  calories: { type: Number, required: true },
  date: { type: Date, required: true }
});

module.exports = mongoose.model('Workout', workoutSchema);
