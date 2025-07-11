import mongoose from "mongoose";
// Booking schema define garne
const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, // booking gareko user ko id lina
    ref: 'User',  // User schema sanga connect gareko
    required: true
  },
  tour: {
    type: mongoose.Schema.Types.ObjectId, // booking gareko tour ko id
    ref: 'Tour',   // Tour schema sanga connect gareko
    required: true
  },
  date: {
    type: Date,
    required: true   // booking ko date required ho
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'cancelled', 'completed'],
    default: 'pending' 
  }
});

// Schema bata model banaune
const Booking = mongoose.model('Booking', bookingSchema);

// export gareko
export default Booking;
