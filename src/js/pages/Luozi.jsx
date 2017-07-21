import React from "react";
import CommentApp from 'js/components/commentApp/CommentApp.jsx';

class Luozi extends React.Component {
	render() {
		let comments = [
			{username: 'Terry', comment: 'Hello,Hoooo'},
			{username: 'Jerry', comment: 'Yeah,Hoooo'},
			{username: 'Tom', comment: 'Ho,Hoooo'}
		];
		return (
			<div>
				<CommentApp comments={comments}/>
			</div>
		)
	}
}

export default Luozi;