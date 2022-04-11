import React from "react";
import Inscription from './Inscription';
import OptionsList from './OptionsList';
import { useParams } from 'react-router-dom';

export default function Activity({ activities }) {

	const { id } = useParams();
	return (
		<>
			<Inscription />
			<OptionsList teams={activities[id-1].teams} />
		</>
	);
}

