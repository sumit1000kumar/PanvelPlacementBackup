// routes/adminRoutes.js
const express = require("express");
const router = express.Router();

// Hardcoded admin credentials
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "secure123"; // change as needed

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    // Optionally use session or JWT here
    res.json({ success: true });
  } else {
    res.json({ success: false, message: "Invalid admin credentials." });
  }
});

module.exports = router;
