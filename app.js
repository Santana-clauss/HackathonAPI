require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5005;

const flightRoutes = require('./routes/flightRoutes'); 
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/tourists', (req, res) => {
  res.send("get tourist details");
  console.log("get request successful");
});

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection successful");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

dbConnect();
app.use('/api/flights', flightRoutes); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
