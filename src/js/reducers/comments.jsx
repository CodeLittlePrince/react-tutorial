// action types
const INIT_COMMENTS   = 'INIT_COMMENTS',
	  UPDATE_COMMENTS = 'UPDATE_COMMENTS';

// reducer
export default function (state, action) {
	if (!state) {
		return {
			comments: []
		};
	}
	switch(action.type) {
		case INIT_COMMENTS:
			return {
				comments: action.comments
			};
		case UPDATE_COMMENTS:
			return {
				...state,
				comments: action.comments
			};
		default:
			return state;
	}
}

// action creators
export const initComments = (comments) => {
	return {type: INIT_COMMENTS, comments};
}

export const updateComments = (comments) => {
	return {type: UPDATE_COMMENTS, comments};
}
