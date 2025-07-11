import mongoose from "mongoose";

// Review schema define garne
const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, // review gareko user ko id
    ref: 'User',     // User schema sanga connect gareko
    required: true
  },
  tour: {
    type: mongoose.Schema.Types.ObjectId, // review gareko tour ko id auto dekhaux
    ref: 'Tour',  // Tour schema sanga connect gareko
    required: true
  },
  rating: {
    type: Number,
    required: true  // rating required ho (1-5)
  },
  comment: {
    type: String  // optional comment
  }
});

// Schema bata model banaune
const Review = mongoose.model('Review', reviewSchema);

// export gareko
export default Review;
