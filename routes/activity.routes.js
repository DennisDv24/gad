const express = require('express');
const router = express.Router();

const Activity = require('../models/activity');

router.get('/', async (req, res) => {
	const activities = await Activity.find();
	res.json(activities);
});

// TODO refactor this
router.post('/', async (req, res) => {
	const {
		eventTitle,
		date,
		maxEntries,
		currentEntries,
		price,
		teams
	} = req.body;
	const act = new Activity({
		eventTitle,
		date,
		maxEntries,
		currentEntries,
		price,
		teams
	});
	await act.save();
	res.json({status: 'Activity Saved'});
});


module.exports = router;
