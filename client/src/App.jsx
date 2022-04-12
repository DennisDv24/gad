import React from "react";
import { useState, useEffect } from "react";
import MainMenu from './components/MainMenu';

// NOTE this should do something like 
// import * from ./AllActivities
// and AllActivities.jsx should be
// updated by the back-end
import Activity from './components/activities/Activity';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

let currentActs = [];

/*
const fetchActivities = (setter) => {
	fetch('/api/activities').then(
		res => res.json()
	).then(
		data => {
			setter(data);
		}
	);
}
*/

export default function App() {
	
	const [activities, setActivities] = useState(currentActs);
	
	useEffect(() => {
		//fetchActivities(setActivities);
		fetch('/api/activities').then(
			res => res.json()
		).then(
			data => setActivities(data)
		);
	}, []);

	console.log(activities);
	
	// TODO the activities dont keep the state when changing
	// the route, so I should use Redux
  	return (
		<Router>
			<Routes>
				<Route path='/' element={<MainMenu currentActs={activities}/>} />
				<Route 
					path='/activity/:id' 
					element={<Activity activities={activities} />} 
				/>
			</Routes>
		</Router>
  	);
}

