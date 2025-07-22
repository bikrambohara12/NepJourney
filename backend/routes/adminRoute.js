import express from "express";
import { addGuide,loginAdmin } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";

const adminRouter = express.Router();

adminRouter.post('/addguide',authAdmin,upload.single('image'), addGuide);
adminRouter.post('/login',loginAdmin);


export default adminRouter;




