import React from "react";
import { useState } from "react";
import { Box, Image, Badge } from '@chakra-ui/react';
import { CardList } from './components/CardList';

const fs = require('fs');
export default function App() {
	const card1 = require('./data/card1.json');
	const card2 = require('./data/card2.json');
	const card3 = require('./data/card3.json');
	
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


	const [cards, setCards]= useState([card1, card2, card3]);

  	return (
		<>
			<CardList cards={cards}/>
		</>
  	);
}

