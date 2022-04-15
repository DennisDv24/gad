
const initialState = {
	items: [],
	lastImg: null
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_IMAGE':
			return {
				items: [...state.items, action.payload],
				lastImg: action.payload
			};
		default: return state;
	}
}

export default reducer;
