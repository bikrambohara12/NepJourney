import express from 'express';
import { guideList } from '../controllers/guideController.js';


const guideRouter = express.Router()

guideRouter.get('/list',guideList)

export default guideRouter;