import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    console.log("REQ BODY 👉", req.body);

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields required" });
    }

    const contact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error("CONTACT ERROR ❌", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

export default router;
