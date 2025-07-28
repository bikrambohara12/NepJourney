import GuideModel from '../models/guideModel.js';
import bcrypt from 'bcrypt'
import jwt  from 'jsonwebtoken'

const changeAvailability = async(req,res)=>{
    try {

        const{guideId}=req.body

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

export{changeAvailability,guideList,loginGuide}