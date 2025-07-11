//Imports:
import express from 'express';
import userRouter from '../controllers/userController.js';
import tourRouter from '../controllers/tourController.js';


const router = express.Router();
router.use("/api/v1/tours", tourRouter);
router.use("/api/v1/users", userRouter);


//Export:
export default router;