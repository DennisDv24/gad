import axios from 'axios';
import FormData from 'form-data';

export const addActivity = (newAct) => {
	return (dispatch) => {
		axios.post('/api/activities', newAct).then(
			res => dispatch({
				type: 'ADD_ACTIVITY',
				payload: newAct
			})
		);
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

export const addActivityImage = (newImg) => {
	let data = new FormData();
	// Test with eventImg
	data.append('eventImg', newImg, newImg.name);

	return (dispatch) => {
		axios.post('/api/upload', data, {
			headers: {
				'accept': 'application/json',
				'Accept-Language': 'en-US,en;q=0.8',
				'Content-Type': `multipart/form-data; boundary=${data._boundary}`
  			}
		}).then(
			res => dispatch({
				type: 'ADD_IMAGE',
				payload: res.data
			})
		);
	}
};


export const getActivityImage = (id) => {
	return (dispatch) => {
		dispatch(setItemsLoading());
		axios.get(`/api/upload/image/${id}`).then(
			res => dispatch({
				type: 'GET_IMAGE',
				payload: res.data
			})
		)
	}
};

export const addTeamImage = (newImg) => addActivityImage(newImg);
export const getTeamImage = (id) => getActivityImage(id);

export const addTeam = (teamToAdd, actId) => {

	return (dispatch) => {
		axios.post(`/api/teams/${actId}`, teamToAdd).then(
			res => dispatch({
				type: 'ADD_TEAM',
				newTeam: teamToAdd
			})
		)
	}
	
}

export const getTeamsAtActivity = (actId) => {
	return (dispatch) => {
		dispatch(setItemsLoading());
		axios.get(`/api/activities/${actId}`).then(async res => {
			let finalTeams = [];
			for (const teamId of res.data.teams) {
				const teamData = await axios.get(`/api/teams/${teamId}`);
				finalTeams.push(teamData.data);
			}
			dispatch({
				type: 'GET_ACTIVITY_TEAMS',
				teams: finalTeams
			});
		});
	}
}



