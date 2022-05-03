const express = require('express');
const router = express.Router();

const Activity = require('../models/activity');

router.get('/', async (req, res) => {
	const activities = await Activity.find();
	res.json(activities);
});

router.get('/:id', async (req, res) => {
	Activity.findById(req.params.id).then(
		act => res.json(act)
	).catch(
		err => res.status(400).json('Error: ' + err)
	);
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
	try {
		await act.save();
		res.json({newActivity: act});
	} catch (e) {
		err.status(400).json('Error ' + e);
	}
});

router.delete('/:id', async (req, res) => {
	Activity.findByIdAndRemove(req.params.id).then(
		() => res.json('Activity Deleted')
	).catch(
		err => err.status(400).json('Error: ' + err)
	);
});

// Updating activities
router.put('/update/:id', async (req, res) => {
	Activity.findByIdAndUpdate(req.params.id, req.body).then(
		() => res.json('Activity Updated')	
	).catch(
		err => err.status(400).json('Error ' + err)
	);
});

module.exports = router;

