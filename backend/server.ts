import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db";
import productRouter from "./routes/product.routes";

dotenv.config();
const app = express();

// Routes
app.use("/api/products", productRouter);

const port = 3001;

const startServer = async () => {
  try {
    await connectDb();
    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error connecting to server:", error.message);
    } else {
      console.log("Unknown Error in startServer:", error);
    }
  }
};

void startServer();
