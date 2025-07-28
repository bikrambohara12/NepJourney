import GuideModel from '../models/guideModel.js';
import bcrypt from 'bcrypt'
import jwt  from 'jsonwebtoken'
import bookingModel from '../models/bookingModel.js';

const changeAvailability = async(req,res)=>{
    try {

        const guideId = req.body

        const guideData = await GuideModel.findById(guideId)
        await GuideModel.findByIdAndUpdate(guideId,{available:!guideData.available})
        res.json({success:true,message:"Availability Changed"})
        
    } catch (error) {
     console.log(error)
        res.json({success:false,message:error.message})     
    }
}


const guideList = async(req,res)=>{

    try {
        const  guides = await GuideModel.find({}).select(['-password','-email'])

        res.json({success:true,guides})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})     
    }
}

// APi for Guide login
const loginGuide = async(req,res)=>{

    try {

        const {email,password} = req.body
        const guide = await GuideModel.findOne({email})

        if (!guide) {
          return res.json({success:false,message:"Invalid Credentials"})  
        }

        const  isMatch = await bcrypt.compare(password, guide.password)

        if (isMatch) {

            const token = jwt.sign({id:guide._id},process.env.JWT_SECRET)
            res.json({success:true,token})          
        }else{
            return res.json({success:false,message:"Invalid Credentials"})  
        }
        
    } catch (error) {
         console.log(error)
        res.json({success:false,message:error.message})
    }

}

// API to get booking for the Guide panel

const bookingGuide = async (req, res) => {
  try {
    const guideId = req.guideId; 
    const booking = await bookingModel.find({ guideId }); 
    res.json({ success: true, booking });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// Api to completed or mark appointemt completed for guide panel
const bookingComplete = async(req,res)=>{
    try {

        // const {guideId,bookingId}=req.body

        const guideId = req.guideId; 
        const {bookingId}=req.body

        const bookingData = await bookingModel.findById(bookingId)

    if (bookingData && String(bookingData.guideId) === String(guideId)) {
            await bookingModel.findByIdAndUpdate(bookingId,{isCopleted:true})
            return res.json({success:true,message:"Boooking Completed"})
        }else{
            return res.json({success:false,message:"mark Failed,invalid Booking "})
        }
        
    } catch (error) {
       console.log(error);
    res.json({ success: false, message: error.message }); 
    }
}


// Api to cncled booking completed for guide panel


const bookingCancel = async(req,res)=>{
    try {

       const guideId = req.guideId; 
        const {bookingId}=req.body

        const bookingData = await bookingModel.findById(bookingId)

           if (bookingData && String(bookingData.guideId) === String(guideId)){
            await bookingModel.findByIdAndUpdate(bookingId,{cancelled:true})
            return res.json({success:true,message:"Boooking Cancelled Successfully"})
        }else{
            return res.json({success:false,message:"Cancellation Failed"})
        }
        
    } catch (error) {
       console.log(error);
    res.json({ success: false, message: error.message }); 
    }
}

export{changeAvailability,guideList,loginGuide,bookingGuide,bookingCancel,bookingComplete}