const express = require('express');
const { upload } = require('../database.js');
const router = express.Router();

// Route for uploading images using the multer middleware
router.post('/', upload.single('eventImg'), (req, res) => {
	res.json({file: req.file});
});

router.get('/', async (req, res) => {
	//const images = await Activity.find();
	//console.log(res);
	res.json({images: res.file});
});

module.exports = router;
