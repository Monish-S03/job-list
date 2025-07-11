const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  type: String,
  description: String,
  resumes: [String], // file paths of uploaded resumes
});

module.exports = mongoose.model("Job", jobSchema);
