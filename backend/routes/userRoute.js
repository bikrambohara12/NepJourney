import express from 'express'
import { registerUser,loginUser, getProfile, updateProfile,bookGuide,listBooking} from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'

const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)

userRouter.get('/getProfile', authUser, getProfile)
userRouter.post('/update-profile',upload.single('image'),authUser,updateProfile)



userRouter.get('/booking',authUser,listBooking)







export default userRouter