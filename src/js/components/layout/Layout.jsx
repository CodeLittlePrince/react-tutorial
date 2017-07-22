import React from "react";
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Carousel from './Carousel.jsx';
import Footer from './Footer.jsx';

class Layout extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Nav/>
				<Carousel/>
				<Header/>
				{this.props.children}
				<Footer/>
			</div>
		);
	}
}

export default Layout;