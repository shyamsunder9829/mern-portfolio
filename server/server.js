import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import contactRoute from "./routes/contactRoute.js";

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(cors(
  { origin: "*",
    methods: ["GET", "POST"],
   }
));
app.use(express.json());

app.use("/api/contact", contactRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error(err));

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
  console.log("MONGO URI 👉", process.env.MONGO_URI);
});
