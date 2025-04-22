const express = require('express');
const router = express.Router();
const multer = require('multer');
const Job = require('../models/admin-jobModel');
const path = require('path');

// Set up file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../assets/uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

// ✅ Route to get all jobs (you had this commented out!)
router.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ message: 'Error fetching jobs' });
  }
});

// Add job
router.post('/add-job', upload.single('logo'), async (req, res) => {
  try {
    const { company, location, post, salary, deadline, description } = req.body;
    let jobId = 'PP' + ('000000' + (await Job.countDocuments() + 1)).slice(-6);
    let logo = null;

    if (req.file) {
      logo = '/assets/uploads/' + req.file.filename;
    }

    const newJob = new Job({
      jobId,
      company,
      location,
      post,
      salary,
      deadline,
      description,
      logo,
    });

    await newJob.save();
    res.status(201).json({ message: 'Job added successfully', job: newJob });
  } catch (error) {
    console.error('Error adding job:', error);
    res.status(500).json({ message: 'Error adding job' });
  }
});

// Edit job
router.put('/edit-job/:id', upload.single('logo'), async (req, res) => {
  try {
    const jobId = req.params.id;
    const { company, location, post, salary, deadline, description } = req.body;
    const logo = req.file ? '/assets/uploads/' + req.file.filename : null;

    let updatedJob = await Job.findOne({ jobId });

    if (!updatedJob) {
      return res.status(404).json({ message: 'Job not found' });
    }

    updatedJob.company = company;
    updatedJob.location = location;
    updatedJob.post = post;
    updatedJob.salary = salary;
    updatedJob.deadline = deadline;
    updatedJob.description = description;
    if (logo) updatedJob.logo = logo;

    await updatedJob.save();
    res.status(200).json({ message: 'Job updated successfully', job: updatedJob });
  } catch (error) {
    console.error('Error updating job:', error);
    res.status(500).json({ message: 'Error updating job' });
  }
});

// Delete job
router.delete('/delete-job/:id', async (req, res) => {
  try {
    const jobId = req.params.id;
    const deletedJob = await Job.findOneAndDelete({ jobId });

    if (!deletedJob) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.status(200).json({ success: true, message: 'Job deleted successfully' });
  } catch (error) {
    console.error('Error deleting job:', error);
    res.status(500).json({ message: 'Error deleting job' });
  }
});

// Get a specific job
router.get('/jobs/:id', async (req, res) => {
  console.log('GET /jobs/:id hit with ID:', req.params.id);

  try {
    const job = await Job.findOne({ jobId: req.params.id });

    if (!job) {
      console.log('No job found for ID:', req.params.id);
      return res.status(404).json({ message: 'Job not found' });
    }

    console.log('Job found:', job);
    res.status(200).json(job);
  } catch (error) {
    console.error('Error fetching job:', error);
    res.status(500).json({ message: 'Error fetching job details' });
  }
});

// Test route
router.get('/test', (req, res) => {
  res.send('Admin job routes working');
});

module.exports = router;
