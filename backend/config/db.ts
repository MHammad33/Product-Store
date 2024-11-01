import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!);
    console.log(`Connected to Database: ${conn.connection.name}`);
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error connecting to database:", error.message);
    } else {
      console.log("Unknown Error in connectDb:", error);
    }
    process.exit(1); // 1 means exit with failure, 0 means success
  }
};
