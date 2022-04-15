const mongoose = require('mongoose');
const crypto = require('crypto');
const path = require('path');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');

const pass = '4G6llBiVageM7gzR';
const URI  = `mongodb+srv://gad-db-master:${pass}@cluster0.t38pd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connection = mongoose.createConnection(URI);

mongoose.connect(URI).then(
	db => console.log('DB is connected')
).catch(
	err => console.log(err)
);

let gfs;

connection.once('open', () => {
	gfs = Grid(connection.db, mongoose.mongo);
	gfs.collection('uploads');
});

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
//module.exports = mongoose;

