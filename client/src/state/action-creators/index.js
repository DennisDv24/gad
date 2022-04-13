import axios from 'axios';

export const addActivity = (newAct) => {
	return (dispatch) => {
		dispatch({
			type: 'ADD_ACTIVITY',
			newActivity: newAct
		});
	}
};

export const getActivities = () => {
	return (dispatch) => {
		dispatch(setItemsLoading());
		axios.get('/api/activities').then(
			res => dispatch({
				type: 'GET_ACTIVITIES',
				payload: res.data
			})
		)
	}
};

export const getActivity = (id) => {
	return (dispatch) => {
		dispatch(setItemsLoading());
		axios.get(`/api/activities/${id}`).then(
			res => dispatch({
				type: 'GET_ACTIVITY',
				payload: res.data
			})
		)
	}
};

export const setItemsLoading = () => {
	return {
		type: 'ITEMS_LOADING'
	}
};

export const setCurrentAct = (currentAct) => {
	return {
		type: 'CURRENT_ACT',
		payload: currentAct
	}
};
