import express from 'express';
import mongoose from 'mongoose'; // mongoose use for MongoDB
import router from './routes/index.js';

const app = express();
app.use(express.json());
app.use("/", router);
const PORT = 5000;

// MongoDB connection URI (string)
const uri = "mongodb+srv://amirbohara00:amir123@cluster0.be8cyrr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// MongoDB sang connect garne
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log(" MongoDB connected successfully!"))
.catch((err) => console.log(" MongoDB connection failed:", err));

// Express route
app.get('/', (req, res) => {
  res.send('Hello bro! Backend working ma xahai ajhai pani');
});

// Server run garne 
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
