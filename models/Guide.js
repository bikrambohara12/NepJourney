const mongoose = require('mongoose');

// Guide schema define garne
const guideSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true  // guide ko naam required ho
  },
  language: {
    type: [String]     // guide le bolne language haru array form m axa
  },
  experience: {
    type: Number  // experience years
  }
});

// Schema bata model banaune
const Guide = mongoose.model('Guide', guideSchema);

// export gareko
module.exports = Guide;
