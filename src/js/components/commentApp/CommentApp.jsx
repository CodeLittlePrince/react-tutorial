import React from 'react';
import CommentForm from './CommentForm.jsx';
import CommentList from './CommentList.jsx';

export default class CommentApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: this.props.comments
		}
	}
	// 处理CommentForm submit
	submitHandler(username, comment) {
		let comments = this.state.comments;
		// 将新评论插入原有的评论中
		comments.unshift({
			username,
			comment
		});
		this.setState({
			comments
		});
	}
	render() {
		return (
			<div>
				<CommentForm submitHandler={this.submitHandler.bind(this)}/>
				<CommentList comments={this.state.comments}/>
			</div>
		);
	}

}