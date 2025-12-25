import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import contactRoute from "./routes/contactRoute.js";

const app = express();

app.use(cors({
  origin: ["http://localhost:5173"],
}));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/api/contact", contactRoute);

app.get("/", (req, res) => {
  res.send("API running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
