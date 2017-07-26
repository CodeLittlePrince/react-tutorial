import React from 'react';
import {connect} from 'react-redux';

export default class Comment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timeString: ''
		};
	}
	componentWillMount() {
		this._updateTime();
		this._timer = setInterval(()=>{
			this._updateTime();
		}, 5000);
	}
	componentWillUnmount() {
		clearInterval(this._timer);
	}
	// 更新时间
	_updateTime() {
		const duration = (Date.now() - this.props.comment.createdAt) / 1000;
		let timeString = this._calcTime(duration);
		this.setState({
			timeString: timeString
		});
	}
	/**
	 * 将时间戳转换为**前
	 * @param  {Number} duration 时间间隔
	 * @return {String}          格式化后的时间
	 */
	_calcTime(duration) {
		let timeString = '';
		if (duration < 60) {
			timeString = Math.ceil(duration) + '秒前';
		}else if (60 <= duration && duration < 3600) {
			timeString = Math.floor(duration / 60) + '分钟前';
		}else if (3600 <= duration && duration < 86400) {
			timeString = Math.floor(duration / 3600) + '小时前';
		}else {
			timeString = Math.floor(duration / 86400) + '天前';
		}
		return timeString;
	}
	// 替换评论中的``符号成<code></code>
	// 为了防止XSS，过滤用户手动输入的<>标签成转义符
	_getProcessedContent(comment) {
		return comment
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;")
			.replace(/`([\S\s]+?)`/g, '<code>$1</code>')
	}
	deleteCommentHandler(index, e) {
		this.props.onDeleteComment(index);
	}
	render() {
		const comment = this.props.comment;
		return (
			<li class="list-group-item">
				<div class="container">
					<div class="pull-left">
						<span>{comment.username}: </span>
						<span
							dangerouslySetInnerHTML={{__html: this._getProcessedContent(comment.content)}}
						/>
					</div>
					<span class="pull-right">{this.state.timeString}</span>
				</div>
				<div class="container">
					<span class="pull-right" ref="delete"
						onClick={this.deleteCommentHandler.bind(this, this.props.index)}>删除</span>
				</div>
			</li>
		);
	}
}