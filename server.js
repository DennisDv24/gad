const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database');

const app = express();

app.set('port', process.env.PORT || 5000);
app.use(morgan('dev'));
// Should I use body-parser?
app.use(express.json());
app.use('/api/activities', require('./routes/activity.routes'));

app.use(express.static(
	path.join(__dirname, 'build')
));

app.listen(app.get('port'), () => {
	console.log(`Server on ${app.get('port')}`);
});
