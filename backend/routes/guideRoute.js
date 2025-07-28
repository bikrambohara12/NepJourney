import express from 'express';
import { guideList, loginGuide} from '../controllers/guideController.js';


const guideRouter = express.Router()

guideRouter.get('/list',guideList)

guideRouter.post('/login',loginGuide)

export default guideRouter;