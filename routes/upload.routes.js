const express = require('express');
const { upload, connection } = require('../database.js');
const router = express.Router();
const Grid = require('gridfs-stream');
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;
const mongodb = require('mongodb');

// Route for uploading images using the multer middleware
router.post('/', upload.single('eventImg'), (req, res) => {
	res.json({file: req.file});
});

router.get('/', async (req, res) => {
	//const images = await Activity.find();
	res.json({images: res.file});
});

let gfs, bucket;

connection.once('open', () => {
	bucket = new mongodb.GridFSBucket(connection.db);
	gfs = Grid(connection.db, mongoose.mongo);
	gfs.collection('uploads');
});

router.get('/files', (req, res) => {
	gfs.files.find().toArray((err, files) => {
		if (err) {
			return res.status(404).json({err: err});
		}
		if(!files || files.length === 0) {
			return res.status(404).json({
				err: 'No files exist'
			});
		}

		return res.json(files);
	});
});

router.get('/files/:id', (req, res) => {
	gfs.files.findOne(
		{_id: ObjectId(req.params.id)}, 
		(err, file) => res.json(file)
	);
});

const isImage = (file) => 
	file.contentType === 'image.jpeg' ||
	file.contentType === 'image.png';

router.get('/image/:id', (req, res) => {
	gfs.files.findOne({_id: ObjectId(req.params.id)}, (err, file) => {
		if (err) {
			return res.status(404).json({err: err});
		}
		const readstream = gfs.createReadStream(file.filename);
      	readstream.pipe(res);
	});
});

router.delete('/image/:id', (req, res) => {
	gfs.remove({_id: ObjectId(req.params.id), root: 'uploads'} , (err, gridStore) => {
		if (err) {
			return res.status(404).json({err: err});
		}
		res.json({status: 'Image Deleted'});
	});
});

//exports.router = router;
//exports.gfs = gfs;
module.exports = router;

