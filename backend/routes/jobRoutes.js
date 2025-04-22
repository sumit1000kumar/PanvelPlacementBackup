const express = require('express');
const router = express.Router();
const { getAllJobs } = require('../controllers/jobController');

router.get('/jobs', getAllJobs);
router.get("/api/jobs", async (req, res) => {
    try {
      const { minSalary, maxSalary, location, post, experience } = req.query;
      const filter = {};
  
      if (minSalary || maxSalary) {
        filter.salary = {};
        if (minSalary) filter.salary.$gte = parseInt(minSalary);
        if (maxSalary) filter.salary.$lte = parseInt(maxSalary);
      }
  
      if (location && location.trim() !== "") {
        filter.location = { $regex: new RegExp(location, "i") }; // case-insensitive
      }
  
      if (post && post.trim() !== "") {
        filter.post = { $regex: new RegExp(post, "i") };
      }
  
      if (experience && experience.trim() !== "") {
        filter.experience = experience;
      }
  
      const jobs = await Job.find(filter).sort({ createdAt: -1 });
      res.json(jobs);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  });
  
  
  
  
module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Job = require('../models/admin-jobModel');

// // GET /api/jobs with filters
// router.get('/api/jobs', async (req, res) => {
//     try {
//       const { minSalary, maxSalary, location, post, experience } = req.query;
  
//       const filter = {};
  
//       // Salary filter (if provided)
//       if (minSalary || maxSalary) {
//         filter.salary = {};
//         if (minSalary) filter.salary.$gte = parseInt(minSalary);
//         if (maxSalary) filter.salary.$lte = parseInt(maxSalary);
//       }
  
//       // Location filter (if provided)
//       if (location) {
//         filter.location = { $regex: new RegExp(location, "i") };  // Case insensitive
//       }
  
//       // Post filter (if provided)
//       if (post) {
//         filter.post = { $regex: new RegExp(post, "i") };  // Case insensitive
//       }
  
//       // Experience filter (if provided)
//       if (experience) {
//         filter.experience = experience;
//       }
  
//       // Fetch jobs from DB with the filter
//       const jobs = await Job.find(filter).sort({ createdAt: -1 });
//       res.status(200).json(jobs);  // Send the filtered jobs back
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: "Server Error" });
//     }
//   });
  

// module.exports = router;

