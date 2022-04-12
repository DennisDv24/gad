import React from "react";
import { CardList } from './CardList';
import { NewsTitle } from './NewsTitle';
import { MainMenuNav } from './MainMenuNav';

export default function MainMenu({ currentActs }) {
	return (
		<>
			<NewsTitle/>
			<MainMenuNav/>
			<CardList activities={currentActs}/>
		</>
	);
}
