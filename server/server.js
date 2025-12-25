import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoute.js";

dotenv.config();

const app = express();

/* 🔥 MIDDLEWARE FIRST */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* 🔥 CONNECT DB BEFORE ROUTES */
connectDB();

/* 🔥 ROUTES */
app.use("/api", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
