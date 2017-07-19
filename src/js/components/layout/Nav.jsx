import React from "react";
import {Link} from 'react-router-dom';

class Nav extends React.Component {
	componentDidMount() {
		// grab the accordion by its ID
		var collapseLink = document.getElementById('collapseLink');
		// initialize the component for this collapse trigger
		var myCollapseInit = new Collapse(collapseLink);
	}
	render() {
		return (
			<nav class="navbar navbar-default">
			    <div class="container-fluid">
			        <div class="navbar-header">
			            <button id="collapseLink" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			                <span class="sr-only">Toggle navigation</span>
			                <span class="icon-bar"></span>
			                <span class="icon-bar"></span>
			                <span class="icon-bar"></span>
			            </button>
			            <Link to="/">
			            	<span class="navbar-brand" href="#">骡子窝</span>
			            </Link>
			        </div>
			        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav">
						    <li class={location.pathname == '/'?'active':''}>
						    	<Link to="/">欢迎光临 <span class="sr-only">(current)</span></Link>
						    </li>
						    <li class={location.pathname == '/luozi'?'active':''}>
						    	<Link to="/luozi">骡子大人</Link>
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