const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");
const Contact = require("../models/Contact");

// Get all menu items
router.get("/menu", async (req, res) => {
  const items = await MenuItem.find();
  res.json(items);
});

// Save contact form
router.post("/contact", async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.json({ message: "Message received!" });
});

module.exports = router;
