const express = require('express');
const router = express.Router();

const Activity = require('../models/activity');

router.get('/', async (req, res) => {
	const activities = await Activity.find();
	res.json(activities);
});

router.get('/:id', async (req, res) => {
	const activity = await Activity.findById(req.params.id);
	res.json(activity);
});

// TODO refactor this
router.post('/', async (req, res) => {
	const {
		eventTitle,
		description,
		imgId,
		date,
		maxEntries,
		currentEntries,
		price,
		teams
	} = req.body;
	const act = new Activity({
		eventTitle,
		description,
		imgId,
		date,
		maxEntries,
		currentEntries,
		price,
		teams
	});
	await act.save();
	res.json({status: 'Activity Saved'});
});

router.delete('/:id', async (req, res) => {
	await Activity.findByIdAndRemove(req.params.id);
	res.json({status: 'Activity Deleted'})
});


module.exports = router;

