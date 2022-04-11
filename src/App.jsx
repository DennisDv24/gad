import React from "react";
import { useState } from "react";
import MainMenu from './components/MainMenu';

// NOTE this should do something like 
// import * from ./AllActivities
// and AllActivities.jsx should be
// updated by the back-end
import Act1 from './activities/1/Act1.jsx';
import Act2 from './activities/2/Act2.jsx';
import Act3 from './activities/3/Act3.jsx';
import Act4 from './activities/4/Act4.jsx';
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
				<Route path='/activity1' element={<Act1 />} />
				<Route path='/activity2' element={<Act2 />} />
				<Route path='/activity3' element={<Act3 />} />
				<Route path='/activity4' element={<Act4 />} />
				{/*NOTE that currentTeams will be decided by the 
					activity that user selects */}
				<Route 
					path='/activity/:id' 
					element={<Activity activities={activities} />} 
				/>
			</Routes>
		</Router>
  	);
}

