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
	// 设置评论到localStorage
	_setCommentsIntoLocal(comments) {
		localStorage.setItem('comments', JSON.stringify(comments));
	}
	// 处理CommentForm submit
	submitHandler(username, comment) {
		let comments = this.state.comments;
		// 将新评论插入原有的评论中
		comments.unshift({
			username,
			comment,
			createdAt: Date.now()
		});
		this.setState({
			comments
		});
		this._setCommentsIntoLocal(comments);
	}
	// 删除评论处理
	deleteCommentHandler(index) {
		// 如果是真正的前后端交互的话，肯定是获取ID，然后发送给远端处理
		let comments = this.state.comments;
		comments.splice(index, 1);
		this.setState({
			comments
		});
		this._setCommentsIntoLocal(comments);
	}
	render() {
		return (
			<div>
				<CommentForm submitHandler={this.submitHandler.bind(this)}/>
				<CommentList comments={this.state.comments}
					deleteCommentHandler={this.deleteCommentHandler.bind(this)}/>
			</div>
		);
	}

}