import React from "react";
import CommentApp from 'js/components/commentApp/CommentApp.jsx';

class Luozi extends React.Component {
	// 从localStorage中取评论信息
	_getCommnetsFromLocal() {
		let comments = JSON.parse(localStorage.getItem('comments'));
		if (comments) {
			return comments;
		}
		return [];
	}
	render() {
		let comments = this._getCommnetsFromLocal();
		return (
			<div>
				<CommentApp comments={comments}/>
			</div>
		)
	}
}

export default Luozi;