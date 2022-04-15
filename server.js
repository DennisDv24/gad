const express = require('express');
const morgan = require('morgan');
const path = require('path');

const methodOverride = require('method-override');

const db = require('./database');

const app = express();

app.set('port', process.env.PORT || 5000);
// app.set('view engine', 'ejs'); NOTE I dont know what this does
// but I might need it.
//
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));


// Should I use body-parser?
app.use(express.json());
app.use('/api/activities', require('./routes/activity.routes'));
app.use('/api/upload', require('./routes/upload.routes'));

if(process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(
			__dirname, 'client', 'build', 'index.html'
		));
	});
}


app.listen(app.get('port'), () => {
	console.log(`Server on ${app.get('port')}`);
});
