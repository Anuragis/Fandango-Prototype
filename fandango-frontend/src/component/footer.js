import React, { Component } from 'react';
import axios from 'axios';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount(){
  
  }

  render() {
    return (
    <div>
      <footer id="global-footer">
    
    <section class="row width-100 hide-on-mobile">
        <h2 class="inline heading-style-stub heading-style-1 heading-size-l section-header">Offers</h2>
        <ul class="row panel footer-panel">
            
            <li class="width-25">
                <div class="media">
	
		<a href="https://www.fandango.com/VIP-Plus?intcmp=IMA_VIPPLUS_merch">
	
		<img src="https://images.fandango.com/images/spotlight/FND_Loyalty_300x150_v01.png" alt="<b>WELCOME TO THE SUMMER OF MORE</b>">
    </img>
	</a>
	<div>
		<h3 class="heading-style-2 heading-size-s bold">WELCOME TO THE SUMMER OF MORE</h3>
		<p>
			EARN 150 VIP+ POINTS FOR EVERY TICKET YOU BUY. 600 VIP+ Points unlocks a $6 reward.
			
				<a href="https://www.fandango.com/VIP-Plus?intcmp=IMA_VIPPLUS_merch">SEE DETAILS</a>
			
		</p>
	</div>
</div>

            </li>
            
            <li class="width-25">
                <div class="media">
	
		<a href="https://www.fandango.com/deadpool-2-200520/movie-times?intcmp=IMA_Deadpool2GWP_merch">
	
		<img src="https://images.fandango.com/images/spotlight/FD_Deadpool2_300x150_offerstrip_v1.png" alt="<b>'Deadpool 2' Gift With Purchase</b>">
    </img>
    </a>
	<div>
		<h3 class="heading-style-2 heading-size-s bold">'Deadpool 2' Gift With Purchase</h3>
		<p>
			Receive a FREE* exclusive 'Deadpool 2' poster with ticket purchase (*shipping &amp; handling not included).
			
				<a href="https://www.fandango.com/deadpool-2-200520/movie-times?intcmp=IMA_Deadpool2GWP_merch">BUY TICKETS</a>
			
		</p>
	</div>
</div>

            </li>
            
            <li class="width-25">
                <div class="media">
	
		<a href="https://www.fandango.com/avengers-infinity-war-199925/movie-times?intcmp=IMA_InfinityWarGWP_merch">
	
		<img src="https://images.fandango.com/images/spotlight/FD_Avengers_300x150_offerstrip_v1.png" alt="<b>'Avengers: Infinity War' Gift With Purchase</b>">
    </img></a>
	<div>
		<h3 class="heading-style-2 heading-size-s bold">'Avengers: Infinity War' Gift With Purchase</h3>
		<p>
			Choose 1 of 5 FREE* exclusive posters with ticket purchase (*shipping &amp; handling not included).
			
				<a href="https://www.fandango.com/avengers-infinity-war-199925/movie-times?intcmp=IMA_InfinityWarGWP_merch">BUY TICKETS</a>
			
		</p>
	</div>
</div>

            </li>
            
            <li class="width-25">
                <div class="media">
	
		<a href="https://www.fandangonow.com/promo/newcustomer?intcmp=IMA_NCOFanOffPgV4_ads" target="_blank">
	
		<img src="https://images.fandango.com/images/spotlight/FNOW_April_300x150_NCO_v2.png" alt="<b>20% Off Your First Month on FandangoNOW</b>">
    </img></a>
	<div>
		<h3 class="heading-style-2 heading-size-s bold">20% Off Your First Month on FandangoNOW</h3>
		<p>
			Watch the newest movies not available on Netflix, Hulu or Amazon Prime subscriptions. New customers get 20% off for 1 month!
			
				<a href="https://www.fandangonow.com/promo/newcustomer?intcmp=IMA_NCOFanOffPgV4_ads" target="_blank">SEE DETAILS</a>
			
		</p>
	</div>
</div>

            </li>
            
        </ul>
    </section>
    
    
        <section class="footer-coming-soon row width-100 hide-on-mobile">
    <h2 class="inline heading-style-stub heading-style-1 heading-size-l">New + Coming soon</h2>
    <ul class="inline-items panel footer-coming-soon--list" style={{height: "303.2px"}}>
        
            <li style={{height: "auto"}} class="media narrow footer-coming-soon--list-item">
                <a class="visual-container poster-thumb-size-s" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">
                    <img class="visual-thumb" src="https://images.fandango.com/r1.0.444/ImageRenderer/131/200/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/199925/avengersinfinitywar-postera.jpg" alt="Avengers: Infinity War poster">
                    </img></a>
                <div class="footer-coming-soon--info-block poster-thumb-size-s">
                    <a class="heading-style-1 footer-coming-soon--heading" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">Avengers: Infinity War</a>
                </div>
            </li>
        
            <li style={{height: "auto"}} class="media narrow footer-coming-soon--list-item">
                <a class="visual-container poster-thumb-size-s" href="http://www.fandango.com/deadpool2_200520/movieoverview">
                    <img class="visual-thumb" src="https://images.fandango.com/r1.0.444/ImageRenderer/131/200/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/200520/untitleddeadpoolsequel2018.jpg" alt="Deadpool 2 poster">
                    </img></a>
                <div class="footer-coming-soon--info-block poster-thumb-size-s">
                    <a class="heading-style-1 footer-coming-soon--heading" href="http://www.fandango.com/deadpool2_200520/movieoverview">Deadpool 2</a>
                </div>
            </li>
        
            <li style={{height: "auto"}} class="media narrow footer-coming-soon--list-item">
                <a class="visual-container poster-thumb-size-s" href="http://www.fandango.com/solo:astarwarsstory_203806/movieoverview">
                    <img class="visual-thumb" src="https://images.fandango.com/r1.0.444/ImageRenderer/131/200/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/203806/hansolo5acad1d0aae4a.jpg" alt="Solo: A Star Wars Story poster">
                    </img></a>
                <div class="footer-coming-soon--info-block poster-thumb-size-s">
                    <a class="heading-style-1 footer-coming-soon--heading" href="http://www.fandango.com/solo:astarwarsstory_203806/movieoverview">Solo: A Star Wars Story</a>
                </div>
            </li>
        
            <li style={{height: "auto"}} class="media narrow footer-coming-soon--list-item">
                <a class="visual-container poster-thumb-size-s" href="http://www.fandango.com/oceans8_208432/movieoverview">
                    <img class="visual-thumb" src="https://images.fandango.com/r1.0.444/ImageRenderer/131/200/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/208432/o8-teaser-poster.jpg" alt="Ocean's 8 poster">
                    </img></a>
                <div class="footer-coming-soon--info-block poster-thumb-size-s">
                    <a class="heading-style-1 footer-coming-soon--heading" href="http://www.fandango.com/oceans8_208432/movieoverview">Ocean's 8</a>
                </div>
            </li>
        
            <li style={{height: "auto"}} class="media narrow footer-coming-soon--list-item">
                <a class="visual-container poster-thumb-size-s" href="http://www.fandango.com/incredibles2_185805/movieoverview">
                    <img class="visual-thumb" src="https://images.fandango.com/r1.0.444/ImageRenderer/131/200/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/185805/theincredibles2.jpg" alt="Incredibles 2 poster">
                    </img></a>
                <div class="footer-coming-soon--info-block poster-thumb-size-s">
                    <a class="heading-style-1 footer-coming-soon--heading" href="http://www.fandango.com/incredibles2_185805/movieoverview">Incredibles 2</a>
                </div>
            </li>
        
            <li style={{height: "auto"}} class="media narrow footer-coming-soon--list-item">
                <a class="visual-container poster-thumb-size-s" href="http://www.fandango.com/jurassicworld:fallenkingdom_203382/movieoverview">
                    <img class="visual-thumb" src="https://images.fandango.com/r1.0.444/ImageRenderer/131/200/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/203382/jw2_adv1sheet_stampede_rgb_.jpg" alt="Jurassic World: Fallen Kingdom poster">
                    </img></a>
                <div class="footer-coming-soon--info-block poster-thumb-size-s">
                    <a class="heading-style-1 footer-coming-soon--heading" href="http://www.fandango.com/jurassicworld:fallenkingdom_203382/movieoverview">Jurassic World: Fallen Kingdom</a>
                </div>
            </li>
        
            <li style={{height: "auto"}} class="media narrow footer-coming-soon--list-item">
                <a class="visual-container poster-thumb-size-s" href="http://www.fandango.com/antmanandthewasp_203801/movieoverview">
                    <img class="visual-thumb" src="https://images.fandango.com/r1.0.444/ImageRenderer/131/200/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/203801/ant-manandthewasp2018.jpg" alt="Ant-Man and the Wasp poster">
                    </img>
                </a>
                <div class="footer-coming-soon--info-block poster-thumb-size-s">
                    <a class="heading-style-1 footer-coming-soon--heading" href="http://www.fandango.com/antmanandthewasp_203801/movieoverview">Ant-Man and the Wasp</a>
                </div>
            </li>
        
            <li style={{height: "auto"}} class="media narrow footer-coming-soon--list-item">
                <a class="visual-container poster-thumb-size-s" href="http://www.fandango.com/hoteltransylvania3:summervacation_207632/movieoverview">
                    <img class="visual-thumb" src="https://images.fandango.com/r1.0.444/ImageRenderer/131/200/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/207632/hoteltransylvania3-2018.jpg" alt="Hotel Transylvania 3: Summer Vacation poster">
                    </img></a>
                <div class="footer-coming-soon--info-block poster-thumb-size-s">
                    <a class="heading-style-1 footer-coming-soon--heading" href="http://www.fandango.com/hoteltransylvania3:summervacation_207632/movieoverview">Hotel Transylvania 3: Summer Vacation</a>
                </div>
            </li>
        
    </ul>
</section>

    
    <nav class="hide-on-mobile">
        <div class="row">
            <div class="width-25">
                <h3 class="heading-style-1 heading-size-m">Experience + Explore</h3>
                <ul class="footer-nav-list">
                    <li>
                        <a class="light" href="/moviesintheaters">Movies In Theaters</a>
                    </li>
                    <li>
                        <a class="light" href="/famous-actors-and-actresses">Movie Actors and Actresses</a>
                    </li>
                    <li>
                        <a class="light" href="/mobilemovietickets" rel="nofollow">Mobile</a>
                    </li>
                    <li>
                        <a class="light" href="/new-dvd-releases">New DVD Releases</a>
                    </li>
                    <li>
                        <a class="light" href="/freemovietickets">Special Offers</a>
                    </li>
                    <li>
                        <a class="light" href="/fandango-gift-cards">Gift Cards</a>
                    </li>
                </ul>
            </div>
            
            <div class="width-25">
                <h3 class="heading-style-1 heading-size-m">Editorial Features</h3>
                <ul>
                    
                    <li>
                        <a class="light" href="http://www.fandango.com/movies/indie">Indie Movie Guide</a>
                    </li>
                    
                    <li>
                        <a class="light" href="http://www.fandango.com/movies/summer">Summer Movie Guide</a>
                    </li>
                    
                    <li>
                        <a class="light" href="http://www.fandango.com/movies/family">Family Guide</a>
                    </li>
                    
                    <li>
                        <a class="light" href="http://www.fandango.com/movie-news">Movie News</a>
                    </li>
                    
                </ul>
            </div>
            
            
            <div class="width-25">
                <h3 class="heading-style-1 heading-size-m">Videos</h3>
                <ul>
                    
                    <li>
                        <a class="light" href="http://www.fandango.com/movie-trailer/">Movie Trailers</a>
                    </li>
                    
                    <li>
                        <a class="light" href="http://www.fandango.com/weekend-ticket/video_25">Weekend Ticket</a>
                    </li>
                    
                    <li>
                        <a class="light" href="http://www.fandango.com/video-galleries/awards/81">Frontrunners</a>
                    </li>
                    
                    <li>
                        <a class="light" href="http://www.fandango.com/moms-movie-minute/video_92">Mom's Movie Minute</a>
                    </li>
                    
                </ul>
            </div>
            
            
            <div class="width-25">
                <h3 class="heading-style-1 heading-size-m">Photos</h3>
                <ul>
                    
                    <li>
                        <a class="light" href="http://www.fandango.com/movie-photos/Red-Carpet-Premieres-36">Red Carpet Premieres</a>
                    </li>
                    
                    <li>
                        <a class="light" href="http://www.fandango.com/movie-photos/april-celebrity-birthdays-760">April Celebrity Birthdays</a>
                    </li>
                    
                    <li>
                        <a class="light" href="http://www.fandango.com/movie-photos/2018-award-red-carpets-1332">Award Shows Red Carpets</a>
                    </li>
                    
                </ul>
            </div>
            
        </div>
    </nav>
    <section id="site-utility-links" class="hide-on-mobile">
        <div class="row">
            <div class="width-25 tablet-width-40">
                <h3 class="heading-size-s heading-style-2">Get Updates On All Things Movies:</h3>
                <div id="fanmail-signup" class="fanmail-module">
                    <label for="footer-fanmail-email">Sign up for FanMail:</label>
                    <button class="fan-btn fan-btn-style-default fan-btn-size-slim" id="footer-fanmail-submit" type="button">Submit</button>
                    <div>
                        <input id="footer-fanmail-email" type="email" placeholder="Enter Email Address">
                      </input>
                    </div>
                    <div id="footer-fanmail-error" class="hide error-msg"></div>
                </div>
                <h3 class="heading-style-1 heading-size-m hide" id="fanmail-module-success">Thanks for signing up!</h3>
            </div>
            <div class="width-25 tablet-width-30">
                <h3 class="heading-size-s heading-style-2">Follow Us</h3>
                <a class="icon social-icon facebook" href="//facebook.com/fandango" rel="nofollow">Fandango on Facebook</a>
                <a class="icon social-icon twitter" href="//twitter.com/fandango" rel="nofollow">Fandango on Twitter</a>
                <a class="icon social-icon instagram" href="//instagram.com/fandango" rel="nofollow">Fandango on Instagram</a>
                <a class="icon social-icon google-plus" href="//plus.google.com/+fandango" rel="nofollow">Fandango on Google+</a>
                <a class="icon social-icon tumblr" href="//fandango.tumblr.com" rel="nofollow">Fandango on Tumblr</a>
                <a class="icon social-icon youtube" href="//youtube.com/fandangomovies" rel="nofollow">Fandango on Youtube</a>
            </div>
            <div class="width-25 tablet-width-30">
                <h3 class="heading-size-s heading-style-2">Get Fandango Apps</h3>
                <a class="icon apple-app-store" href="//itunes.apple.com/app/fandango-movies-times-tickets/id307906541?mt=8">Fandango iOS App</a>
                <a class="icon google-play-store" href="//play.google.com/store/apps/details?id=com.fandango">Fandango Android App</a>
            </div>
            <div class="width-25 tablet-width-100">
                <p id="site-narrative">
                    Guarantee the perfect movie night with tickets from Fandango.
                    Find theater showtimes, watch trailers, read reviews and buy movie tickets in advance.
                </p>
            </div>
        </div>
    </section>
    <section id="site-info">
        <div class="row">
            <div>
                <a href="#" data-prev-href="/help" id="nano-rep-link" rel="nofollow">Help</a>
                <span id="footer-feedback"><a class="QSILink SI_81izGXuS0ndBWbX_Link" href="javascript:void(0);">Feedback</a></span>
                <a href="/account/overview" rel="nofollow">My Fandango</a>
                <a href="http://fandango.custhelp.com/app/chat/chat_launch" rel="nofollow">Live Chat</a>
            </div>
            <div>
                <a href="/AboutUs.aspx" rel="nofollow">About Fandango</a>
                <a href="/careers" rel="nofollow">Careers</a>
                <a href="/Advertising.aspx">Advertising</a>
                <a href="/freemoviecontent">Link to Us</a>
                <a href="/affiliateprogram" rel="nofollow">Affiliate Program</a>
                <a href="/PromotionalCodes.aspx" rel="nofollow">Fandango Rewards</a>
                <a href="/site-index/">Site Index</a>
                <a href="/policies/privacy-policy" rel="nofollow">Your Privacy Rights - Privacy Policy</a>
                <a href="/policies/terms-and-policies" rel="nofollow">Terms and Policies</a>
            </div>
            <div>
                <span>Fandango Affiliated Companies:</span>
                <a href="https://www.fandangonow.com/">FandangoNOW</a>
                <a href="https://www.fandangofanshop.com/">FanShop</a>
                <a href="http://movieclips.com/">MovieClips</a>
                <a href="http://www.movies.com/">Movies.com</a>
                <a href="http://www.telemundo.com/entretenimiento/fandango-cine">Fandango Cine en Español</a>
             </div>
            <a href="#" id="ad-choices-link" rel="nofollow">
            <img id="ad-choices-icon" src="https://info.evidon.com/c/betrad/pub/icong1.png"/> AdChoices</a>
            Copyright © 2017 Fandango. All rights reserved. Your Ticket to the Movies. Your Personal Box Office.
        </div>
    </section>
</footer>    </div>
    )
  }
}
export default Footer;
