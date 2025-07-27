import express from 'express'
import { registerUser, loginUser, getProfile, updateProfile, listBooking, cancelBooking } from '../controllers/userController.js'

import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'
import { bookGuide } from '../controllers/userController.js';


const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)

userRouter.get('/getProfile', authUser, getProfile)
userRouter.post('/update-profile',upload.single('image'),authUser,updateProfile)
userRouter.post('/book-guide', authUser, bookGuide);

userRouter.get('/booking',authUser,listBooking)

userRouter.post('/cancelbooking',authUser,cancelBooking)




export default userRouter