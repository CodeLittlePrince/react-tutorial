import React from 'react';
import PropTypes from 'prop-types';

export default class CommentForm extends React.Component {
	static propTypes = {
		username: PropTypes.string
	}
	constructor(props) {
		super(props);
		this.state = {
			username: this.props.username,
			content: '',
			canSubmit: false
		};
	}
	componentDidMount() {
		this._contentFocus(this.refs.content);
	}
	// 组件挂载完以后触发评论自动聚焦
	_contentFocus(contentInput) {
		contentInput.focus();
	}
	// input和textarea输入处理
	inputHandler(e) {
		let name = e.target.name;
		this.setState({
			[name]: e.target.value
		});
		// 判断是否填入了username和content，缺一不可。
		if (this.refs.username.value.length > 0 && this.refs.content.value.length > 0) {
			this.setState({
				canSubmit: true
			});
		}else {
			this.setState({
				canSubmit: false
			});
		}
	}
	// 提交处理
	submitHandler(e) {
		e.preventDefault();
		if (!this.state.canSubmit) {
			return;
		}
		this.setState({
			canSubmit: false,
			content: ''
		});
		this.props.onSubmit(this.state.username, this.state.content);
	}
	render() {
		return (
			<div className="container">
				<form class="form-horizontal" onSubmit={this.submitHandler.bind(this)}>
				  	<div class="form-group">
					    <label class="col-sm-2 control-label">用户</label>
					    <div class="col-sm-10">
					      	<input type="text" class="form-control"
					      		placeholder="用户名" name="username"
					      		ref="username" value={this.state.username}
					      		onBlur={this.props.blurHandler}
					      		onChange={this.inputHandler.bind(this)}/>
					    </div>
					</div>
				  	<div class="form-group">
				    	<label class="col-sm-2 control-label">评论</label>
					    <div class="col-sm-10">
					      	<textarea class="form-control" placeholder="评论"
					      		name="content" ref="content" value={this.state.content}
					      		onChange={this.inputHandler.bind(this)}>
					      	</textarea>
					    </div>
					</div>
				  	<div class="form-group">
				    	<div class="col-sm-offset-2 col-sm-10">
				      		<button type="submit"class={this.state.canSubmit?'btn btn-primary':'btn btn-default'}>
				      			提交
				      		</button>
				    	</div>
				  	</div>
				</form>
			</div>
		);
	}
}