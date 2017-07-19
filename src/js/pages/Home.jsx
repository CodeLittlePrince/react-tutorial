import React from "react";

class Home extends React.Component {
	render() {
		let list = this.props.list.map((item, index) => {
			return (
				<li key={item.name} class={index==0?'list-group-item active':'list-group-item'}>
					{item.name} : {item.age}
				</li>
			);
		});
		return (
			<div>
				<h1>欢迎来到骡子窝!</h1>
				<ul class="list-group">
					{list}
				</ul>
			</div>
		)
	}
}

export default Home;