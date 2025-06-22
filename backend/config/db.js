import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const { MONGO_USER, MONGO_PASS, MONGO_CLUSTER, MONGO_DB } = process.env;
const uri = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("DB CONNECTED");
  } catch (err) {
    console.error("DB CONNECTION ERROR:", err);
  }
};
