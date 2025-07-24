import mongoose  from "mongoose";

const bookingSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    guideId:{type:String,required:true},
    slotDate:{type:String,required:true},
    slotTime:{type:String,required:true},
    userData:{type:Object,required:true},
    guideData:{type:Object,required:true},
    amount:{type:Number,required:true},
    Date:{type:Number,required:true},
    cancelled:{type:Boolean,default:false},
    payment:{type:Boolean,default:false},
    isCopleted:{type:Boolean,default:false},
    name: {type: String, required: true},
    email: {type:String,required:true, unique:true},
    phone: {type:String,default: "00000000000"},
    notes:{ type: String, required: false},
    location:{type:String,required:true},


})

const bookingModel = mongoose.models.booking || mongoose.model('booking',bookingSchema)

export default bookingModel