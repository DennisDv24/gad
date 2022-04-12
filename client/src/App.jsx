import React from "react";
import { useState } from "react";
import MainMenu from './components/MainMenu';

// NOTE this should do something like 
// import * from ./AllActivities
// and AllActivities.jsx should be
// updated by the back-end
import Activity from './components/activities/Activity';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
	let activitiesStack = []
	activitiesStack.push(require('./data/activity1.json'));
	activitiesStack.push(require('./data/activity2.json'));
	activitiesStack.push(require('./data/activity3.json'));
	activitiesStack.push(require('./data/activity4.json'));
	const [activities, setActivities] = useState(activitiesStack);

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

