import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
		<Router>
			<Routes>
				<Route path='/' element={<CardList cards={cards}/>} />
				<Route path='/test' element={<Act1 />} />
			</Routes>
		</Router>
