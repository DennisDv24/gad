import React from "react";

import Inscription from './Inscription';
import OptionsList from './OptionsList';
import ActivityInfo from './ActivityInfo';

import { useParams } from 'react-router-dom';

export default function Activity() {

	const { id } = useParams();
	
	return (
		<>
			<Inscription />
			<ActivityInfo />
			<OptionsList id={id}/>
		</>
	);

}

