import React from 'react';
import '../css/seatpicker.css';

export default class seatpicker extends React.Component {
    render() {
        return (
            <div id="siteContainer" className="ticketBoxoffice">
                <div id="headerContainer" class="purchase detail on-order" name="HeaderContainer">
                    <div id="headerPurchase">
                        <div className="commonContainer"> 
                            <div id="logo">
                                <a href="http://www.fandango.com/" title="Click to go to Fandango homepage">Fandango Home</a>
                            </div>
                            <div id="bannerMessage">You're a guaranteed ticket away from the perfect movie night.</div>
                        </div>
                    </div>
                </div>
                <div id="container" className="commonContainer">
                    <div className="row">
                        <div id="heading" className="main">
                                <h1 className="section-header inline">Checkout</h1> 
                                <ul className="breadcrumb">
                                    <li className="tickets complete"><i className="icon"></i>Tickets</li> 
                                    <li className="payment "><i className="icon"></i>Payment</li> 
                                    <li className="confirmation "><i className="icon"></i>Confirmation</li> 
                                </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="main">
                            <div class="module-stacked">
                                <div class="module-standard">
                                    <span class="helplink">
                                    <a  class="help">
                                    Need help picking your seat?</a>
                                    </span>
                                    <h2 class="header-secondary">Pick Your Seats</h2>
                                </div>
                            </div>
                        </div>
                        <div class="side">                   
                            <div class="module-standard module-timer collapseEmpty"> 
                                <div id="timer" class="remove">
                                    <span class="timerText">Time to complete your order: </span>
                                    <span class="countdown" id="countdownTimer">6:41</span>
                                </div>
                            </div>
                            <div class="module-standard">  
                                <div id="movieTicketSummary"> 
                                    <div class="moviePoster">
                                        <img id="moviePosterImage" alt="" src="https://images.fandango.com/r1.0.589/ImageRenderer/180/272/redesign/static/img/default_poster_128x190.png/209375/images/masterrepository/fandango/209375/ifeelpretty_onesheet_rgb_10.jpg"/>
                                    </div>
                                    <div class="movieInfo"> 
                                        <ul class="movie-specs">
                                            <li class="title"><h3 id="movieTitle">I Feel Pretty</h3></li>
                                            <li class="info"><span id="ratingInfo" class="emptyCheck">PG-13</span><span id="ratingSeparator" class="separator emptyCheck">, </span><span class="emptyCheck" id="runtimeInfo">1 hr 50 min</span></li>
                                        </ul>
                                        <ul class="movie-other-specs">
                                            <li><h2 id="movieDate"></h2></li>
                                            <li>
                                                <h2 id="movieTime"></h2>
                                                <span class=""></span>                
                                                <div class="emptyCheck remove" id="lateNightShowtimeMesg"></div>
                                            </li>
                                        </ul>
                                        <ul class="movie-other-specs">
                                            <li><h2 id="theaterName">CineLux Almaden Cafe &amp; Lounge</h2></li>
                                            <li id="theaterAddress">
                                                <a id="maplink" href="#" target="_blank" class="emptyCheck">2306 Almaden Road<br/>San Jose, CA 95125</a> 
                                            </li>
                                            <li class="agePolicy emptyCheck"><a href="#">Cinelux Theatres Age Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="module-standard module-cutout">  
                                <p><a class="help helplink" href="javascript:customPopup('http://www.fandango.com/help?category=generalquestions&amp;question=1','Help',1200,875);return false;" onclick="customPopup('http://www.fandango.com/help?category=generalquestions&amp;question=1','Help',1200,875);return false;">Need Help With Checkout?</a></p>                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}