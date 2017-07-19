import React from "react";
import {Link} from 'react-router-dom';

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {collapsed : true};
	}

	collapseHandler = () => {
		this.setState({
			collapsed : !this.state.collapsed
		})
	}

	render() {
		const classWelcome = location.pathname === '/' ? 'active' : '',
			  classLuozi   = /^\/luozi/.test(location.pathname) ? 'active' : '',
			  classNav	   = this.state.collapsed ? 'collapse' : '';
		return (
			<nav class="navbar navbar-default">
			    <div class="container-fluid">
			        <div class="navbar-header">
			            <button type="button" class="navbar-toggle" onClick={this.collapseHandler}>
			                <span class="sr-only">Toggle navigation</span>
			                <span class="icon-bar"></span>
			                <span class="icon-bar"></span>
			                <span class="icon-bar"></span>
			            </button>
			            <Link to="/">
			            	<span class="navbar-brand" href="#">骡子窝</span>
			            </Link>
			        </div>
			        <div class={"navbar-collapse " + classNav}>
						<ul class="nav navbar-nav">
						    <li class={classWelcome}>
						    	<Link to="/" onClick={this.collapseHandler}>欢迎光临 <span class="sr-only">(current)</span></Link>
						    </li>
						    <li class={classLuozi}>
						    	<Link to="/luozi" onClick={this.collapseHandler}>骡子大人</Link>
						    </li>
						</ul>
			            <ul class="nav navbar-nav navbar-right">
			                <li><a href="#">登录</a></li>
			            </ul>
			        </div>
			    </div>
			</nav>
		);
	}
}

export default Nav;