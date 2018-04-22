import React from 'react';
import Header from './headers';
import '../css/header.css';
import Latestmovies from './latestmovies';
import MovieSlide from './movieslide';
import Footer from './footer';

export default class userHome extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <div>
                <Header/>
                <section class="home-module">
                    <section class="movie-tickets-header">
                    <div class="row">
                        <div class="width-50 mobile-width-60 columns movie-tickets-header--container">
                        <h2 class="movie-tickets-header--heading heading-size-l heading-style-1 inline">BUY MOVIE TICKETS</h2>
                        <a class="movie-tickets-header--see-all inline" href="https://www.fandango.com/moviesintheaters">See All Movies</a>
                        </div>
                    </div>
                    </section>
                </section>
                <div id="page-top">
                <div id="page" role="main"> 
                  <section class="home-module">
                    <div class="row layout-content-sidebar">
                      <div class="right sidebar tablet-width-100 homeMovieCarousel--ad-wrapper">
                        <div class="ad" data-unit="boxadm" data-responsive="true" data-media="mobile">
                        </div>
                        <div class="ad" data-unit="boxaddt" data-responsive="true" data-media="desktop,tablet">
                        </div>
                      </div>
                      <div style = {{width : '100%'}} class="tablet-width-100 content homeMovieCarousel--wrapper">
                        <button class="icon style-none left js-flipper-left">Previous Films</button>
                            <Latestmovies />
                        <button class="icon style-none right js-flipper-right">More Films</button>
                      </div>
                    </div>
                  </section>   
                  <MovieSlide />           
                </div>
              </div>
                <Footer />
            </div>
        );
    }
}
