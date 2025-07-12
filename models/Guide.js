import mongoose from "mongoose";

// Guide schema define garne
const guideSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true  
  },
  email: {
    type: String,
    required: true,  
    unique: true 
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true  
  }, 
  speciality: {
    type: String,
    required: true
  }, 
  degree: {
    type: String,
    required: true  
  },
  about: {
    type: String,
    required: true  
  },
  available: {
    type: Boolean,
    required: true  
  },
  fee: {
    type: Number,
    required: true  
  }, 
  address: {
    type: Object,
    required: true  
  }, 
  Date: {
    type: Number,
    required: true  
  },
  slots_booked: {
    type: Object,
    default: {}  
  },

  language: {
    type: [String]     
  },
  experience: {
    type: Number  
  }
});

// Schema bata model banaune
const Guide = mongoose.model('Guide', guideSchema);

// export gareko
export default Guide;