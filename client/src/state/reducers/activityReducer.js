
const initialState = {
	items: [],
	loading: false,
	currentItem: null,
	currentTeams: null
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
				currentItem: action.payload,
				currentTeams: action.payload.teams
			};
		case 'ITEMS_LOADING':
			return {
				...state,
				loading: true
			};
		case 'CURRENT_ACT':
			return {
				...state,
				currentItem: action.payload,
				currentTeams: action.payload.teams
			};
		case 'ADD_ACTIVITY':
			return {
				...state,
				items: [...state.items, action.payload]
			};
		case 'ADD_TEAM':
			return {
				...state,
				items: state.items.map(
					item => item.id === action.at.id ? action.at : item
				),
				loading: false,
				currentTeams: action.at.teams
			};
		default: return state;
	}
}

export default reducer;
