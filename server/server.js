import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import contactRoute from "./routes/contactRoute.js";

dotenv.config();

const app = express();

// VERY IMPORTANT
app.use(cors());
app.use(express.json()); // <-- without this req.body = undefined

app.use("/api/contact", contactRoute);

app.get("/", (req, res) => {
  res.send("Server running");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch(err => console.log(err));
