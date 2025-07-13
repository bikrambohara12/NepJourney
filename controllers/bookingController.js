// routes/bookingRouter.js
import express from 'express';
import Booking from '../models/Booking.js';

const bookingRouter = express.Router();

// POST booking
bookingRouter.post('/', async (req, res) => {
  try {
    const {
      user,
      tour,
      date,
      time,
      contactNumber,
      pickupLocation,
      specialInstructions
    } = req.body;

    const newBooking = new Booking({
      user,
      tour,
      date,
      time,
      contactNumber,
      pickupLocation,
      specialInstructions
    });

    const savedBooking = await newBooking.save();

    res.status(201).send({
      status: 'success',
      data: savedBooking,
      message: 'Booking created successfully!'
    });

  } catch (err) {
    res.status(500).send({
      status: 'error',
      message: 'Failed to create booking.'
    });
  }
});

// GET all bookings
bookingRouter.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('user', 'name email')
      .populate('tour', 'title location');

    if (!bookings || bookings.length === 0) {
      return res.status(404).send({
        status: 'fail',
        message: 'No bookings found!'
      });
    }

    res.status(200).send({
      status: 'success',
      data: bookings,
      message: 'All bookings fetched successfully!'
    });

  } catch (err) {
    res.status(500).send({
      status: 'error',
      message: 'Failed to fetch bookings.'
    });
  }
});

export default bookingRouter;
