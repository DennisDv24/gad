const mongoose = require('mongoose');
const { Schema } = mongoose;

const ActivitySchema = new Schema({
	eventTitle: { type: String, required: true },
	description: { type: String, required: true },
	imgId: { type: String, required: false },
	date: { type: String, required: true },
	maxEntries: { type: Number, required: true },
	currentEntries: { type: Number, required: true },
	price: { type: Number, required: true },
	teams: [{
		teamName: { type: String, required: true },
		imgId: { type: String, required: false },
		currentMembers: { type: Number, required: true },
		maxMembers: { type: Number, required: true }
	}]
});

module.exports = mongoose.model('Activity', ActivitySchema);
