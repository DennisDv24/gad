import React from "react";
import { useState } from "react";
import {
	 Box, Image, Badge, Container, Center, Text
} from '@chakra-ui/react';
import { CardList } from './components/CardList';
import { NewsTitle } from './components/NewsTitle';
import { MainMenuNav } from './components/MainMenuNav';

import Act1 from './Pages/Act1';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const fs = require('fs');
export default function App() {
	let cardsStack = [];
	cardsStack.push(require('./data/card1.json'));
	cardsStack.push(require('./data/card2.json'));
	cardsStack.push(require('./data/card3.json'));
	cardsStack.push(require('./data/card4.json'));

	const [cards, setCards] = useState(cardsStack);

  	return (
		<Router>
			<Routes>
				<Route path='/' element={<CardList cards={cards}/>} />
				<Route path='/test' element={<Act1 />} />
			</Routes>
		</Router>
  	);
}

