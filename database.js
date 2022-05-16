const mongoose = require('mongoose');
const crypto = require('crypto');
const path = require('path');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
require('dotenv').config({ path: './.env' });

const URI = process.env.DB_URI;

const connection = mongoose.createConnection(URI);

mongoose.connect(URI).then(
	db => console.log('DB is connected')
).catch(
	err => console.log(err)
);

const storage = new GridFsStorage({
	url: URI,
	file: (req, file) => {
		return new Promise((resolve, reject) => {
			crypto.randomBytes(16, (err, buf) => {
				if (err) {
					return reject(err);
				}
				const filename = 
					buf.toString('hex') + 
					path.extname(file.originalname);
				const fileInfo = {
					filename: filename,
					bucketName: 'uploads'
				};
				resolve(fileInfo);
			});
		});
	}
});

const upload = multer({ storage });

exports.upload = upload;
exports.connection = connection;

