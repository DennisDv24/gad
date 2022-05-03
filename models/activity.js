const mongoose = require('mongoose');
const { Schema } = mongoose;

const ActivitySchema = new Schema({
	eventTitle: { type: String, required: true },
	description: { type: String, required: true },
	imgId: { type: String, required: false },
	date: { type: String, required: true },
	maxEntries: { type: Number, required: true },
	maxTeams: { type: Number, required: false },
	membersPerTeam: { type: Number, required: false },
	currentEntries: { type: Number, required: true },
	price: { type: Number, required: true },
	teams: [{ type: Schema.Types.ObjectId, ref: 'Team' }]
});

module.exports = mongoose.model('Activity', ActivitySchema);
