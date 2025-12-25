import express from "express";
import Contact from "../Contact.js";

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    console.log("REQ BODY 👉", req.body);

    const contact = await Contact.create(req.body);

    res.status(201).json({
      success: true,
      message: "Contact saved successfully",
      contact
    });
  } catch (error) {
    console.error("CONTACT ERROR ❌", error);
    res.status(500).json({
      success: false,
      message: "Failed to save contact"
    });
  }
});

export default router;
