const express = require('express');
const router = express.Router();

const Activity = require('../models/activity');
const Team = require('../models/team');

const ObjectId = require('mongodb').ObjectId;

router.get('/', async (req, res) => {
	const teams = await Team.find();
	res.json(teams);
})

router.get('/:id', (req, res) => {
	Team.findById(req.params.id).then(
		team => res.json(team)
	).catch(
		e => res.status(400).json(e)
	);
})

router.post('/:id', async (req, res) => {
	await Activity.findById(req.params.id, async (err, doc) => {
		if(err) 
			res.status(400).json(err);
		else {
			const {
				teamName, imgId, currentMembers, maxMembers
			} = req.body;
			const newTeam = new Team({
				teamName, imgId, currentMembers, maxMembers,
				activityId: ObjectId(req.params.id)
			});
			await newTeam.save((err, newTeam) => {
				if(err) 
					res.status(400).json(err);
				else {
					doc.teams.push(newTeam._id);
					doc.save();
					res.json({status: 'New team added'});
				}
			});
		}
	});
		
})


router.delete('/:id', (req, res) => {
	Team.findById(req.params.id, async (err, team) => {
		if(err)
			return res.status(400).json(err)
		await Activity.findById(team.activityId, async (err, doc) => {
			if (err)
				return res.status(404).json({ err: err });
			doc.teams = doc.teams.filter(
				id => !ObjectId(id).equals(ObjectId(team._id))
			);
			doc.save();
			team.remove();
			res.json({status: 'Team Deleted'});
		});
	});

});

// Updating teams
router.put('/update/:id', (req, res) => {
	Team.findByIdAndUpdate(req.params.id, req.body).then(
		() => res.json({status: 'Team Updated'})
	).catch(e => res.status(400).json(e));
});


module.exports = router;

