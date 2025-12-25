import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoute.js";

dotenv.config();

const app = express();

// ✅ CORS FIX (MOST IMPORTANT)
app.use(
  cors({
    origin: [
      "https://shyam-portfoliowebsite.netlify.app/" // frontend URL
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
