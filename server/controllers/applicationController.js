const Application = require('../models/Application');

const applyToJob = async (req, res) => {
  try {
    const { jobId, applicantId } = req.body;
    const resume = req.file.path;

    const application = new Application({ jobId, applicantId, resume });
    await application.save();

    res.status(201).json({ message: 'Application submitted' });
  } catch (err) {
    res.status(500).json({ message: 'Application failed' });
  }
};

module.exports = { applyToJob };
