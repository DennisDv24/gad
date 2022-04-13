import { combineReducers } from 'redux';
import activityReducer from './activityReducer';

const reducers = combineReducers({
	activities: activityReducer
});

export default reducers;
