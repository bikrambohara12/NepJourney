// Imports:
import express from 'express';
import Review from '../models/Review.js';

const reviewRouter = express.Router();

// getAllReviews bhanne async function sab review data fetch garna
reviewRouter.get('/', async (req, res) => {
  try {
    // MongoDB ko "reviews" collection bata sabai documents fetch garxa
    // .populate('user tour') le user ra tour ko details ni auto lyaune
    const reviews = await Review.find().populate('user tour');

    // Data empty xa ki check garne
    if (!reviews.length) {
      return res.status(404).send({
        message: "No reviews found!"
      });
    }

    // Data successfully aayepachi response pathaune
    res.status(200).send({
      status: 'success',   // custom success status
      data: reviews,       // sabai review data
      message: "Successfully Retrieved!"
    });

  } catch (err) {
  }
});

export default reviewRouter;

