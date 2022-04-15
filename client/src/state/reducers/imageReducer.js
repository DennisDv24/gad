
const initialState = {
	items: [],
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_IMAGE':
			return {
				items: [...state.items, action.payload]
			};
		default: return state;
	}
}

export default reducer;
