import React from 'react';
import CommentForm from './CommentForm.jsx';
import CommentList from './CommentList.jsx';

export default class CommentApp extends React.Component {
	render() {
		return (
			<div>
				<CommentForm />
				<CommentList />
			</div>
		);
	}

}