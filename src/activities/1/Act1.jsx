import React from "react";
import Inscription from '../../components/activities/Inscription';
import OptionsList from '../../components/activities/OptionsList';
import { useState } from "react";

export default function Act1() {
	let teamsStack = [];
	const totalTeams = 8;
	for(var i = 1; i <= totalTeams; i++)
		teamsStack.push(require('../../data/team' + i +'.json'));

	const [teams, setTeams] = useState(teamsStack);

	return (
		<>
			<Inscription />
			<OptionsList teams={teams} />
		</>
	);
}

