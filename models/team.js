const mongoose = require('mongoose');
const { Schema } = mongoose;

const TeamSchema = new Schema({
	teamName: { type: String, required: true },
	imgId: { type: String, required: false },
	currentMembers: { type: Number, required: true },
	maxMembers: { type: Number, required: true },
	activityId: { type: Schema.Types.ObjectId, ref: 'Activity' }
});

module.exports = mongoose.model('Team', TeamSchema);
