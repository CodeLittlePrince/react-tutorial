import React from "react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CommentApp from 'js/containers/commentApp/CommentApp.jsx';
import commentsReducer from 'js/reducers/comments.jsx';

const store = createStore(commentsReducer);

class Luozi extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<CommentApp/>
			</Provider>
		)
	}
}

export default Luozi;