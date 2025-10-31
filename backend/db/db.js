import mongoose from "mongoose";

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected Successfully");
  } catch (error) {
    console.log("MongoDB Connection Error", error);
  }
};

export default db;
