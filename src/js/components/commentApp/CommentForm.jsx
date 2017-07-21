import React from 'react';

export default class CommentForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			comment: '',
			canSubmit: false
		};
	}
	// input和textarea输入处理
	inputHandler(e) {
		let name = e.target.name;
		this.setState({
			[name]: e.target.value
		});
		// 判断是否填入了username和comment，缺一不可。
		if (this.refs.username.value.length > 0 && this.refs.comment.value.length > 0) {
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
			comment: '',
			canSubmit: false
		});
		// 如果可以提交，将数据提升到父组件，这样父组件才能把数据给到CommentList组件
		this.props.submitHandler(this.state.username, this.state.comment);
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
					      		onChange={this.inputHandler.bind(this)}/>
					    </div>
					</div>
				  	<div class="form-group">
				    	<label class="col-sm-2 control-label">Password</label>
					    <div class="col-sm-10">
					      	<textarea class="form-control" placeholder="评论"
					      		name="comment" ref="comment" value={this.state.comment}
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