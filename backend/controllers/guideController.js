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

// API to get dashboard data for guide panel

const guideDashboard = async(req,res)=>{

    try {

        const guideId = req.guideId; 


        const booking = await bookingModel.find({guideId})

        let earnings =0;

        booking.map((item)=>{
            if (item.isCopleted || item.payment){
                earnings += item.amount
            }
        })
        let travelers = [];

booking.forEach((item) => {
  if (!travelers.includes(String(item.userId))) {
    travelers.push(String(item.userId));
  }
});
        const dashData = {
            earnings,
            booking:booking.length,
            travelers:travelers.length,
            latestBooking:booking.reverse().slice(0,5)
        }
        res.json({success:true,dashData})
    } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
    }

}

// Api to get guide profile for guide panel
const guideProfile = async(req,res)=>{
    try {

        const guideId = req.guideId;
        const profileData = await GuideModel.findById(guideId).select('-password')
        res.json({success:true,profileData})
        
    } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
    }
}

// API to Update guide profile data from guide panel
const updateGuideProfile = async(req,res)=>{
    try {
      
        const {guideId,fees,address,phone,name,email,available,notes} = req.body

        await GuideModel.findByIdAndUpdate(guideId,{fees,address,phone,name,email,available,notes})

        res.json({success:true,message:"profile Updated successfully"});
       
    } catch (error) {
        console.log(error);
    res.json({ success: false, message: error.message });
        console.log("Guide ID in profile route:", guideId);

    }
}
export{changeAvailability,guideList,loginGuide,bookingGuide,bookingCancel,bookingComplete,guideDashboard,guideProfile,updateGuideProfile}