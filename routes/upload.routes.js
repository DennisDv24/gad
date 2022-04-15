const express = require('express');
const { upload } = require('../database.js');
const router = express.Router();

// Route for uploading images using the multer middleware
router.post('/', upload.single('eventImg'), (req, res) => {
	res.json({file: req.file});
});

module.exports = router;
