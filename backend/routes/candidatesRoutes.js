const express = require('express');
const router = express.Router();
const Apply = require('../models/applyModel'); // Make sure the model is correct

// ✅ Route to fetch all applicants
router.get('/applicants', async (req, res) => {
    try {
      const applicants = await Apply.find();
      console.log(applicants); // Log applicants to check jobId field
      res.json({ success: true, applicants });
    } catch (error) {
      console.error("Error fetching applicants:", error);
      res.status(500).json({ success: false, message: 'Error fetching applicants' });
    }
  });

// ✅ PATCH: Update status
router.patch("/update-status/:id", async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
  
    try {
      // Use Apply model to update the status
      const updated = await Apply.findByIdAndUpdate(id, { status }, { new: true });

      if (!updated) {
        return res.status(404).json({ success: false, message: "Applicant not found" });
      }

      res.json({ success: true, updated });
    } catch (error) {
      console.error("Error updating status:", error); // Log the error
      res.status(500).json({ success: false, message: "Failed to update status" });
    }
});

module.exports = router;
