import React from 'react';
import Comment from './Comment.jsx';

export default class CommentList extends React.Component {
	static defaultProps = {
		comments: []
	};
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ul class="list-group">
				{this.props.comments.map((comment, index) => {
					return <Comment comment={comment} key={index}/>;
					})
				}
			</ul>
		);
	}
}