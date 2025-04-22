const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
 // Import the Multer configuration
const Application = require('../models/applyModel'); // Mongoose model for applications

// Handle form submission and file upload
router.post('/apply', upload.single('resume'), async (req, res) => {
  console.log('Received body:', req.body);   // Debugging line
  console.log('Received file:', req.file);   // Debugging line

  try {
    // Extract form data from req.body
    const { name, college, course, email, phone, jobId } = req.body;

    // Get the file path from the uploaded file
    const resumePath = req.file ? '/uploads/' + req.file.filename : '';

    // Create a new application document
    const newApplication = new Application({
        jobId,
      name,
      college,
      course,
      email,
      phone,
      resumePath
    });

    // Save the application to the database
    await newApplication.save();

    // Send a response after successful submission
    res.status(200).send('Application submitted successfully!');
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Error submitting application');
  }
});

module.exports = router;
