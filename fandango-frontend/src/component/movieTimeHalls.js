import React, { Component } from 'react';
import Header from './headers';
import Footer from './footer';
import axios from 'axios';
import moment from 'moment';
import {Link} from 'react-router-dom';


class MovieTimeHalls extends Component {
  constructor(props) {
    super(props);
    this.state = {
        movieHallsData : [],
    }
  }
  
  componentWillMount(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
	headers.append('Accept', 'application/json');
	console.log("Inside Will Mount");
    axios('http://localhost:8900/hall/' + localStorage.getItem('movieName'), {
            method: 'get',
            mode: 'cors',
            headers: headers,
        })
        .then((response) => {
            this.setState({
                movieHallsData : this.state.movieHallsData.concat(response.data)
			});
			console.log("Respnse after set state: ", response.data);
		});
		
    //document.getElementById("scroll-date-picker__list").style.left = "0px";
  }

  
  handleRightClick(){
    if(parseInt(document.getElementById("scroll-date-picker__list").style.left) != -6027){
      let new_pixel = parseInt(document.getElementById("scroll-date-picker__list").style.left) - 861;
      document.getElementById("scroll-date-picker__list").style.left = new_pixel + "px";
      var right_element = document.getElementById("date-right");
      var left_element = document.getElementById("date-left");
      left_element.classList.remove("flipper--hide");
      new_pixel == -6027 ? right_element.classList.add("flipper--hide") : right_element.classList.remove("flipper--hide");
    }
  }

  handleLeftClick(){
    if(parseInt(document.getElementById("scroll-date-picker__list").style.left) != 0){
      let new_pixel = parseInt(document.getElementById("scroll-date-picker__list").style.left) + 861
      document.getElementById("scroll-date-picker__list").style.left = new_pixel + "px";
      var right_element = document.getElementById("date-right");
      var left_element = document.getElementById("date-left");
      right_element.classList.remove("flipper--hide");
      new_pixel == 0 ? left_element.classList.add("flipper--hide") : left_element.classList.remove("flipper--hide");
    }
  }

  handleTimeClick(e,hall,movie,timings){
      //e.preventDefault();
      console.log("Inside Transaction : ", timings);
        var transactionData = {
            "hallID":hall._id,
            "movieName": movie.movieName,
            "movieRating": movie.movieRating,
            "movieLength": movie.movieLength,
            "hallName": hall.hallName,
            "screenID": timings.screenID,
            "hallAddress": hall.hallAddress,
            "hallCity": hall.hallCity,
            "hallZipCode": hall.hallZipCode,
            "hallState": hall.hallState,
            "movieTime": timings.movieTime,
            "seats": timings.seats,
            "moviePhoto" : movie.moviePhoto,
            "hallPrice" : hall.hallPrice,
            "movieDate" : timings.movieDate
        }
        localStorage.setItem('movieHall', JSON.stringify(transactionData));
  }


