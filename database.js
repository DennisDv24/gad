const mongoose = require('mongoose');

const pass = '4G6llBiVageM7gzR'
const URI  = `mongodb+srv://gad-db-master:${pass}@cluster0.t38pd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(URI).then(
	db => console.log('DB is connected')
).catch(
	err => console.log(err)
);

module.exports = mongoose;
