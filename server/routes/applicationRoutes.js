const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadMiddleware');
const { applyToJob } = require('../controllers/applicationController');

router.post('/apply', upload.single('resume'), applyToJob);

module.exports = router;
