
import validator from 'validator';
import bcrypt from 'bcrypt';
import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import { v2 as cloudinary } from 'cloudinary';
import GuideModel from '../models/guideModel.js'; 
import bookingModel from '../models/bookingModel.js';



// ✅ Register User
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing details" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter a valid email." });
    }

    if (password.length < 8) {
      return res.json({ success: false, message: "Enter a strong password." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPassword
    };

    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ success: true, token });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ✅ Login User
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid password" });
    }

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ✅ Get Profile
const getProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const userData = await userModel.findById(userId).select('-password');

    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, userData });
  } catch (error) {
    console.log("Error in getProfile:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Update Profile
const updateProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const { name, gender, dob, phone, address } = req.body;
    const imageFile = req.file;

    if (!name || !gender || !dob || !phone) {
      return res.json({ success: false, message: "Data missing" });
    }

    const addressData = typeof address === 'string' ? JSON.parse(address) : address;

    const updateData = {
      name,
      phone,
      address: addressData,
      gender,
      dob
    };

    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });
      updateData.image = imageUpload.secure_url;
    }

    const updatedUser = await userModel.findByIdAndUpdate(userId, updateData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, message: "Profile updated" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const bookGuide = async (req, res) => {
  try {
    const userId = req.userId; 

    const {
      guideId,
      slotDate,
      name,
      email,
      phone,
      location,
      notes
    } = req.body;

    if (!userId || !guideId || !slotDate || !name || !email || !location) {
      return res.status(400).json({ success: false, message: "Missing required booking details" });
    }
  


    const guideData = await GuideModel.findById(guideId).select('-password');
    if (!guideData || !guideData.available) {
      return res.json({ success: false, message: 'Guide not found or not available' });
    }

      if (!guideData.fees) {
  return res.json({ success: false, message: "Guide's fee is missing." });
}


  const existingBooking = await bookingModel.findOne({
      guideId,
      slotDate,
      cancelled: { $ne: true }  
    });

    if (existingBooking) {
      return res.json({ success: false, message: "This guide is already booked on this date." });
    }

console.log("Guide Data:", guideData);

    const userData = await userModel.findById(userId).select('-password');

    const bookingData = {
      userId,
      guideId,
      userData,
      guideData,
      amount: guideData.fees,
      slotDate,
      name,
      email,
      phone,
      location,
      notes
    };

    const newBooking = new bookingModel(bookingData);
    await newBooking.save();

    res.json({ success: true, message: 'Guide booked successfully' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const listBooking = async (req, res) => {
  try {
    const userId = req.userId; 
    const Booking = await bookingModel.find({ userId });
    res.json({ success: true, booking: Booking }); 
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// cnacel booking

const cancelBooking = async (req, res) => {
  try {
    const bookingId = req.body.bookingId;
    const userId = req.userId; 

    const bookingData = await bookingModel.findById(bookingId);

    
    if (bookingData.userId.toString() !== userId) {
      return res.json({ success: false, message: "Unauthorized action" });
    }

    await bookingModel.findByIdAndUpdate(bookingId, { cancelled: true });

    const { guideId, slotDate, slotTime } = bookingData;
    const guideData = await GuideModel.findById(guideId);

    let slots_booked = guideData.slots_booked;
    if (slots_booked && slots_booked[slotDate]) {
      slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime);
    }

    await GuideModel.findByIdAndUpdate(guideId, { slots_booked });

    res.json({ success: true, message: "Booking cancelled successfully" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// 


export { registerUser, loginUser, getProfile, updateProfile, bookGuide, listBooking, cancelBooking};


