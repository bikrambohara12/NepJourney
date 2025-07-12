//Imports:
import express from 'express';
import userRouter from '../controllers/userController.js';
import tourRouter from '../controllers/tourController.js';
import reviewRouter from '../controllers/reviewController.js';

const router = express.Router();
router.use("/api/v1/tours", tourRouter);
router.use("/api/v1/users", userRouter);
router.use("/api/v1/reviews", reviewRouter);

//Export:
export default router;