
const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
  title: String,
  description: String,
  trainer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: Date,
  time: String,
  capacity: Number
});

module.exports = mongoose.model('Class', ClassSchema);
