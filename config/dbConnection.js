import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });

const MONGO_URL = process.env.MONGO_URI;
//Database connection
const connect = async () => {
  try {
    await mongoose.connect(MONGO_URL, {});
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

export default connect;
