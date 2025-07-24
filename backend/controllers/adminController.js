
import validator from 'validator'
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import guideModel from '../models/guideModel.js'
import jwt from 'jsonwebtoken'
// api for addding guide
const addGuide = async (req,res) => {

   try{
       
      //  const {name,email,password,speciality,degreee,exprience,about,fee,address} = req.body
      const {name,email,password,speciality,degree,experience,about,fee,address} = req.body;

       const imageFile = req.file

    if(!name || !email || !password || !speciality || !degree || !experience || !about || !fee || !address ){
    return res.json({success:false,message:"missing details"});
}


     // valadating email format
     if (!validator.isEmail(email)) {
             return res.json({success:false,message:"please enter valid email"})  
     }

     // validating strong password
     if (password.length < 8) {
         return res.json({success:false,message:"please enter a strong password"})  
     }

    // hashing guide passsword
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    // upload image to cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
    const imageUrl = imageUpload.secure_url

//     const guideData = {
//     name,
//     email,
//     image: imageUrl,
//     password: hashedPassword,
//     speciality,
//     degree,         // Corrected
//     experience,     // Corrected
//     about,
//     fee,
//     address: JSON.parse(address),
//     date: Date.now()
// };


const guideData = {
    name,
    email,
    image: imageUrl,
    password: hashedPassword,
    speciality,
    degree,
    experience,
    about,
    fee,
    available: true, 
    address: JSON.parse(address),
   Date:Date.new()
};


    const newGuide = new guideModel(guideData)
    await newGuide.save()

    res.json({success:true,message:"guide added"})

   }catch(error){
     console.log(error)
     res.json({success:false,message:error.message})
   }

}

// api for the admin login
const loginAdmin = async(req,res)=>{
    try {

        const {email,password} = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            
          const token = jwt.sign(email+password,process.env.JWT_SECRET)
          res.json({success:true,token})

        }else{
            res.json({success:false,message:"invalid credentials"})
        }
        
    } catch (error) {
        console.log(error)
     res.json({success:false,message:error.message})
    }
}

export {addGuide,loginAdmin}





