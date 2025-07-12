//Imports:
import express from 'express';
import userRouter from '../controllers/userController.js';
import tourRouter from '../controllers/tourController.js';
import reviewRouter from '../controllers/reviewController.js';
import guideRouter from '../controllers/guideController.js';


const router = express.Router();
router.use("/api/v1/tours", tourRouter);
router.use("/api/v1/users", userRouter);
router.use("/api/v1/reviews", reviewRouter);
router.use("/api/v1/guides", guideRouter);



//Export:
export default router;