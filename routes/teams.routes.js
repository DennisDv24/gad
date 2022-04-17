const express = require('express');
const router = express.Router();

const Activity = require('../models/activity');
const Team = require('../models/team');

const ObjectId = require('mongodb').ObjectId;

router.get('/', async (req, res) => {
	const teams = await Team.find();
	res.json(teams);
})

router.get('/:id', async (req, res) => {
	const team = await Team.findById(req.params.id);
	res.json(team);
})

router.post('/:id', async (req, res) => {
	const currentAct = await Activity.findById(req.params.id, async (err, doc) => {
		const {
			teamName, imgId, currentMembers, maxMembers
		} = req.body;
		const newTeam = new Team({
			teamName, imgId, currentMembers, maxMembers,
			activityId: ObjectId(req.params.id)
		});
		await newTeam.save((err, newTeam) => {
			doc.teams.push(newTeam._id);
			doc.save();
		});
	});
	
	res.json({status: 'New team added'});
})

router.delete('/:id', async (req, res) => {
	const team = await Team.findById(req.params.id);
	const itsActivity = await Activity.findById(team.activityId, async (err, doc) => {
		doc.teams = doc.teams.filter(
			id => !ObjectId(id).equals(ObjectId(team._id))
		);
		doc.save();
		team.remove();
	});
	res.json({status: 'Team Deleted'});
});

module.exports = router;
