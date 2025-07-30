import mongoose from "mongoose";

const guideSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  contact: { type: String, required: true },
  experience: { type: String, required: true },
  fees: { type: Number, required: true },
  speciality: { type: String, required: true },
  education: { type: String, required: true },
  address: { type: String, required: true },
  location: { type: String, required: true },
  language: { type: String, required: true },
  about: { type: String, required: true },
  image: { type: String, required: true },
  available: { type: Boolean, default: true },
});

const GuideModel = mongoose.model("Guide", guideSchema);




export default GuideModel;
