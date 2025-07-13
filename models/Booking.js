import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tour: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tour',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String, 
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  pickupLocation: {
    type: String,
    required: true
  },
  specialInstructions: {
    type: String
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'cancelled', 'completed'],
    default: 'pending'
  }
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;