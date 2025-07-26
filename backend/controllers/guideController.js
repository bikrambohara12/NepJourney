import GuideModel from "../models/guideModel"


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

export{changeAvailability}