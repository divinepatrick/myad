import express from "express";
import ViteExpress from "vite-express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";


// Load environment variables
dotenv.config();

// Initialize Express application
const app = express();
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

// Define routes
app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

app.use("/server/user", userRouter);
app.use("/server/auth", authRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Start the server
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
