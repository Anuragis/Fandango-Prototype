import React, { Component } from 'react';
import Header from './headers';
import Footer from './footer';
import axios from 'axios';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import Redirect from 'react-router-dom/Redirect';
import StarRatings from 'react-star-ratings';
import moment from 'moment';


class MovieTimeTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
        initialHalls:[],
        halls : [],
        term : "",
        orderBy: "hallPrice",
        order: ""
    }
    this.inpTerm = this.inpTerm.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleFilterMovieByDate = this.handleFilterMovieByDate.bind(this);

  }

  inpTerm(inputTerm) {
    console.log("Input term", inputTerm);

    this.setState({
        term:inputTerm
    });

    let filteredHalls=[];
    if(inputTerm!==""){
        var city=[];
        var state=[];
        var zip=[];
        var movies=[];
        var  city= this.state.initialHalls.filter(function(hall){
                return hall.hallCity.toLowerCase().search(
                    inputTerm.toLowerCase()) !== -1;
                });
      
          var  state= this.state.initialHalls.filter(function(hall){
            return hall.hallState.toLowerCase().search(
                inputTerm.toLowerCase()) !== -1;
            });

          var  zip= this.state.initialHalls.filter(function(hall){
                return hall.hallZipCode.toLowerCase().search(
                    inputTerm.toLowerCase()) !== -1;
                });

                this.state.initialHalls.map(function(hall){
                      hall.screens.filter(function(screen){ 
                             if(typeof(screen.movieName) !== "undefined" && screen.movieName.toLowerCase().search(
                                inputTerm.toLowerCase()) !== -1){
                                    movies.push(hall);
                            }
                        });
                 });
                 
         var hall=this.state.initialHalls.filter(function(hall){
            return hall.hallName.toLowerCase().search(
                inputTerm.toLowerCase()) !== -1;
            });
          
          var concat1=city.concat(state);
          var concat2=concat1.concat(movies);
          var concat3=concat2.concat(zip);
          filteredHalls =concat3.concat(hall);
         


          this.setState({
            halls:filteredHalls
        });


        }else{
            this.setState({
                halls:this.state.initialHalls
            });
        }

      
  }
  
  componentDidMount(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    axios('http://localhost:8900/halls', {
            method: 'get',
            mode: 'cors',
            // redirect: 'follow',
            // withCredentials: true,
            headers: headers,
        })
        .then((response) => {
            this.setState({
                halls : this.state.halls.concat(response.data),
                initialHalls:this.state.initialHalls.concat(response.data)
            });

            console.log("Halls", this.state.halls);
            console.log("Initial state Halls", this.state.initialHalls);
        });
    document.getElementById("scroll-date-picker__list").style.left = "0px";
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

    toggle(e){
        e.preventDefault();
        let order = this.state.order;
        if(order==="") order = 'desc';
        else order = (order==="asc" ? 'desc' : 'asc');
        this.setState({order});
        if (this.state.order !== ''){
            this.setState({sortDirArrow : this.state.order === 'asc' ? '↓ ' : '↑ '})
        }
        else this.setState({sortDirArrow : '↓ '})
    }

    handleFilterMovieByDate(e,Date1){
        e.preventDefault();
       
       let updatedHalls =_.filter(this.state.initialHalls, {screens:[{movieTimings:[{movieDate:Date1}]}]});
       this.setState({
            halls:updatedHalls
        });

    }

  render() {
    
    let redirectVar = null;
		if(!localStorage.getItem('userid')){
			redirectVar = <Redirect to= "/signin" />
	}
    function handletransaction(e,hall,movie,timings){
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
      //-------filter
    let orderBy = this.state.orderBy;
    let order = this.state.order;
    let hallFilter = null;
    if(this.state.order==="") hallFilter = this.state.halls;
        else {
            hallFilter = _.orderBy(this.state.halls, (item) => {
            return item[orderBy]
          }, order); 
        }
        //------filter
    let movieData = null, movieTimings = null, moviePhoto = "",avgRating = 0;
    let hallData = hallFilter.map(hall => {
	movieData = hall.screens.map(movie => {
        moviePhoto = movie.moviePhoto;
        avgRating = movie.avgReviewRating;
		movieTimings = movie.movieTimings.map(timings => {
			return(
				
					<li class="fd-movie__btn-list-item">
                        <Link onClick = {(e) => handletransaction(e,hall,movie,timings)} to = "transaction/ticketboxoffice" class="btn showtime-btn showtime-btn--available">{timings.movieTime}</Link>
                    </li>
				
			)
		})
		return(
			<ul>
				<li class="fd-movie">
					<div class="fd-movie__poster">
						<a href="#">
							<img src={"http://localhost:8900/moviesImages/"+movie.moviePhoto} alt="" />
						</a>
					</div>
					<div class="fd-movie__details">
						<h3 class="fd-movie__title font-sans-serif font-lg font-300 uppercase">
							<a class="dark" href="#">{movie.movieName}</a>
							{/*<button class="icon icon-follow-gray fd-movie__follow-icon js-heartsAndStars-heart" data-type="Movie" data-id="210358" data-name="Mercury (2018)" data-is-favorite="false"></button>*/}
						</h3>
						<div class="fd-star-rating__container">
							{/*<div class="js-fd-star-rating fd-star-rating " data-star-rating="5">
								<a class="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star" data-action="rate" data-id="210358" data-isnew="true" data-show-caption="true" data-value="5" title="Loved It"></a>
								<a class="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star" data-action="rate" data-id="210358" data-isnew="true" data-show-caption="true" data-value="4" title="Really Liked It"></a>
								<a class="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star" data-action="rate" data-id="210358" data-isnew="true" data-show-caption="true" data-value="3" title="Liked It"></a>
								<a class="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star" data-action="rate" data-id="210358" data-isnew="true" data-show-caption="true" data-value="2" title="Disliked It"></a>
								<a class="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star" data-action="rate" data-id="210358" data-isnew="true" data-show-caption="true" data-value="1" title="Hated It"></a>
                            </div>*/}
						</div>
						<p class="fd-movie__rating-runtime">
								{movie.movieLength}<br />
                                {movie.movieCategory}<br/><br/>
                                <StarRatings
                                    rating={avgRating}
                                    starRatedColor="gold"
                                    numberOfStars={5}
                                    starDimension="20px"
                                    starSpacing="5px"
                                />
							  </p>
						</div>
						<ul class="fd-movie__showtimes">
							<li	class="fd-movie__showtimes-variant">
								<h3 class="fd-movie__showtimes__tick-headline font-serif">
									<span class="icon icon-ticket"></span>
									Select a movie time to buy Standard Showtimes
								</h3>
								<ul class="fd-movie__amentiy-list"></ul>
								<ol class="fd-movie__btn-list">
									{movieTimings}
								</ol>
								
							</li>
						</ul>
				</li>
			</ul>
		);
		
    })
    if(this.state.term!="") {
        console.log("term",this.state.term);
    }
	return(
		<ul>
			<li class="fd-theater" data-theater-id="AAFRF">
				<div class="fd-theater__header">
					<div class="fd-theater__promoted-amenity-wrap">
						<span class="icon icon-amenity-print-at-home-tickets fd-theater__promoted-amenity js-amenity" data-amenity-name="Print at Home Tickets" data-amenity-desc="Print your tickets, go directly to the ticket taker and skip the box office line at many theaters.">Print at Home Tickets</span>
						<span class="icon icon-amenity-mobile-tickets fd-theater__promoted-amenity js-amenity" data-amenity-name="Mobile Tickets" data-amenity-desc="Send your ticket to your mobile device, go directly to the ticket taker and skip the box office line at many theaters.">Mobile Tickets</span>
					</div>
					<div class="fd-theater__name-wrap">
						<h3 class="fd-theater__name font-sans-serif font-lg font-300 uppercase">
							<a class="light">{hall.hallName}</a>
							<button class="icon icon-follow-white fd-theater__follow-icon js-heartsAndStars-heart" data-type="Theater" data-id="AAFRF" data-name="Towne 3 Cinemas" data-is-favorite="false"></button>
						</h3>
					</div>
					<div class="fd-theater__address-wrap">
                        <span>{hall.hallAddress},</span>
                        <span>{hall.hallCity},{hall.hallState} {hall.hallZipCode}</span>
                    </div>
					<div class="fd-theater__links">
                        <a rel="nofollow" class="font-sans-serif-cond font-sm">MAP</a>
                        <a class="fd-theater__amenities js-amenity font-sans-serif-cond font-sm" href="#" data-amenity-name="Theater Amenities" data-amenity-desc="<ul class=&quot;fd-theater__amenities-list&quot;><li>Print at Home Tickets</li><li>Mobile Tickets</li></ul>">AMENITIES</a>
                    </div>
				</div>
				{movieData}
				
			</li>
		</ul>
	)
	
})
    console.log("Response Recieved : ", this.state.halls);
    const stylePricing = {
        display: 'inline',
        textAlign: 'right',
        marginLeft: '260px',
        fontSize: 'large',
        fontWeight: '700'
    }
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
        {redirectVar}
      <Header inpTerm={this.inpTerm}/>
      <div id="page" role="main">
        <div class="tsp">
            <section class="subnav">
              <div class="row">
                  <div class="width-100">
                    <h3  style = {{color : 'white', fontSize : '35px'}} class="subnav__title heading-style-1 heading-size-xl timing-header">
                        Movie times + Tickets
                        <span class="subnav__title--accent">
                        near You
                        <span class="js-subnav__user-location"></span>
                        </span>
                    </h3>
                    <ul class="subnav__link-list">
                        <li class="subnav__link-item">
                          <a class="subnav__link subnav__link--active" href="/95101_movietimes">
                          All theaters
                          </a>
                        </li>
                        <li class="subnav__link-item">
                          <a class="subnav__link" href="/95101_movietimes?ticketedonly=true">
                          Fandango Ticketing Theaters
                          </a>
                        </li>
                        <li class="subnav__link-item">
                          <a class="subnav__link" href="/95101_movietimes?mytheaters=true">
                          My theaters
                          </a>
                        </li>
                    </ul>
                  </div>
              </div>
            </section>
            <section class="row">
              <div style={{marginTop : '20px'}} class="width-75 tablet-width-100">
                  {/* <div class="date-picker__location">
                    <div class="date-picker__error js-date-picker__error hide"></div>
                    <div class="date-picker__message js-date-picker-msg hide">
                        <h3 class="date-picker__message-title heading-size-l heading-style-1">
                          <i class="icon icon-location-white"></i>
                          Looking for movie tickets? Tell us where you are.
                        </h3>
                    </div>
                    <span class="date-picker__location-text">ENTER CITY, STATE OR ZIP CODE</span>
                    <input
                        class="date-picker__location-input js-date-input"
                        placeholder="City, State or Zip Code"
                        type="text"
                        />
                    <a href="#" class="date-picker__location-submit js-date-picker-btn">GO</a>
                  </div> */}
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
                  <div class="js-spotlight-ad"></div>
                    <div style={{display:'inline-block', width: '850px'}} >
                        <label class="nearby-theaters__label">Nearby Theaters: </label>
                        <select class="nearby-theaters__select js-nearby-theaters">
                            <option value="#">Select Theater</option>
                            <option value="/towne-3-cinemas-AAFRF/theater-page?date=2018/4/18">Towne 3 Cinemas</option>
                            <option value="/cinelux-almaden-cafe-and-lounge-AAFQQ/theater-page?date=2018/4/18">CineLux Almaden Cafe &amp; Lounge</option>
                            <option value="/cinearts-santana-row-AASUR/theater-page?date=2018/4/18">CinéArts @ Santana Row</option>
                            <option value="/amc-eastridge-15-AATUL/theater-page?date=2018/4/18">AMC Eastridge 15</option>
                            <option value="/pruneyard-cinemas-AAQND/theater-page?date=2018/4/18">Pruneyard Cinemas</option>
                            <option value="/century-20-great-mall-and-xd-AAPCG/theater-page?date=2018/4/18">Century 20 Great Mall and XD</option>
                            <option value="/cinelux-plaza-theatre-AAFQS/theater-page?date=2018/4/18">CineLux Plaza Theatre</option>
                            <option value="/8k-cinemas-milpitas-AAWTK/theater-page?date=2018/4/18">8K Cinemas Milpitas</option>
                            <option value="/amc-mercado-20-AADYN/theater-page?date=2018/4/18">AMC Mercado 20</option>
                            <option value="/century-20-oakridge-and-xd-AARBX/theater-page?date=2018/4/18">Century 20 Oakridge and XD</option>
                            <option value="/amc-saratoga-14-AAECU/theater-page?date=2018/4/18">AMC Saratoga 14</option>
                            <option value="/los-gatos-theatre-AAFRG/theater-page?date=2018/4/18">Los Gatos Theatre</option>
                            <option value="/century-cinemas-16-AACFX/theater-page?date=2018/4/18">Century Cinemas 16</option>
                            <option value="/century-at-pacific-commons-and-xd-AAWQB/theater-page?date=2018/4/18">Century at Pacific Commons and XD</option>
                            <option value="/amc-newpark-12-AAXSE/theater-page?date=2018/4/18">AMC NewPark 12</option>
                            <option value="/cinearts-palo-alto-square-AAPZL/theater-page?date=2018/4/18">CinéArts @ Palo Alto Square</option>
                            <option value="/hackworth-imax-dome-AANCI/theater-page?date=2018/4/18">Hackworth IMAX Dome</option>
                            <option value="/capitol-drive-in-AACFK/theater-page?date=2018/4/18">Capitol Drive-In</option>
                        </select>
                        <div style={stylePricing} >
                            <a id="filterPrice" onClick={this.toggle} >
                            {this.state.sortDirArrow}
                            PRICING
                            </a>
                        </div>
                    </div>
                  <div class="fd-showtimes js-theaterShowtimes-loading">
                    <div class="printer-friendly">
                        <a class="cta" href="//www.fandango.com/theaterlistings-prn.aspx?location=95101&amp;pn=1&amp;sdate=4-18-2018&amp;tid=AAFRF,AAFQQ,AASUR,AATUL,AAQND,AAPCG,AAFQS,AAWTK,AANCI,AACFK">
                            Printer Friendly
                        </a>
                    </div>
                    {/*<ul>
                      <li class="fd-theater" data-theater-id="AAFRF">
                        <div class="fd-theater__header">
                            <div class="fd-theater__promoted-amenity-wrap">
                              <span class="icon icon-amenity-print-at-home-tickets fd-theater__promoted-amenity js-amenity" data-amenity-name="Print at Home Tickets" data-amenity-desc="Print your tickets, go directly to the ticket taker and skip the box office line at many theaters.">Print at Home Tickets
                              </span>
                              <span class="icon icon-amenity-mobile-tickets fd-theater__promoted-amenity js-amenity" data-amenity-name="Mobile Tickets" data-amenity-desc="Send your ticket to your mobile device, go directly to the ticket taker and skip the box office line at many theaters.">Mobile Tickets
                              </span>
                            </div>
                            <div class="fd-theater__name-wrap">
                              <h3 class="fd-theater__name font-sans-serif font-lg font-300 uppercase">
                                  <a class="light" href="/towne-3-cinemas-AAFRF/theater-page">Towne 3 Cinemas</a>
                                  <button class="icon icon-follow-white fd-theater__follow-icon js-heartsAndStars-heart" data-type="Theater" data-id="AAFRF" data-name="Towne 3 Cinemas" data-is-favorite="false">
                                  </button>
                              </h3>
                            </div>
                            <div class="fd-theater__address-wrap">
                              <span>1326 The Alameda,</span>
                              <span>
                              San Jose,
                              CA
                              95126
                              </span>
                            </div>
                            <div class="fd-theater__links">
                              <a href="//www.fandango.com/maps/DrivingDirections.aspx?tid=AAFRF" target="_blank" rel="nofollow" class="font-sans-serif-cond font-sm">MAP</a>
                              <a class="fd-theater__amenities js-amenity font-sans-serif-cond font-sm" href="#" data-amenity-name="Theater Amenities" data-amenity-desc="<ul class=&quot;fd-theater__amenities-list&quot;><li>Print at Home Tickets</li><li>Mobile Tickets</li></ul>">AMENITIES</a>
                            </div>
                        </div>
                        <ul>
                            <li class="fd-movie">
                              <div class="fd-movie__poster">
                                  <a href="/mercury-2018-210358/movie-overview">
                                  <img src="https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/MasterRepository/fandango/210358/mercury-Vertical3.jpg" alt="" />
                                  </a>
                              </div>
                              <div class="fd-movie__details">
                                  <h3 class="fd-movie__title font-sans-serif font-lg font-300 uppercase">
                                    <a class="dark" href="/mercury-2018-210358/movie-overview">Mercury (2018)</a>
                                    <button class="icon icon-follow-gray fd-movie__follow-icon js-heartsAndStars-heart" data-type="Movie" data-id="210358" data-name="Mercury (2018)" data-is-favorite="false">
                                    </button>
                                  </h3>
                                  <div class="fd-star-rating__container">
                                    <div class="js-fd-star-rating fd-star-rating " data-star-rating="5">
                                        <a class="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star" data-action="rate" data-id="210358" data-isnew="true" data-show-caption="true" data-value="5" title="Loved It">
                                        </a>
                                        <a class="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star" data-action="rate" data-id="210358" data-isnew="true" data-show-caption="true" data-value="4" title="Really Liked It">
                                        </a>
                                        <a class="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star" data-action="rate" data-id="210358" data-isnew="true" data-show-caption="true" data-value="3" title="Liked It">
                                        </a>
                                        <a class="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star" data-action="rate" data-id="210358" data-isnew="true" data-show-caption="true" data-value="2" title="Disliked It">
                                        </a>
                                        <a class="fd-star-rating__star icon icon-star-rating-small js-heartsAndStars-star" data-action="rate" data-id="210358" data-isnew="true" data-show-caption="true" data-value="1" title="Hated It">
                                        </a>
                                    </div>
                                  </div>
                                  <p class="fd-movie__rating-runtime">
                                    1 hr 48 min <br />
                                    Drama, Suspense/Thriller
                                  </p>
                              </div>
                              <ul class="fd-movie__showtimes">
                                  <li class="fd-movie__showtimes-variant">
                                    <h3 class="fd-movie__showtimes__tick-headline font-serif">
                                        <span class="icon icon-ticket"></span>
                                        Select a movie time to buy Standard Showtimes
                                    </h3>
                                    <ul class="fd-movie__amentiy-list">
                                    </ul>
                                    <ol class="fd-movie__btn-list">
                                        <li class="fd-movie__btn-list-item">
                                          <a class="btn showtime-btn showtime-btn--available" href="https://tickets.fandango.com/Transaction/Ticketing/ticketboxoffice.aspx?row_count=221019557&amp;tid=AAFRF&amp;sdate=2018-04-18+13:45&amp;mid=210358&amp;from=mov_det_showtimes">1:45p</a>
                                        </li>
                                        <li class="fd-movie__btn-list-item">
                                          <a class="btn showtime-btn showtime-btn--available" href="https://tickets.fandango.com/Transaction/Ticketing/ticketboxoffice.aspx?row_count=221019553&amp;tid=AAFRF&amp;sdate=2018-04-18+16:00&amp;mid=210358&amp;from=mov_det_showtimes">4:00p</a>
                                        </li>
                                        <li class="fd-movie__btn-list-item">
                                          <a class="btn showtime-btn showtime-btn--available" href="https://tickets.fandango.com/Transaction/Ticketing/ticketboxoffice.aspx?row_count=221019554&amp;tid=AAFRF&amp;sdate=2018-04-18+18:15&amp;mid=210358&amp;from=mov_det_showtimes">6:15p</a>
                                        </li>
                                        <li class="fd-movie__btn-list-item">
                                          <a class="btn showtime-btn showtime-btn--available" href="https://tickets.fandango.com/Transaction/Ticketing/ticketboxoffice.aspx?row_count=221019555&amp;tid=AAFRF&amp;sdate=2018-04-18+20:30&amp;mid=210358&amp;from=mov_det_showtimes">8:30p</a>
                                        </li>
                                        <li class="fd-movie__btn-list-item">
                                          <a class="btn showtime-btn showtime-btn--available" href="https://tickets.fandango.com/Transaction/Ticketing/ticketboxoffice.aspx?row_count=221019556&amp;tid=AAFRF&amp;sdate=2018-04-18+22:45&amp;mid=210358&amp;from=mov_det_showtimes">10:45p</a>
                                        </li>
                                    </ol>
                                  </li>
                              </ul>
                            </li>
                        </ul>
                        <div class="fd-theater__future-dates">
                            <h3 class="fd-theater__future-dates-text heading-size-s font-serif">More movies available on future dates.</h3>
                            <a href="/towne-3-cinemas-AAFRF/theater-page" class="btn">See Coming Attractions</a>
                        </div>
                      </li>
                    </ul>*/}
                    {hallData}
                    {/* <div class="csspinner js-spinner"></div> */}
                    <div class="hide fd-showtimes__error-msg js-fd-showtimes__error-msg"></div>
                  </div>
                  <section class="more-theaters-links">
                    <a href="/movietimes/movies-by-city" class="dark more-theaters-links__link">Movie Times by Cities</a>
                    <a href="/movietimes/movies-by-state" class="dark more-theaters-links__link">Movie Times by States</a>
                    <a href="/movietimes/movies-by-zipcode" class="dark more-theaters-links__link">Movie Times by Zip Codes</a>
                    <a href="/movie-theaters" class="dark more-theaters-links__link">Movie Times by Theaters</a>
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
      </div>
      <Footer />
    </div>
    )
  }
}

export default MovieTimeTicket;
