import React from 'react';

export default class Comment extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const comment = this.props.comment;
		return (
			<li class="list-group-item">
				<span>{comment.username}: </span>
				<span>{comment.comment}</span>
			</li>
		);
	}
}