import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import store from './state/store';
//import { getItems } from './actions/itemActions';
import { actionCreators } from './state/index';
import PropTypes from 'prop-types';

import MainMenu from './components/MainMenu';
import Activity from './components/activities/Activity';

const App = () => {
	
  	return (
		<Router>
			<Routes>
				<Route path='/' element={<MainMenu />} />
				<Route 
					path='/activity/:id' 
					element={<Activity />} 
				/>
			</Routes>
		</Router>
  	);
}

export default App;
