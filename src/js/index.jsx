import React from "react";
import ReactDOM from "react-dom";

import '../scss/base.scss';
import '../scss/index.scss';
import img from '../img/index.jpg';
import {hi, hello} from './message.jsx';

function Cat(props) {
	return <h1>Hello Kitty {props.name}!</h1>;
}
ReactDOM.render(
	<Cat name="Smith"/>,
	document.getElementById('app')
);