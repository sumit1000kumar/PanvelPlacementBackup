const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const Application = require('../models/applyModel');

router.post('/apply', upload.single('resume'), async (req, res) => {
  console.log('Received body:', req.body);
  console.log('Received file:', req.file);

  try {
    const { name, college, course, email, phone, jobId } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Resume file is required' });
    }

    const resumePath = '/uploads/' + req.file.filename;

    const newApplication = new Application({
      jobId,
      name,
      college,
      course,
      email,
      phone,
      resumePath
    });

    await newApplication.save();

    res.status(200).json({ message: 'Application submitted successfully!' }); // Changed to JSON
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Error submitting application' }); // Changed to JSON
  }
});

module.exports = router;
