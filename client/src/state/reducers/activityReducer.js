
const initialState = {
	items: [],
	loading: false,
	currentItem: null
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
			return {
				...state,
				items: state.items.map(
					item => item.id === action.at.id ? action.at : item
				),
				loading: false
			};
		default: return state;
	}
}

export default reducer;
