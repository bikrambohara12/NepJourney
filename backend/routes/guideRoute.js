import express from 'express';
import { guideList, loginGuide, bookingGuide,bookingCancel,bookingComplete,guideDashboard,guideProfile,updateGuideProfile} from '../controllers/guideController.js';
import authGuide from '../middlewares/authGuide.js';


const guideRouter = express.Router()

guideRouter.get('/list',guideList)

guideRouter.post('/login',loginGuide)
guideRouter.get('/booking',authGuide,bookingGuide)

guideRouter.post('/complete-booking',authGuide,bookingComplete)
guideRouter.post('/cancel-booking',authGuide,bookingCancel)

guideRouter.get('/dashboard',authGuide,guideDashboard)
guideRouter.get('/profile',authGuide,guideProfile)
guideRouter.post('/update-profile',authGuide,updateGuideProfile)


export default guideRouter;