const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const verifyAdminToken = require("../middlewares/auth");

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "secure123"; // Change as needed

// -----------------
// Admin Login Route
// -----------------
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const token = jwt.sign(
      { username: ADMIN_USERNAME },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return res.json({ success: true, token });
  }

  return res.status(401).json({ success: false, message: "Invalid credentials" });
});

// -------------------------------
// Protected: Get All Jobs (Read)
// -------------------------------
router.get("/jobs", verifyAdminToken, async (req, res) => {
  const jobs = [
    { title: "Software Developer", company: "TechCorp", location: "Remote" },
    { title: "Product Manager", company: "InnoTech", location: "San Francisco" },
  ];

  res.json({ success: true, jobs });
});

// -------------------------------
// Protected: Create New Job (Add)
// -------------------------------
router.post("/jobs", verifyAdminToken, async (req, res) => {
  const { jobDetails } = req.body;

  // Save jobDetails to DB (mocked for now)
  res.json({ success: true, message: "Job created successfully." });
});

module.exports = router;
