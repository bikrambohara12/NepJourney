// Imports
import express from 'express';
import User from '../models/User.js';

const userRouter = express.Router();

// Get all users
userRouter.get('/', async (req, res) => {
  try {
    const users = await User.find();

    if (!users) {
      return res.status(500).send({
        message: "Unable To Execute The Query!"
      });
    } else if (users.length === 0) {
      return res.status(404).send({
        message: "No Users Found!"
      });
    }

    res.status(200).send({
      status: 'success',
      data: users,
      message: "Successfully Retrieved!"
    });

  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message
    });
  }
});

export default userRouter;
