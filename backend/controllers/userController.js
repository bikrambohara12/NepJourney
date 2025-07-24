import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import { v2 as cloudinary } from 'cloudinary';
import bookingModel from '../models/bookingModel.js';
// import userModel from '../models/guideModel.js'



// api to register to user
const registerUser = async (req,res) =>{
    try {
        
       const {name,email,password} =req.body


       if (!name || !email || !password) {
        return res.json({success:false,message:"missing details"})
       } 
       // validating email format
       if (!validator.isEmail(email)) {
         return res.json({success:false,message:"enter a valid email."})

       }
//validating strong password
       if (password.length < 8) {
         return res.json({success:false,message:"enter a strong password."})
  

       }

       // hashing user password
       const salt = await bcrypt.genSalt(10)
       const hashedPassword = await bcrypt.hash(password,salt)

       const userData = {
        name,
        email,
        password:hashedPassword
       }
    
       const newUser = new userModel(userData)
       const user = await newUser.save()

       const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
       res.json({success:true,token})
       



    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}
// api for user login
const loginUser = async(req,res)=>{
  try {
    const {email,password}=req.body
    const user = await userModel.findOne({email})

    if (!user) {
      
    return res.json({success:false,message:"user not find"})

    }
     
    const isMatch = await bcrypt.compare(password,user.password)

    if (isMatch) {
      const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
      res.json({success:true,token})
    }else{
     res.json({success:false,message:"invalide password"})
    }

  } catch (error) {
     console.log(error)
        res.json({success:false,message:error.message})
  }

}

const getProfile = async (req, res) => {
  try {
    const userId = req.userId;
    console.log("userId from token:", userId);

    const userData = await userModel.findById(userId).select('-password');
    console.log("User from DB:", userData);

    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, userData });
  } catch (error) {
    console.log("Error in getProfile:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};


const updateProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const { name, gender, dob, phone, address } = req.body;
    const imageFile = req.file;

    if (!name || !gender || !dob || !phone) {
      return res.json({ success: false, message: "Data missing" });
    }

    const addressData = typeof address === 'string' ? JSON.parse(address) : address;

    const updateData = {
      name,
      phone,
      address: addressData,
      gender,
      dob
    };

    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });
      updateData.image = imageUpload.secure_url;
    }

    const updatedUser = await userModel.findByIdAndUpdate(userId, updateData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, message: "profile updated" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// Api for booki guide
const bookGuide = async(req,res)=>{

  try {

    const{userId,guideId,slotDate,slotTime}=req.body

    const guideData = await guideModel.findById(guideId).select('-password')

    if (!guideData.available) {
      return res.json({success:false,message:'Guide not available'})
    }

    let slots_booked = guideData.slots_booked

    // checking for slot avalibality
    if (slots_booked[slotDate]){
      if (slots_booked[slotDate].includes(slotTime)) {
        return res.json({success:false,message:'slot not available'})
      }else{
        slots_booked[slotDate].push(slotTime)
      }
    }else{
      slots_booked[slotDate]=[]
      slots_booked[slotDate].push(slotTime)
    }

    const userData = await userModel.findById(userId).select('-password')

    delete guideData.slots_booked

    const bookingData ={
      userId,
      guideId,
      userData,
      guideData,
      amount:guideData.fees,
      slotDate,
      name,
      email,
      phone,
     location,
     notes,
      date:Date.now()
    }

    const newBooking = new bookingModel(bookingData)
    await newBooking.save()
    

    // save new slots data in guide data
    await guideModel.findByIdAndUpdate(guideId,{slots_booked})

    res.json({success:true,message:'guide booked'})
    
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}


export {registerUser,loginUser,getProfile, updateProfile,bookGuide}


