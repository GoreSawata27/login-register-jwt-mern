import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/loginRegister");
    console.log("DB connected");
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
