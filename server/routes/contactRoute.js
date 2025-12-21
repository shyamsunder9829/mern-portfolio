import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields required" });
    }

    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();

    res.status(201).json({ message: "Message saved successfully" });
  } catch (error) {
    console.error("Contact error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