  render() {
	console.log("Response : " + this.state.movieHallsData);
	let movieData = null, movieTimings= null,moviePhoto = null;
	let movieReleaseDate = '26 April 2018', movieCategory = null, movieDuration = null;
	let hallData = this.state.movieHallsData.map(hall => {
		movieData = hall.screens.map(movie => {
			if(movie.movieName === localStorage.getItem('movieName')){
				movieCategory = movie.movieCategory;
				movieDuration = movie.movieLength;
				moviePhoto = movie.moviePhoto;	
			}
		})
	});
	let hallDataCopy = this.state.movieHallsData;
	let timingData = null, timeData = [];
    hallData = hallDataCopy.map(hall => {
        movieData = hall.screens.map(movie => {
            if(movie.movieName === localStorage.getItem('movieName')){
                timingData = movie.movieTimings.map(time => {
                    let checkoutData = {
                        movieName : movie.movieName,
                        time : time.movieTime
                    }
                    return(
                        <li class="fd-movie__btn-list-item">
                            <Link onClick = {(e) => this.handleTimeClick(e,hall,movie,time)} to = "/transaction/ticketboxoffice" class="btn showtime-btn showtime-btn--available">{time.movieTime}</Link>
                        </li>
                    )
                })
                timeData.push(
                    <div style = {{marginBottom : '15px', width : 'auto', marginLeft : '320px', padding : '0.5rem'}} class="theater__wrap">
                        <div style = {{background: '#262626',color: '#fff', padding : '10px'}} class="theater__header">
                            <div class="theater__name-wrap">
                                <h3 class="theater__name font-sans-serif font-lg font-300 uppercase">
                                    <a class="color-light" href="/cinearts-santana-row-AASUR/theater-page">{hall.hallName}</a>
                                    <button class="theater__follow-icon icon js-heartsAndStars-heart" data-type="Theater" data-id="AASUR" data-name="CinéArts @ Santana Row" data-is-favorite="false"></button>	
                                </h3>
                            </div>
                            <div class="theater__address-wrap">
                                <span>{hall.hallAddress}</span>
                                <span>{hall.hallCity},{hall.hallState} {hall.hallZipCode}</span>
                            </div>
                        </div>
                        <ul style = {{fontFamily: 'proxima-nova,Helvetica,Arial,sans-serif', backgroundColor : 'white', paddingBottom : '25px'}} class="theater__showtimes font-sans-serif-alt">
                            <li class="theater__showtimes-variant theater__showtimes-variant--last-li">
                                <br/>
                                <ul class="fd-movie__showtimes">
							        <li	class="fd-movie__showtimes-variant">
								        <h3 class="fd-movie__showtimes__tick-headline font-serif">
									    <span class="icon icon-ticket"></span>
									        Select a movie time to buy Standard Showtimes
								    </h3>
								    <ul class="fd-movie__amentiy-list"></ul>
								    
								
							        </li>
						        </ul>
                                <ol class="fd-movie__btn-list">
                                    {timingData}  
                                </ol>
                            </li>
                        
                        </ul>
                    </div>
                )	
            }
        })
	});
	
	let dates = [];
    var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for(var i = 0;i<6;i++){
        let d1 =  new Date();
        d1.setDate(d1.getDate() + i);
        let d2 = moment().add(i,'days').format('YYYY-MM-DD').toString();
        console.log("D 2: ",d2);
        if(i == 0){
            dates.push(

                <li class="date-picker__date date-picker__date--selected" data-show-time-date="2018-04-18">
                    <a onClick = {(e) => this.handleFilterMovieByDate(e,d2)}  class="date-picker__link">
                    <span class="date-picker__date-weekday">{weekdays[d1.getDay()]}</span>
                    <span class="date-picker__date-month">{months[d1.getMonth()]}</span>
                    <span class="date-picker__date-day">{d1.getDate()}</span>
                    </a>
                </li>
            )
        }else{
            dates.push(

                <li class="date-picker__date " data-show-time-date="2018-04-20">
                    <a onClick = {(e) => this.handleFilterMovieByDate(e,d2)}  class="date-picker__link">
                        <span class="date-picker__date-weekday">{weekdays[d1.getDay()]}</span>
                        <span class="date-picker__date-month">{months[d1.getMonth()]}</span>
                        <span class="date-picker__date-day">{d1.getDate()}</span>
                    </a>
                </li>
            )
        }
        
    }
    return (
        <div>
    <Header />
    <div id="page" role="main">
        
		<section class="subnav">
			<div class="row">
				<div class="width-100">
					<h3  style = {{color : 'white', fontSize : '35px'}} class="subnav__title heading-style-1 heading-size-xl timing-header">
						{localStorage.getItem('movieName') + '      '}
						<span class="subnav__title--accent">
                            TIMES
							<span class="js-subnav__user-location"></span>
						</span>
					</h3>
					<ul class="subnav__link-list">
						<li class="subnav__link-item">
							<a class="subnav__link subnav__link--active" href="/95101_movietimes">
								Overview
							</a>
						</li>
						<li class="subnav__link-item">
							<a class="subnav__link" href="/95101_movietimes?ticketedonly=true">
								Movie Times + Tickets 
							</a>
						</li>
						<li class="subnav__link-item">
							<a class="subnav__link" href="/95101_movietimes?mytheaters=true">
								Movie Reviews
							</a>
						</li>
                        <li class="subnav__link-item">
							<a class="subnav__link" href="/95101_movietimes?mytheaters=true">
								Trailers
							</a>
						</li>
                        <li class="subnav__link-item">
							<a class="subnav__link" href="/95101_movietimes?mytheaters=true">
								More
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
		<section class="row">
			<div style={{marginTop : '20px'}} class="width-75 tablet-width-100">
				<div class="date-picker__wrap">
					<section class="date-picker carousel js-movie-calendar carousel-style-strip" data-jcarousel="true">
						<ul id="scroll-date-picker__list" class="carousel-items" >
							{dates}
						</ul>
						<button id = "date-left" class="icon style-none left js-calendar-flipper-left flipper--hide" data-jcarouselcontrol="true" onClick = {this.handleLeftClick.bind(this)}>Previous</button>
						<button id = "date-right" class="icon style-none right js-calendar-flipper-right" data-jcarouselcontrol="true" onClick={this.handleRightClick.bind(this)}>Next</button>
					</section>
				</div>
				<div class="worry-free-cta__wrap">
					<a href="#" class="cta worry-free-cta js-worry-free-cta">
						<img src="https://images.fandango.com/fandango-www/screenplay/assets/images/desktop/global/wft-badge.be9fca955da.png" alt="Worry Free Ticketing" />
						<span class="worry-free-cta__text">Refunds and Exchanges Now Available</span>
					</a>
				</div>
				<div class="js-worry-free-modal worry-free-modal offer-dialog dialog hide-on-mobile style-lightbox animate-fade-in animate-speed-slow">

					<div class="width-60 tablet-width-60 dialog-content animate-slide-down animate-speed-normal font-sans-serif-cond">
						<button class="style-none close-modal"><span class="close-x icon-close">X</span></button>
						<div class="worry-free-modal__content">
							<div class="worry-free-modal__headline-wrapper">
								<div class="worry-free-modal__headline"><span class="worry-free-modal__headline-text">Refunds &amp; Exchanges</span></div>
							</div>
							<h3 class="worry-free-modal__sub-title heading-size-s heading-style-2">Need a refund or exchange?  It's easy with our worry-free tickets.</h3>
							<p class="worry-free-modal__text">Here's what's included with every worry-free ticket purchase:</p>
							<ul class="worry-free-modal__list">
								<li class="worry-free-modal__list-item">Peace of mind of a guaranteed ticket.</li>
								<li class="worry-free-modal__list-item">We know life happens. You may exchange or request a refund for your entire order, less the convenience fee, through Fandango up until the posted showtime. You'll have to complete your refund and exchange before the posted showtime indicated
									on your ticket.
								</li>
								<li class="worry-free-modal__list-item">We'll refund your credit card or we can credit your Fandango account to use for another movie. Your choice.</li>
							</ul>
						</div>
						<div class="worry-free-modal__footer">
							<p class="worry-free-modal__footer-text">Have more questions? Read our <a href="https://www.fandango.com/help">FAQs</a> or reach out to our <a href="https://fandango.custhelp.com/app/new_ask">customer service team</a>.</p>
						</div>
					</div>
				</div>
				<section class="js-filteredChain-lazy"></section>
				<div style = {{width : '320px', float : 'left'}} class="msp__movie-details-container">
					<section class="movie-details">
						<a class="movie-details__mop-link">
							<img class="movie-details__movie-img visual-thumb" src = {"http://localhost:8900/moviesImages/"+moviePhoto} alt="Movie Photo"/>
						</a>
						<ul class="movie-details__detail">
							<li>Released</li> 
							<li class="movie-details__release-date">{/**/}April 27, 2018</li>
							<li>
								{movieDuration}
							</li>
							<li>{movieCategory}</li>
							
						<li>
						</li>
						
						</ul>
						<ul class="movie-details__film-formats">
							<h3 class="movie-details__film-formats-header">SEE IT IN</h3>   
							<li class="movie-details__format"><span class="movie-details__format-logo">35MM</span></li>
							<li class="movie-details__format"><span class="movie-details__format-logo">Digital 3D</span></li>
							<li class="movie-details__format"><span class="movie-details__format-logo">IMAX</span></li>
							<li class="movie-details__format"><span class="movie-details__format-logo">IMAX 3D</span></li>
						</ul>
						<section class="movie-offer">
							<a class="js-offer-cta movie-offer__label" data-offer-id="282">FREE* EXCLUSIVE POSTER</a>
							<div class="movie-offer__title">with ticket purchase (S&amp;H not included).</div>
							<div class="movie-offer__disclaimer">LIMITED TIME. SUBJECT TO AVAILABILITY. TERMS APPLY.</div>
							<a class="js-offer-cta movie-offer__flag icon-gift-box-white" data-offer-id="282">SPECIAL OFFER</a>
						</section>
					</section> 
				</div>
				<section class="js-theaterShowtimes-loading theaters-lazy-load"><section class="theaters">
					{timeData}
				</section>
			</section>
			</div>
			<div class="width-25 tablet-width-100">
				<div class="ad-unit--sidebar">
					<img class = "advertise" src={require('../assets/images/img7.png')} alt="Los Angeles"  />  
				</div>
				<div class="ad-unit--sidebar">
					<div class="ad" data-unit="smallboxad" data-responsive="true" data-media="desktop,tablet">
					</div>
				</div>
				<div class="ad-unit--sidebar">
					<div class="ad" data-unit="boxadtwo" data-responsive="true" data-media="desktop,tablet">
					</div>
				</div>
			</div>
			<div class="js-flyout fd-amenity-flyout">
				<span class="js-flyout__close fd-amenity-flyout__close">X</span>
				<div class="js-flyout__title fd-amenity-flyout__title"></div>
				<div class="js-flyout__desc fd-amenity-flyout__desc"></div>
			</div>
			<section class="favoriteFlyout js-heartsAndStars-flyout">
				<div class="favoriteFlyout__message js-heartsAndStars-flyout-message"></div>
			</section>
		</section>
        
    </div>
    <Footer />
</div>
    )
  }
}

export default MovieTimeHalls;
