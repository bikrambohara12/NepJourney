import GuideModel from '../models/guideModel.js';

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

export{changeAvailability,guideList}