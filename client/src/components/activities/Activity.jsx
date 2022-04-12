import React from "react";
import Inscription from './Inscription';
import OptionsList from './OptionsList';
import { useParams } from 'react-router-dom';

export default function Activity({ activities }) {
	console.log(activities);
	const { id } = useParams();
	// TODO there you should do an fetchById or something like that
	return (
		<>
			<Inscription />
			<OptionsList teams={activities[0].teams} />
		</>
	);
}

