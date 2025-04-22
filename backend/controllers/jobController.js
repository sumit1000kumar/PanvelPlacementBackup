const Job = require('../models/admin-jobModel');

exports.getAllJobs = async (req, res) => {
  try {
    let query = {};

    const { minSalary, maxSalary, cgpa, liveKT, experience } = req.query;

    if (minSalary || maxSalary) {
      query.salary = {};
      if (minSalary) query.salary.$gte = parseInt(minSalary);
      if (maxSalary) query.salary.$lte = parseInt(maxSalary);
    }

    if (cgpa) query.cgpa = { $lte: parseFloat(cgpa) };
    if (liveKT) query.liveKT = { $lte: parseInt(liveKT) };
    if (experience) query.experience = experience;

    const jobs = await Job.find(query).sort({ createdAt: -1 });

    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching jobs', details: err.message });
  }
};
