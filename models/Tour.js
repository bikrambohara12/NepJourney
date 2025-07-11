import mongoose from "mongoose";
// Tour schema define garne
const tourSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true   // tour ko title required ho
  },
  description: {
    type: String    // tour ko description optional ho
  },
  price: {
    type: Number  // tour ko price
  },
  duration: {
    type: Number  // kati din ko tour ho
  },
  location: {
    type: String   // tour ko location
  }
});

// Schema bata model banaune
const Tour = mongoose.model('Tour', tourSchema);

// export gareko
export default Tour;
