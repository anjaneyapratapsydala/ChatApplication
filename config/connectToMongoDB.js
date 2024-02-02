require('dotenv').config();
const mongoose = require("mongoose");
const process = require("process");

const connectToMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://anjaneyapratapsydala2:M1PtOa2QF6kTDnto@cluster0.xpxnhw4.mongodb.net/");
    console.log("MongoDB connected!!");
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
  }
};

module.exports = connectToMongoDB;
