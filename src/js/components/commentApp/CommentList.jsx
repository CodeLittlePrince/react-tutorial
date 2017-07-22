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
					// 注意：这里用index作为key，会让新发布的评论时间出错。
					return <Comment comment={comment} key={comment.createdAt} index={index}
							deleteCommentHandler={this.props.deleteCommentHandler}/>;
					})
				}
			</ul>
		);
	}
}