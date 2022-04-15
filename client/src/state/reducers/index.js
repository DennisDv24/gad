import { combineReducers } from 'redux';
import activityReducer from './activityReducer';
import imageReducer from './imageReducer';

const reducers = combineReducers({
	activities: activityReducer,
	images: imageReducer
});

export default reducers;
