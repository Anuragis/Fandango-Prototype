import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term:""
        }
        this.termChange = this.termChange.bind(this);
      }

    termChange(e) {
        this.setState({
            term:e.target.value
        })
    }

    render() {
        function handleSignout(e){
            window.location.reload();
            localStorage.removeItem('userid');
            alert('User Signed Out Successfully!!!');
        }
        let userID = null,barToggle = null;
        userID = localStorage.getItem('userid');
        if(userID){
            barToggle = <Link onClick = {(e) => handleSignout(e)}  to = "/"class="show-logged-in">Sign Out</Link>
        }else{
            barToggle = <Link to = "/signin"class="show-logged-in">Sign In</Link>
        }
        return (
            <div class="logged-in  no-touch">
        <div>
      <div id="brand-bar" class="hide-on-mobile">
        <div class="row">
          <div class="width-25 right">
            <a href="/fandango-gift-cards">Gift Cards</a> |
            <a href="/freemovietickets">Offers</a> |
            {barToggle}
          </div>
        </div>
      </div>
      <div id="header-wrap">
    <header id="global-header" role="banner">
        <nav class="row" role="navigation">
            <i class="left icon grip"></i>
            <ul class="inline-items tablet-width-100 left nonstandard-width">
                <li>
                    <div class="ad" data-unit="homepagelogo" data-responsive="false" data-media="">
<div id="div-gpt-homepagelogo-1" class="mps-slot" data-mps-slot="homepagelogo" data-mps-loadset="0" data-google-query-id="CPX734DxzNoCFYerZAodjroMrQ">
<div id="google_ads_iframe_/2620/fandango.dart/homepage_5__container__" style={{border : '0pt none'}}>
<iframe id="google_ads_iframe_/2620/fandango.dart/homepage_5" title="3rd party ad content" name="google_ads_iframe_/2620/fandango.dart/homepage_5" width="242" height="56" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" srcdoc="" style={{border : '0px',verticalAlign:'bottom'}}>
</iframe>
</div>
</div>
</div>

                    <a class="icon left fandango-logo" href="/">Fandango</a>
                </li>
                <li id="global-search">
                    <form action="/search" autocomplete="off" role="search" novalidate="">
                        <div class="fan-autocomplete">
                            <div class="fan-autocomplete-results"></div>
                            <input class="fan-input style-search" type="text" name="q" placeholder="Enter City + State, ZIP Code, or Movie" onChange={this.termChange} />
                            <div class="csspinner double-up no-overlay"></div>
                        </div>
                        <input type="hidden" name="mode" value="general"/>
                        <button onClick={(e) => this.props.inpTerm(this.state.term)} class="fan-btn fan-btn-style-go" type="button">Go</button>
                    </form>
                </li>
            </ul>
            <ul id="global-menu" class="inline-items tablet-width-100 right nonstandard-width">
                <li id="movies-tab" class="tablet-width-20 nonstandard-width">
                    <section class="has-dropdown" style={{height:'70px',paddingTop : '25px'}}>
                        <h3><Link to="/movies" style = {{color : 'white'}}>Movies</Link></h3>
                        <div style = {{height : '500px'}} class="mega-menu">
                            <div class="row">
                                <div class="width-25">
                                    <h4 class="heading-style-1 heading-size-m">Now Playing</h4>
                                    <ul>
                                        
                                            <li>
                                                <a class="light" href="http://www.fandango.com/rampage2018_207628/movieoverview">Rampage (2018)</a>
                                            </li>
                                        
                                            <li>
                                                <a class="light" href="http://www.fandango.com/aquietplace_207769/movieoverview">A Quiet Place</a>
                                            </li>
                                        
                                            <li>
                                                <a class="light" href="http://www.fandango.com/blumhousestruthordare2018_208538/movieoverview">Blumhouse's Truth or Dare (2018)</a>
                                            </li>
                                        
                                            <li>
                                                <a class="light" href="http://www.fandango.com/readyplayerone_204139/movieoverview">Ready Player One</a>
                                            </li>
                                        
                                            <li>
                                                <a class="light" href="http://www.fandango.com/blockers_206654/movieoverview">Blockers</a>
                                            </li>
                                        
                                            <li>
                                                <a class="light" href="http://www.fandango.com/blackpanther_202991/movieoverview">Black Panther</a>
                                            </li>
                                        
                                            <li>
                                                <a class="light" href="http://www.fandango.com/isleofdogs_205852/movieoverview">Isle of Dogs</a>
                                            </li>
                                        
                                            <li>
                                                <a class="light" href="http://www.fandango.com/icanonlyimagine_206238/movieoverview">I Can Only Imagine</a>
                                            </li>
                                        
                                            <li>
                                                <a class="light" href="http://www.fandango.com/tylerperrysacrimony_206776/movieoverview">Tyler Perry's Acrimony</a>
                                            </li>
                                        
                                            <li>
                                                <a class="light" href="http://www.fandango.com/chappaquiddick_206369/movieoverview">Chappaquiddick</a>
                                            </li>
                                        
                                            <li>
                                                <a class="light" href="http://www.fandango.com/themiracleseason_208411/movieoverview">The Miracle Season</a>
                                            </li>
                                        
                                        <li>
                                            <a class="cta" href="/moviesintheaters">See All Now Playing</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="width-25">
                                    <header>
                                        <h4 class="heading-style-1 heading-size-m movies-tab__title">Opening This Week</h4>
                                        <div class="list-legend">
                                            <span class="header-definition icon icon-limited-release"></span>
                                            <span class="caption">= Limited Release</span>
                                        </div>
                                    </header>
                                    <ul class="movies-opening-this-week">
                                        
                                            <li>
                                                <a href="http://www.fandango.com/ifeelpretty_209375/movieoverview">
                                                    <div class="light">
                                                        
                                                        I Feel Pretty
                                                    </div>
                                                </a>
                                            </li>
                                        
                                            <li>
                                                <a href="http://www.fandango.com/supertroopers2_204918/movieoverview">
                                                    <div class="light">
                                                        
                                                        Super Troopers 2
                                                    </div>
                                                </a>
                                            </li>
                                        
                                            <li>
                                                <a href="http://www.fandango.com/traffik_208806/movieoverview">
                                                    <div class="light">
                                                        
                                                        Traffik
                                                    </div>
                                                </a>
                                            </li>
                                        
                                            <li>
                                                <a href="http://www.fandango.com/thedevilandfatheramorth_209249/movieoverview">
                                                    <div class="light">
                                                        <span class="icon icon-limited-release"></span>
                                                        The Devil and Father Amorth
                                                    </div>
                                                </a>
                                            </li>
                                        
                                            <li>
                                                <a href="http://www.fandango.com/genesis2018_210635/movieoverview">
                                                    <div class="light">
                                                        <span class="icon icon-limited-release"></span>
                                                        Genesis (2018)
                                                    </div>
                                                </a>
                                            </li>
                                        
                                            <li>
                                                <a href="http://www.fandango.com/ghoststories_194945/movieoverview">
                                                    <div class="light">
                                                        <span class="icon icon-limited-release"></span>
                                                        Ghost Stories
                                                    </div>
                                                </a>
                                            </li>
                                        
                                            <li>
                                                <a href="http://www.fandango.com/godardmonamour_210602/movieoverview">
                                                    <div class="light">
                                                        <span class="icon icon-limited-release"></span>
                                                        Godard Mon Amour
                                                    </div>
                                                </a>
                                            </li>
                                        
                                        <li>
                                            <a class="cta" href="/moviesintheaters">See All Opening This Week</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="width-25">
                                    
                                    <h4 class="heading-style-1 heading-size-m">Pre Sales Tickets</h4>
                                    <ul>
                                        
                                            <li>
                                                <a class="light" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">Avengers: Infinity War</a>
                                            </li>
                                        
                                    </ul>
                                    
                                    
                                    <h4 class="heading-style-1 heading-size-m">Coming Soon</h4>
                                    <ul>
                                        
                                            <li>
                                                <a class="light" href="http://www.fandango.com/badsamaritan_209394/movieoverview">Bad Samaritan</a>
                                            </li>
                                        
                                            <li>
                                                <a class="light" href="http://www.fandango.com/overboard2018_208487/movieoverview">Overboard (2018)</a>
                                            </li>
                                        
                                            <li>
                                                <a class="light" href="http://www.fandango.com/tully2018_208671/movieoverview">Tully (2018)</a>
                                            </li>
                                        
                                            <li>
                                                <a class="light" href="http://www.fandango.com/breakingin2018_208760/movieoverview">Breaking In (2018)</a>
                                            </li>
                                        
                                            <li>
                                                <a class="light" href="http://www.fandango.com/lifeoftheparty_209253/movieoverview">Life of the Party</a>
                                            </li>
                                        
                                            <li>
                                                <a class="light" href="http://www.fandango.com/bookclub_209975/movieoverview">Book Club</a>
                                            </li>
                                        
                                            <li>
                                                <a class="light" href="http://www.fandango.com/deadpool2_200520/movieoverview">Deadpool 2</a>
                                            </li>
                                        
                                            <li>
                                                <a class="light" href="http://www.fandango.com/showdogs_208830/movieoverview">Show Dogs</a>
                                            </li>
                                        
                                            <li>
                                                <a class="light" href="http://www.fandango.com/solo:astarwarsstory_203806/movieoverview">Solo: A Star Wars Story</a>
                                            </li>
                                        
                                        <li>
                                            <a class="cta" href="/moviescomingsoon">See All Coming Soon</a>
                                        </li>
                                    </ul>
                                    
                                </div>
                                <div class="width-25">
                                    <h4 class="heading-style-1 heading-size-m">Explore More</h4>
                                    <ul>
                                        <li>
                                            <a class="cta light" href="/movie-trailer">Watch Trailers on MovieClips</a>
                                        </li>
                                        <li>
                                            <a class="cta light" href="/boxoffice">Top Box Office</a>
                                        </li>
                                        <li>
                                            <a class="cta light" href="/new-dvd-releases">New DVDs</a>
                                        </li>
                                    </ul>
                                    <div class="ad" data-unit="marqueebanner" data-responsive="false" data-media="">

      </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </li>
                <li id="theatersTab" class="tablet-width-30 nonstandard-width">
                    <section class="has-dropdown"  style={{height:'70px',paddingTop : '25px'}}>
                        <h3><Link to="/movieTimeTicket" style = {{color : 'white'}} id="local-movies-link" >Movie Times + Tickets</Link></h3>
                        <div class="mega-menu">
                            <div class="row">
                                <div id="theatersList" class="width-75 tablet-width-100"><header class="list-local-theaters">
    <h3 class="heading-size-m heading-style-1 inline">Find tickets at the following theaters</h3>
    <span><span class="show-logged-in"><span class="header-definition icon-follow-small">My Favorite Theater</span></span></span>
    <span class="header-definition icon-not-available-small-grey">Non-Fandango Ticketing Theater</span>
</header>

<ul class="nearby-theaters">

    <li class="width-33">
        <a href="http://www.fandango.com/towne3cinemas_aafrf/theaterpage" class="light">
            <h6 style = {{color : 'white'}}>
            	Towne 3 Cinemas
            </h6>
            <div class="mega-menu-theater-addr">
               1433 The Alameda
            </div>
        </a>
    </li>

    <li class="width-33">
        <a href="http://www.fandango.com/cineartssantanarow_aasur/theaterpage" class="light">
            <h6>
            	
            	CinéArts @ Santana Row
            </h6>
            <div class="mega-menu-theater-addr">
               3088 Olsen Drive
            </div>
        </a>
    </li>

    <li class="width-33">
        <a href="http://www.fandango.com/cineluxalmadencafeandlounge_aafqq/theaterpage" class="light">
            <h6>
            	
            	CineLux Almaden Cafe &amp; Lounge
            </h6>
            <div class="mega-menu-theater-addr">
               2306 Almaden Road
            </div>
        </a>
    </li>

    <li class="width-33">
        <a href="http://www.fandango.com/amcsaratoga14_aaecu/theaterpage" class="light">
            <h6>
            	
            	AMC Saratoga 14
            </h6>
            <div class="mega-menu-theater-addr">
               700 El Paseo De Saratoga
            </div>
        </a>
    </li>

    <li class="width-33">
        <a href="http://www.fandango.com/amceastridge15_aatul/theaterpage" class="light">
            <h6>
            	
            	AMC Eastridge 15
            </h6>
            <div class="mega-menu-theater-addr">
               2190 Eastridge Loop
            </div>
        </a>
    </li>

    <li class="width-33">
        <a href="http://www.fandango.com/century20oakridgeandxd_aarbx/theaterpage" class="light">
            <h6>
            	
            	Century 20 Oakridge and XD
            </h6>
            <div class="mega-menu-theater-addr">
               925 Blossom Hill Rd.
            </div>
        </a>
    </li>

    <li class="width-33">
        <a href="http://www.fandango.com/cineluxplazatheatre_aafqs/theaterpage" class="light">
            <h6>
            	
            	CineLux Plaza Theatre
            </h6>
            <div class="mega-menu-theater-addr">
               2501 S. Winchester Blvd.
            </div>
        </a>
    </li>

    <li class="width-33">
        <a href="http://www.fandango.com/amcmercado20_aadyn/theaterpage" class="light">
            <h6>
            	
            	AMC Mercado 20
            </h6>
            <div class="mega-menu-theater-addr">
               3111 Mission College Blvd.
            </div>
        </a>
    </li>

    <li class="width-33">
        <a href="http://www.fandango.com/century20greatmallandxd_aapcg/theaterpage" class="light">
            <h6>
            	
            	Century 20 Great Mall and XD
            </h6>
            <div class="mega-menu-theater-addr">
               1010 Great Mall Drive
            </div>
        </a>
    </li>

</ul>

</div>
                                <div id="zip-search" class="width-25 tablet-width-100">
                                    <h4 class="heading-style-1 heading-size-m">Find theaters + movie times near</h4>
                                    <form action="/search" autocomplete="off" role="search" novalidate="">
                                        <input class="fan-input style-search width-100" type="text" name="q" placeholder="Enter a City, State or Zip Code"/>
                                        <button class="fan-btn style-cta width-100" type="submit"><strong>find movie times + tickets</strong></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </li>
                <li class="tablet-width-30 nonstandard-width">
                    <section class="has-dropdown"  style={{height:'70px',paddingTop : '25px'}}>
                        <h3><a href="/movie-news" style = {{color : 'white'}}>Movie News</a></h3>
                        <div class="mega-menu">
                            <div class="row">
                                <div id="featured-movie-news" class="width-75 mobile-width-100 grid-parent">
                                    <h4 class="width-100 heading-style-1 heading-size-m">Featured Movie News</h4>
                                    <ul>
                                        
                                        <li class="width-33">
                                            <a class="squared background" style={{backgroundImage:"url(https://images.fandango.com/images/fandangoblog/FanDwayneJohnson_Rampage_bl.jpg)"}} href="http://www.fandango.com/movieblog/dwayne-johnsons-jungle-cruise-gets-another-villain-heres-what-we-know-753158.html">
                                                <img src="https://images.fandango.com/images/fandangoblog/FanDwayneJohnson_Rampage_bl.jpg" alt=""/>
                                            </a>
                                            <h6>
                                                <a class="light" href="http://www.fandango.com/movieblog/dwayne-johnsons-jungle-cruise-gets-another-villain-heres-what-we-know-753158.html">Dwayne Johnson's 'Jungle Cruise' Gets Another Villain; Here's What We Know</a>
                                            </h6>
                                            <a class="cta" href="http://www.fandango.com/movieblog/dwayne-johnsons-jungle-cruise-gets-another-villain-heres-what-we-know-753158.html">Read More</a>
                                        </li>
                                        
                                        <li class="width-33">
                                            <a class="squared background" style={{backgroundImage:"url(https://images.fandango.com/images/fandangoblog/Fan_CTheron-FGaryGray_FateO.jpg)"}} href="http://www.fandango.com/movieblog/hasbros-mask-heads-to-big-screen-via-f-gary-gray-753157.html">
                                                <img src="https://images.fandango.com/images/fandangoblog/Fan_CTheron-FGaryGray_FateO.jpg" alt=""/>
                                            </a>
                                            <h6>
                                                <a class="light" href="http://www.fandango.com/movieblog/hasbros-mask-heads-to-big-screen-via-f-gary-gray-753157.html">Hasbro's 'M.A.S.K.' Heads to Big Screen via F. Gary Gray</a>
                                            </h6>
                                            <a class="cta" href="http://www.fandango.com/movieblog/hasbros-mask-heads-to-big-screen-via-f-gary-gray-753157.html">Read More</a>
                                        </li>
                                        
                                        <li class="width-33">
                                            <a class="squared background" style= {{backgroundImage : "url(https://images.fandango.com/images/fandangoblog/Fan_2018SummerPreview_AvengersInfinityWar.jpg)"}}                                             href="http://www.fandango.com/movieblog/week-in-movie-news-steven-spielberg-tapped-for-dc-movie-summer-movie-preview-and-more-753162.html">
                                                <img src="https://images.fandango.com/images/fandangoblog/Fan_2018SummerPreview_AvengersInfinityWar.jpg" alt=""/>
                                            </a>
                                            <h6>
                                                <a class="light" href="http://www.fandango.com/movieblog/week-in-movie-news-steven-spielberg-tapped-for-dc-movie-summer-movie-preview-and-more-753162.html">The Week in Movie News: Steven Spielberg Tapped for a DC Movie, Summer Movie Preview and More</a>
                                            </h6>
                                            <a class="cta" href="http://www.fandango.com/movieblog/week-in-movie-news-steven-spielberg-tapped-for-dc-movie-summer-movie-preview-and-more-753162.html">Read More</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                                <div id="exploreContent" class="width-25 hide-on-mobile">
                                    <h4 class="heading-style-1 heading-size-m">Explore Content</h4>
                                    <ul>
                                        
                                        <li>
                                            <a class="light" href="http://www.fandango.com/movie-reviews ">Movie Reviews</a>
                                        </li>
                                        
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
                                            <a class="light" href="http://www.fandango.com/weekend-ticket/video_25">Weekend Ticket</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </li>
                <li id="vip-tab" class="tablet-width-20 nonstandard-width vip-menu js-heartsAndStars-flyout-anchor">
                    <section id="menu-logged-in" class="show-logged-in has-dropdown"  style={{height:'70px',paddingTop : '20px'}}>
                        <h3>
                            <a href="https://www.fandango.com/account/dashboard" style = {{color : 'white'}}>My VIP Account</a>
                        </h3>
                        <div class="mega-menu">
                            <div class="row">
                                <div class="width-25" id="vip-my-purchases"><div class="vip-content">

    <h3 class="heading-style-1 heading-size-m">Top Movies Near 95126</h3>
    <a href="/95126_movietimes">Edit Zip Code</a>

    <ul>
	
	    <li>
	        <a class="light" href="http://www.fandango.com/aquietplace_207769/movieoverview">A Quiet Place</a>
	    </li>
	
	    <li>
	        <a class="light" href="http://www.fandango.com/rampage2018_207628/movieoverview">Rampage (2018)</a>
	    </li>
	
	    <li>
	        <a class="light" href="http://www.fandango.com/ifeelpretty_209375/movieoverview">I Feel Pretty</a>
	    </li>
	
	</ul>
</div>
<a class="cta" id="purchases-see-all" href="/95126_movietimes">See all movies</a>
</div>
                                <div class="width-25" id="vip-my-theaters"><div class="vip-content">
    <h3 class="heading-style-1 heading-size-m">My Theaters</h3>
    
        <li>
            <p class="vip-notice">Save your favorite theater and we'll make sure it's front and center for you.</p>
        </li>
    
    
</div>
<a class="cta" id="vip-my-theaters" href="/95126_movietimes?mytheaters=true">Manage my theater list</a>
</div>
                                <div class="width-25" id="vip-insider-perks"><div class="vip-content">
    <h3 class="heading-style-1 heading-size-m">Insider Perks</h3>
    <ul>
    
        
        <li>
            <a class="light" href="https://www.fandango.com/deadpool-2-200520/movie-times?intcmp=IMA_Deadpool2GWP_perks">'Deadpool 2' Gift with Purchase</a>
        </li>
        
        <li>
            <a class="light" href="https://www.fandango.com/avengers-infinity-war-199925/movie-times?intcmp=IMA_InfinityWarGWP_perks">'Avengers: Infinity War' Gift with Purchase</a>
        </li>
        
        <li>
            <a class="light" href="https://www.fandango.com/ready-player-one-204139/movie-times?intcmp=IMA_RPOGWP_perks">'Ready Player One' Gift With Purchase</a>
        </li>
        
    
    </ul>
</div>
<a class="cta" href="/account/insiderperks">See all insider perks</a>
</div>
                                <div class="width-25" id="vip-my-fandango"><div class="vip-content">
    
        <h3 class="heading-size-m heading-style-1">My Fandango</h3>
        <p class="vip-content__vip-plus-text">
            <a href="/account/vip-plus-mypoints"><span class="icon icon-vip-plus-points-purple"></span><span class="vip-content__vip-plus-link-text">See my VIP+ Points</span></a>
        </p>
    
    
    
        <div id="global-nav-no-card">
        
            <p class="vip-notice">For warp speed checkout, securely add your credit card.</p>
            <a href="/account/settings#open-payment-form"><i class="icon-credit-card"></i></a>
            <a href="/account/settings#open-payment-form" class="icon-plus-circle light">Add your <br/>Credit Card</a>
        </div>
    
</div>
<a class="cta" href="https://www.fandango.com/account/dashboard">Manage my VIP account</a>
</div>
                            </div>
                        </div>
                    </section>
                    <section class="show-logged-out nav-account-wrapper has-dropdown" >
                        <h3>
                            <a href="https://www.fandango.com/fandangovip?source=web_globalnav_join"><span class="nav-description">Join Fandango<span class="page-header-emphasis">VIP</span></span></a>
                        </h3>
                        <div class="mega-menu">
                            <div class="row">
                                
                                    <div class="mega-menu-item width-15">
                                        <div class="profile-point vip-benefit">
                                            <img data-src="//images.fandango.com/cms/assets/d44a8d80-4251-11e8-8eca-fd26e4965c58--vip-points-orange-circle-nav-icon.svg" src="//images.fandango.com/cms/assets/d44a8d80-4251-11e8-8eca-fd26e4965c58--vip-points-orange-circle-nav-icon.svg"/>
                                            <h4 class="heading-size-m heading-style-1 light">Get Points + Save</h4>
                                            <p class="msg">More tickets = more points = more movies on us! Rack up VIP+ Points for every ticket you buy to score streaming movies and discounts on tickets and movie gear.</p>
                                            <a class="cta" href="https://www.fandango.com/fandangovip#vip+">Learn more</a>
                                        </div>
                                    </div>
                                
                                    <div class="mega-menu-item width-15">
                                        <div class="profile-point vip-benefit">
                                            <img data-src="//images.fandango.com/redesign/areas/registration/img/insider-perks-oj.svg" src="//images.fandango.com/redesign/areas/registration/img/insider-perks-oj.svg"/>
                                            <h4 class="heading-size-m heading-style-1 light">Insider Perks</h4>
                                            <p class="msg">Get your swag on with discounted movies to stream at home, exclusive movie gear, access to advanced screenings and discounts galore.</p>
                                            <a class="cta" href="https://www.fandango.com/fandangovip#insider-perks">Learn more</a>
                                        </div>
                                    </div>
                                
                                    <div class="mega-menu-item width-15">
                                        <div class="profile-point vip-benefit">
                                            <img data-src="//images.fandango.com/redesign/areas/registration/img/theater-rewards-oj.svg" src="//images.fandango.com/redesign/areas/registration/img/theater-rewards-oj.svg"/>
                                            <h4 class="heading-size-m heading-style-1 light">Partner Rewards</h4>
                                            <p class="msg">Collect bonus rewards from our many partners, including AMC, Stubs, Cinemark Connections, Regal Crown Club when you link accounts.</p>
                                            <a class="cta" href="https://www.fandango.com/fandangovip#theater-rewards">Learn more</a>
                                        </div>
                                    </div>
                                
                                    <div class="mega-menu-item width-15">
                                        <div class="profile-point vip-benefit">
                                            <img data-src="//images.fandango.com/redesign/areas/registration/img/worry-free-tickets-oj.svg" src="//images.fandango.com/redesign/areas/registration/img/worry-free-tickets-oj.svg"/>
                                            <h4 class="heading-size-m heading-style-1 light">Refunds + Exchanges</h4>
                                            <p class="msg">We know life happens, so if something comes up, you can return or exchange your tickets up until the posted showtime.</p>
                                            <a class="cta" href="https://www.fandango.com/fandangovip#worry-free-tickets">Learn more</a>
                                        </div>
                                    </div>
                                
                                <div class="mega-menu-item width-40">
                                    <div class="profile-point">
                                        <a class="fan-btn style-cta width-100" href="https://www.fandango.com/fandangovip?source=web_flydown_join">Join Fandango VIP For Free</a>
                                        <div class="join-copy">
                                            <p>(It only takes a few seconds to join)</p>
                                            <span>Already a Fandango VIP?</span> <a href="https://www.fandango.com/account/signin?from=%2F&amp;source=web_globalnav_signin" class="nav-account-signin cta">Sign In</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </li>
                <li class="mobile-sub-nav hide-on-tablet hide-on-desktop">
                    
                </li>
            </ul>
        </nav>
    </header>
</div>
      </div>
      
    </div>
        );
    }
}