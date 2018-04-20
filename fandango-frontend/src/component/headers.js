import React from 'react';

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
                    </nav>
                    </header>
                </div>
            </div>
        );
    }
}