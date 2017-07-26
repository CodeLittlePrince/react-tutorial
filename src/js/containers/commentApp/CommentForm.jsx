import React from 'react';
import {connect} from 'react-redux';
import { updateComments } from 'js/reducers/comments.jsx';
import CommentForm from 'js/components/commentApp/CommentForm.jsx';

class CommentFormContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: ''
		}
	}
	componentWillMount() {
		this._getUsernameFromLocal();
	}
	// 从localStorage中取评论信息
	_getCommentsFromLocal() {
		let comments = JSON.parse(localStorage.getItem('comments'));
		if (comments) {
			return comments;
		}
		return [];
	}
	// 取localStrorage，有username则渲染上
	_getUsernameFromLocal() {
		let username = localStorage.getItem('username');
		if (username) {
			this.setState({username: username});
		}
	}
	// 设置评论到localStorage
	_setCommentsIntoLocal(comments) {
		localStorage.setItem('comments', JSON.stringify(comments));
	}
	// blur用户名，就将用户名存储到localStorage
	blurHandler(e) {
		localStorage.setItem('username', e.target.value);
	}
	// submit评论处理
	submitHandler(username, content) {
		let comments = this._getCommentsFromLocal();
		// 将新评论插入原有的评论中
		comments.unshift({
			username,
			content,
			createdAt: Date.now()
		});
		this._setCommentsIntoLocal(comments);
		// LocalStorage更新完以后，更新UI，所以需要调用connect传来的submitHandler
		if (this.props.onSubmit) {
			this.props.onSubmit(comments);
		}
	}
	render() {
		return (
			<CommentForm username={this.state.username}
						 blurHandler={this.blurHandler.bind(this)}
						 onSubmit={this.submitHandler.bind(this)}/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		comments: state.comments
	}
}

const mapDispatchToPros = (dispatch) => {
	return {
		onSubmit: (comments) => {
			dispatch(updateComments(comments));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToPros)(CommentFormContainer)