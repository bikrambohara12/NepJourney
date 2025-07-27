
// import validator from 'validator'
// import bcrypt from 'bcrypt'
// import {v2 as cloudinary} from 'cloudinary'
// import guideModel from '../models/guideModel.js'
// import jwt from 'jsonwebtoken'
// // api for addding guide
// const addGuide = async (req,res) => {

//    try{
       
//       //  const {name,email,password,speciality,degreee,exprience,about,fee,address} = req.body
//       const {name,email,password,speciality,degree,experience,about,fee,address} = req.body;

//        const imageFile = req.file

//     if(!name || !email || !password || !speciality || !degree || !experience || !about || !fee || !address ){
//     return res.json({success:false,message:"missing details"});
// }


//      // valadating email format
//      if (!validator.isEmail(email)) {
//              return res.json({success:false,message:"please enter valid email"})  
//      }

//      // validating strong password
//      if (password.length < 8) {
//          return res.json({success:false,message:"please enter a strong password"})  
//      }

//     // hashing guide passsword
//     const salt = await bcrypt.genSalt(10)
//     const hashedPassword = await bcrypt.hash(password,salt)

//     // upload image to cloudinary
//     const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
//     const imageUrl = imageUpload.secure_url

// //     const guideData = {
// //     name,
// //     email,
// //     image: imageUrl,
// //     password: hashedPassword,
// //     speciality,
// //     degree,         // Corrected
// //     experience,     // Corrected
// //     about,
// //     fee,
// //     address: JSON.parse(address),
// //     date: Date.now()
// // };


// const guideData = {
//     name,
//     email,
//     image: imageUrl,
//     password: hashedPassword,
//     speciality,
//     degree,
//     experience,
//     about,
//     fee,
//     location,
//     language,
//     available: true, 
//     address: JSON.parse(address),
//    Date:Date.new()
// };


//     const newGuide = new guideModel(guideData)
//     await newGuide.save()

//     res.json({success:true,message:"guide added"})

//    }catch(error){
//      console.log(error)
//      res.json({success:false,message:error.message})
//    }

// }

// // api for the admin login
// const loginAdmin = async(req,res)=>{
//     try {

//         const {email,password} = req.body

//         if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            
//           const token = jwt.sign(email+password,process.env.JWT_SECRET)
//           res.json({success:true,token})

//         }else{
//             res.json({success:false,message:"invalid credentials"})
//         }
        
//     } catch (error) {
//         console.log(error)
//      res.json({success:false,message:error.message})
//     }
// }

// export {addGuide,loginAdmin}







import validator from 'validator'
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import guideModel from '../models/guideModel.js'
import jwt from 'jsonwebtoken'
import bookingModel from '../models/bookingModel.js'

// api for adding guide
const addGuide = async (req,res) => {
    try{
        // Fixed: Added missing fields and corrected field names
        const {name, email, password, speciality, education, experience, about, fee, address, location, language, contact} = req.body;
        const imageFile = req.file

        // Fixed: Added missing fields to validation
        if(!name || !email || !password || !speciality || !education || !experience || !about || !fee || !address || !location || !language || !contact || !imageFile){
            return res.json({success:false,message:"missing details"});
        }

        // validating email format
        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"please enter valid email"})
        }

        // validating strong password
        if (password.length < 8) {
            return res.json({success:false,message:"please enter a strong password"})
        }

        // hashing guide password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
        const imageUrl = imageUpload.secure_url

        // Fixed: Corrected field names and syntax
        const guideData = {
            name,
            email,
            contact,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            education,        
            experience,
            about,
            fees:fee,
            location,         
            language,         
            available: true,
            address,
             available: true,
           
            date: Date.now()  
        };

        const newGuide = new guideModel(guideData)
        await newGuide.save()

        res.json({success:true,message:"guide added successfully"})
        
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

//Api to get all guide list for admin panel
const allGuides = async(req,res)=>{

    try {

        const guides = await guideModel.find({}).select('-password')
        res.json({success:true,guides})
        
    } catch (error) {
      console.log(error)
        res.json({success:false,message:error.message})  
    }
}

// Api to get all booking list
const bookingAdmin = async(req,res)=>{

    try {

        const booking = await bookingModel.find({})
        res.json({success:true,booking})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message}) 
    }
}

// canceld booking to admin

const bookingCancel = async (req, res) => {
  try {
    const bookingId = req.body.bookingId;

    const bookingData = await bookingModel.findById(bookingId);


    await bookingModel.findByIdAndUpdate(bookingId, { cancelled: true });

    const { guideId, slotDate, slotTime } = bookingData;
    const guideData = await guideModel.findById(guideId);

    let slots_booked = guideData.slots_booked;
    if (slots_booked && slots_booked[slotDate]) {
      slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime);
    }

    await guideModel.findByIdAndUpdate(guideId, { slots_booked });

    res.json({ success: true, message: "Booking cancelled successfully" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


export {addGuide,loginAdmin,allGuides,bookingAdmin,bookingCancel}