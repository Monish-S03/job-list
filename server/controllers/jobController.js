const Job = require("../models/Job");

// Get all jobs with optional filters
exports.getJobs = async (req, res) => {
  const { title, type, location } = req.query;
  const query = {};

  if (title) query.title = new RegExp(title, "i");
  if (type) query.type = type;
  if (location) query.location = new RegExp(location, "i");

  const jobs = await Job.find(query);
  res.json(jobs);
};

// Create a new job
exports.createJob = async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.status(201).json(job);
};

// Update a job
exports.updateJob = async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(job);
};

// Get employer jobs (you can enhance this with employer auth later)
exports.getEmployerJobs = async (req, res) => {
  const jobs = await Job.find(); // For now return all
  res.json(jobs);
};

// Upload resume
exports.applyJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).send("Job not found");

  job.resumes.push(req.file.path);
  await job.save();
  res.send("Resume uploaded and applied successfully");
};
