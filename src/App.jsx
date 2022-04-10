import React from "react";
import { useState } from "react";
import { Box, Image, Badge } from '@chakra-ui/react';
import { CardList } from './components/CardList';

const fs = require('fs');
export default function App() {
	let cardsStack = [];
	cardsStack.push(require('./data/card1.json'));
	cardsStack.push(require('./data/card2.json'));
	cardsStack.push(require('./data/card3.json'));
	cardsStack.push(require('./data/card4.json'));
	// FIXME why this doesnt works? how do I organize
	// the cards if not this way? I should use the backend, I guess.
	//const getCardsJsons = () => {
	//	let toRet = []
	//	fs.readdir('data/', (err, files) => {
	//		files.forEach(file => {
	//			toRet.push(require(file));
	//		});
	//	});
	//	return toRet;
	//};


	const [cards, setCards] = useState(cardsStack);

  	return (
		<>
			<CardList cards={cards}/>
		</>
  	);
}

