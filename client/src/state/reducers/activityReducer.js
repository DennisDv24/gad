
const initialState = {
	items: [],
	loading: false,
	currentItem: null,
	currentItemTeams: []
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ACTIVITIES':
			return {
				...state,
				items: action.payload,
				loading: false
			};
		case 'GET_ACTIVITY':
			return {
				...state,
				currentItem: action.payload
			};
		case 'ITEMS_LOADING':
			return {
				...state,
				loading: true
			};
		case 'CURRENT_ACT':
			return {
				...state,
				currentItem: action.payload
			};
		case 'ADD_ACTIVITY':
			return {
				...state,
				items: [...state.items, action.payload]
			};
		case 'ADD_TEAM':
			state.currentItemTeams.push(action.newTeam);
			return {
				...state,
				loading: false
			};
		case 'GET_ACTIVITY_TEAMS':
			return {
				...state,
				currentItemTeams: action.teams,
				loading: false
			};
		case 'DELETE_TEAM':
			return {
				...state, 
				currentItemTeams: state.currentItemTeams.filter(
					team => team._id !== action.teamId 
				)
			};
		case 'DELETE_ACTIVITY':
			return {
				items: state.items.filter(act => act !== action.actIdToDelete),
				loading: false,
				currentItem: null,
				currentItemTeams: []
			};
		default: return state;
	}
}

export default reducer;
