import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import contactRoute from "./routes/contactRoute.js";

const app = express();

/* ================== MIDDLEWARES ================== */
app.use(express.json());

app.use(
  cors({
    origin: "https://shyam-portfoliowebsite.netlify.app",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

/* ================== ROUTES ================== */
app.use("/api/contact", contactRoute);

/* ================== DB ================== */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

/* ================== SERVER ================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
