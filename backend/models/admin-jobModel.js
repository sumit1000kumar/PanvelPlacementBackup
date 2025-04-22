const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  jobId: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  post: { type: String, required: true },
  salary: { type: String, required: true },
  deadline: { type: String, required: true },
  description: { type: String, required: true },
  logo: { type: String, required: false }, // Logo is optional
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
