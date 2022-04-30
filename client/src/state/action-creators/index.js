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

export const updateActivity = (updatedAct) => {
	return (dispatch) => {
		axios.put(`/api/activities/update/${updatedAct._id}`, updatedAct).then(
			res => dispatch({
				type: 'UPDATE_ACTIVITY',
				updatedActivity: updatedAct
			})
		)
	}
}

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

export const deleteTeam = teamToDelete => {
	let imgIdToDelete = teamToDelete.imgId;

	return (dispatch) => {
		axios.delete(`/api/teams/${teamToDelete._id}`).then(
			res => dispatch({
				type: 'DELETE_TEAM',
				teamId: teamToDelete._id
			})
		).then(
			axios.delete(`/api/upload/image/${imgIdToDelete}`)
			// NOTE I dont think I need to dispatch this action,
			// but maybe I will in the future
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

export const deleteActivity = act => {
	let actImgIdToDelete = act.imgId;
	let teamIds = act.teams;
	let actId = act._id;

	return async (dispatch) => {

		for (const teamId of teamIds) {
			const teamToDelete = await axios.get(`/api/teams/${teamId}`);
			const imgIdToDelete = teamToDelete.data.imgId;
			await axios.delete(`/api/teams/${teamToDelete.data._id}`).then(
				await axios.delete(`/api/upload/image/${imgIdToDelete}`)
			);
		}

		axios.delete(`/api/activities/${actId}`).then(res => 
			axios.delete(`/api/upload/image/${actImgIdToDelete}`).then(
				res => dispatch({
					type: 'DELETE_ACTIVITY',
					actIdToDelete: actId
				})
			)
		);
	}	
}

export const addTeamMember = (team) => {
	let newTeam = {
		...team,
		currentMembers: team.currentMembers + 1
	};
	return async (dispatch) => {
		let res = await axios.get(`/api/activities/${team.activityId}`);
		let newAct = {
			...res.data,
			currentEntries: res.data.currentEntries + 1
		}
		axios.put(`/api/teams/update/${team._id}`, newTeam);
		axios.put(`/api/activities/update/${res.data._id}`, newAct);
		dispatch({
			type: 'CURRENT_ACT',
			payload: newAct
		});
		dispatch({
			type: 'UPDATE_TEAM',
			team: newTeam
		});
	}
}

export const addActivityMember = (id) => {
	return async (dispatch) => {
		axios.get(`/api/activities/${id}`).then(
			res => {
				let newAct = {
					...res.data,
					currentEntries: res.data.currentEntries + 1
				};
				axios.put(`/api/activities/update/${id}`, newAct);
				dispatch({
					type: 'CURRENT_ACT',
					payload: newAct
				});
			}
		)
	}
}



