import React from "react";

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
			            <a class="navbar-brand" href="#">骡子窝</a>
			        </div>
			        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			            <ul class="nav navbar-nav">
			                <li class="active">
			                	<a href="#">欢迎光临 <span class="sr-only">(current)</span></a>
			                </li>
			                <li>
			                	<a href="#">骡子大人</a>
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