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
				// 这里传进来的是local取出来的comments，地址是新的，所以comments改变
				comments: action.comments
			};
		case UPDATE_COMMENTS:
			return {
				...state,
				// comments: action.comments
				// 这里如果像上面这么写，因为comments在删除评论处理中是引用了this.props.comments
				// 所以原state中comments的地址和action.comments的地址是一样的，所以触发不了状态改变
				comments: [...action.comments]
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
