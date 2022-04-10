import React from "react";
import MainMenu from './components/MainMenu';

// NOTE this should do something like 
// import * from ./AllActivities
// and AllActivities.jsx should be
// updated by the back-end
import Act1 from './activities/1/Act1.jsx';
import Act2 from './activities/2/Act2.jsx';
import Act3 from './activities/3/Act3.jsx';
import Act4 from './activities/4/Act4.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {

  	return (
		<Router>
			<Routes>
				<Route path='/' element={<MainMenu />} />
				<Route path='/activity1' element={<Act1 />} />
				<Route path='/activity2' element={<Act2 />} />
				<Route path='/activity3' element={<Act3 />} />
				<Route path='/activity4' element={<Act4 />} />
			</Routes>
		</Router>
  	);
}

