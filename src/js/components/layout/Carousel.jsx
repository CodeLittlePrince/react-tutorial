import React from "react";

class MyCarousel extends React.Component {
	componentDidMount() {
		// grab the carousel element
		var myCarousel = document.getElementById('myCarousel');
		// initialize with some options
		var myCarouselInit = new Carousel(myCarousel, { // these options values will override the ones set via DATA API 
			interval: false,
			pause: false,
			keyboard: false
		});
	}
	render() {
		return (
			<div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="5000">
			    <ol class="carousel-indicators">
			        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
			        <li data-target="#myCarousel" data-slide-to="1"></li>
			        <li data-target="#myCarousel" data-slide-to="2"></li>
			    </ol>
			    <div class="carousel-inner" role="listbox">
			        <div class="item active">
			            <img src="https://unsplash.it/837/300?image=0" alt=""/>
			            <div class="carousel-caption">
			                <h3>这是骡子窝</h3>
			            </div>
			        </div>
			        <div class="item">
			            <img src="https://unsplash.it/837/300?image=10" alt=""/>
			            <div class="carousel-caption">
			                <h3>骡子窝这里很酷</h3>
			            </div>
			        </div>
			        <div class="item">
			            <img src="https://unsplash.it/837/300?image=210" alt=""/>
			            <div class="carousel-caption">
			                <h3>骡子大人很帅</h3>
			            </div>
			        </div>
			    </div>
			    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
			        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
			        <span class="sr-only">Previous</span>
			    </a>
			    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
			        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
			        <span class="sr-only">Next</span>
			    </a>
			</div>
		)
	}	
}

export default MyCarousel;