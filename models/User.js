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
  role: {
    type: String,
    enum: ['admin', 'guide', 'user'],
    default: 'user'
  }
});

// Schema bata model banaune
const User = mongoose.model('User', userSchema);

// out export areko
export default User;
