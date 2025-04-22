const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  
  jobId: String,
  name: String,
  college: String,
  course: String,
  email: String,
  phone: String,
  resumePath: String,// file path to resume
  status: { type: String, default: "Pending" } ,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Application', applicationSchema);
