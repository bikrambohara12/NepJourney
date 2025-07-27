import express from "express";
import { addGuide,allGuides,loginAdmin,bookingsAdmin } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";
import { changeAvailability } from "../controllers/guideController.js";

const adminRouter = express.Router();

adminRouter.post('/addguide',authAdmin,upload.single('image'), addGuide);
adminRouter.post('/login',loginAdmin);

adminRouter.post('/allguides',authAdmin,allGuides);
adminRouter.post('/changeavailability', authAdmin, changeAvailability);
adminRouter.get('/bookings', authAdmin, bookingsAdmin);




export default adminRouter;




