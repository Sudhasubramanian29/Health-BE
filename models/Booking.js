const mongoose = require('mongoose');


const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  status: { type: String, default: 'booked' }
});

module.exports = mongoose.model('Booking', BookingSchema);