import mongoose from "mongoose";

// User schema define garne
const userSchema = new mongoose.Schema({
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
    required: true, // true vaneko required ho, false optional ho 
    minlength: 6   //minimum length validation
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female', 'other'],
    default: 'not selected'
  },

  role: {
    type: String,
    enum: ['admin', 'guide', 'user'],
    default: 'user'
  },
  dateofbirth: {
    type: Date,
    required: true,
    default: "not selected"
  },

  image: {
    type: String,
    required: true
  },
  addresss : {
    type: Object,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  
});

// Schema bata model banaune
const User = mongoose.model('User', userSchema);

// out export areko
export default User;
