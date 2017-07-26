import React from 'react';
import { connect } from 'react-redux';
import { initComments, updateComments } from 'js/reducers/comments.jsx';
import CommentList from 'js/components/commentApp/CommentList.jsx';

class CommentListContainer extends React.Component {
	componentWillMount() {
		let comments = this._getCommentsFromLocal();
		// 从LS获取完数据以后更新UI
		this.props.onInitComments(comments);
	}
	// 从localStorage中取评论信息
	_getCommentsFromLocal() {
		let comments = JSON.parse(localStorage.getItem('comments'));
		if (comments) {
			return comments;
		}
		return [];
	}
	// 设置评论到localStorage
	_setCommentsIntoLocal(comments) {
		localStorage.setItem('comments', JSON.stringify(comments));
	}
	// 删除评论处理
	deleteCommentHandler(index) {
		// 如果是真正的前后端交互的话，肯定是获取ID，然后发送给远端处理
		let comments = this.props.comments;
		comments.splice(index, 1);
		this._setCommentsIntoLocal(comments);
		// 处理完前后端数据交互以后，更新UI
		if (this.props.onDeleteComment) {
			this.props.onDeleteComment(comments);
		}
	}
	render() {
		return <CommentList comments={this.props.comments}
				onDeleteComment={this.deleteCommentHandler.bind(this)}/>
	}
}
const mapStateToProps = (state) => {
	return {
		comments: state.comments
	};
}
const mapDispatchToPros = (dispatch) => {
	return {
		onInitComments: (comments) => {
			dispatch(initComments(comments));
		},
		onDeleteComment: (comments) => {
			dispatch(updateComments(comments));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToPros)(CommentListContainer)