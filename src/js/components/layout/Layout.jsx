import React from "react";
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Carousel from './Carousel.jsx';
import Footer from './Footer.jsx';

class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {title: 'Header!'};
	}
	render() {
		return (
			<div>
				<Nav/>
				<Carousel/>
				<Header title={this.state.title}/>
				<Footer/>
			</div>
		);
	}
}

export default Layout;