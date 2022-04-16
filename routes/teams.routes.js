const express = require('express');
const router = express.Router();

const Activity = require('../models/activity');

router.get('/', async (req, res) => {
	const currentActs = await Activity.find();
	out = []
	currentActs.forEach(act => out.push(act.teams));
	res.json(out);
})

router.get('/:id', async (req, res) => {
	const currentAct = await Activity.findById(req.params.id);
	res.json(currentAct.teams);
})

router.post('/:id', async (req, res) => {
	const currentAct = await Activity.findById(req.params.id, (err, doc) => {
		doc.teams.push(req.body);
		doc.save();
	});
	res.json({status: 'New team added'});
})

module.exports = router;
