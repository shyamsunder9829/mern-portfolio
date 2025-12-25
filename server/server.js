import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import contactRoutes from "../routes/contactRoute.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://your-netlify-site.netlify.app" // later replace
  ],
  methods: ["GET", "POST"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ================= MONGODB ================= */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  });

/* ================= ROUTES ================= */
app.use("/api", contactRoutes);

/* ================= HEALTH ================= */
app.get("/", (req, res) => {
  res.send("🚀 Backend is Live");
});

/* ================= SERVER ================= */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
