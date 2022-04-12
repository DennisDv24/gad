const mongoose = require('mongoose');
const { Schema } = mongoose;

const ActivitySchema = new Schema({
	eventTitle: { type: String, required: true },
	date: { type: String, required: true },
	maxEntries: { type: Number, required: true },
	currentEntries: { type: Number, required: true },
	price: { type: Number, required: true },
	teams: [{
		teamName: { type: String, required: true },
		currentMembers: { type: Number, required: true },
		maxMembers: { type: Number, required: true }
	}]
});

module.exports = mongoose.model('Activity', ActivitySchema);
