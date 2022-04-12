import React from "react";
import { CardList } from './CardList';
import { NewsTitle } from './NewsTitle';
import { MainMenuNav } from './MainMenuNav';
import { useState } from "react";

export default function MainMenu({ currentActs }) {
	
	// setActivities will be updadted like
	// setActivities(acts => acts.push(newAct))
	const [activities, setActivities] = useState(currentActs);

	return (
		<>
			<NewsTitle/>
			<MainMenuNav/>
			<CardList activities={activities}/>
		</>
	);
}
