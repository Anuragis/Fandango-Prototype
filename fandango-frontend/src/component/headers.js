import React from 'react';
import '../css/header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <div>
      <div id="brand-bar" class="hide-on-mobile">
        <div class="row">
          <div class="width-25 right">
            <a href="/fandango-gift-cards">Gift Cards</a> |
            <a href="/freemovietickets">Offers</a> |
            {/*<a href="https://www.fandango.com/account/signin?from=%2F" class="hide-logged-in">Sign In</a>*/}
            <a href="/login" class="hide-logged-in">Sign In</a>
            <a href="/signout" class="show-logged-in">Sign Out</a>
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
                  
                </div>
                <a class="icon left fandango-logo" href="/">Fandango</a>
              </li>
              <li id="global-search">
                <form action="/search" autocomplete="off" role="search" novalidate>
                  <div class="fan-autocomplete">
                    <div class="fan-autocomplete-results"></div>
                    <input class="fan-input style-search" type="text" name="q" placeholder="Enter City + State, ZIP Code, or Movie" />
                    <div class="csspinner double-up no-overlay"></div>
                  </div>
                  <input type="hidden" name="mode" value="general"/>
                  <button class="fan-btn fan-btn-style-go" type="button">Go</button>
                </form>
              </li>
            </ul>
            <ul id="global-menu" class="inline-items tablet-width-100 right nonstandard-width">
              <li id="movies-tab" class="tablet-width-20 nonstandard-width">
                <section class="has-dropdown">
                  <h3><a href="/moviesintheaters" style = {{color : 'white', paddingTop:'25px'}}>Movies</a></h3>
                </section>
              </li>
              <li id="theatersTab" class="tablet-width-30 nonstandard-width">
                <section class="has-dropdown">
                  <h3><a id="local-movies-link" href="/movietimes" style = {{color : 'white', paddingTop:'25px'}}>Movie Times + Tickets</a></h3>
                </section>
              </li>
              <li class="tablet-width-30 nonstandard-width">
                <section class="has-dropdown">
                  <h3><a href="/movie-news" style = {{color : 'white', paddingTop:'25px'}}>Movie News</a></h3>
                </section>
              </li>
              <li id="vip-tab" class="tablet-width-20 nonstandard-width vip-menu js-heartsAndStars-flyout-anchor">
                <section id="menu-logged-in" class="show-logged-in has-dropdown">
                  <h3>
                    <a href="https://www.fandango.com/account/dashboard">My VIP Account</a>
                  </h3>
                </section>
                <section class="show-logged-out nav-account-wrapper has-dropdown">
                  <h3>
                    <a href="https://www.fandango.com/fandangovip?source=web_globalnav_join" style = {{color : 'white', paddingTop:'25px'}} ><span class="nav-description">Join Fandango<span class="page-header-emphasis">VIP</span></span></a>
                  </h3>
                </section>
              </li>
              <li class="mobile-sub-nav hide-on-tablet hide-on-desktop">
              </li>
            </ul>
          </nav>
        </header>
      </div>
      
    </div>
        );
    }
}