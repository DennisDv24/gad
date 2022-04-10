import React from "react";
import { CardList } from './CardList';
import { NewsTitle } from './NewsTitle';
import { MainMenuNav } from './MainMenuNav';
import { useState } from "react";

import {
	 Box, Image, Badge, Container, Center, Text
} from '@chakra-ui/react';

export default function MainMenu() {

	let cardsStack = [];
	cardsStack.push(require('../data/card1.json'));
	cardsStack.push(require('../data/card2.json'));
	cardsStack.push(require('../data/card3.json'));
	cardsStack.push(require('../data/card4.json'));

	const [cards, setCards] = useState(cardsStack);

	return (
		<>
			<NewsTitle/>
			<MainMenuNav/>
			<CardList cards={cards}/>
		</>
	);
}
