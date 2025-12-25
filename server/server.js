import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/* 🔥 DB FIRST */
await connectDB();

/* 🔥 ROUTES AFTER DB */
app.use("/api", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
