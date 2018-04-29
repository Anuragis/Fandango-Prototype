import React from 'react';


export default class Latestmovies extends React.Component {
    constructor(props) {
        super(props);
        //     this.state = {isLeft: true};

        // // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.handleClick.bind(this);
    }

    //   handleClick = () => {
    //     console.log('this is:', this);
    //   }

    //   handleClick() {
    //     this.setState(prevState => ({
    //         isLeft: !prevState.isToggleOn
    //       }));
    //     var i = 0;
    //     var refreshIntervalId;
    //     var li,inn;
    //     li = document.getElementsByTagName('ol')[0].children[0];
    //     refreshIntervalId = setInterval(function(){
    //     i= i+1;

    //     if(dir==='left'){
    //     li = document.getElementsByTagName('ol')[0].children[13];
    //     inn = document.getElementsByTagName('ol')[0].innerHTML;
    //     document.getElementsByTagName('ol')[0].innerHTML = li.outerHTML + inn;
    //     }
    //     else if(dir==='right'){
    //     inn = document.getElementsByTagName('ol')[0].innerHTML;
    //     document.getElementsByTagName('ol')[0].innerHTML = inn + li.outerHTML;
    //     li = document.getElementsByTagName('ol')[0].children[0];
    //     document.getElementsByTagName('ol')[0].removeChild(li);
    //     }
    //     if(i==3){
    //     i=0;
    //     clearInterval(refreshIntervalId);
    //     }

    //     }
    //     , 350);
    //   }
    deleteRow(dir) {
        var i = 0;
        var refreshIntervalId;
        var li, inn;
        
        inn = document.getElementsByTagName('ol')[0].innerHTML;
        refreshIntervalId = setInterval(function () {
            i = i + 1;
            if (dir === 'left') {
                li = document.getElementsByTagName('ol')[0].children[13];
                document.getElementsByTagName('ol')[0].innerHTML = li.outerHTML + inn;
                document.getElementsByTagName('ol')[0].removeChild(document.getElementsByTagName('ol')[0].children[13]);
            }
            else if (dir === 'right') {
                li = document.getElementsByTagName('ol')[0].children[0];
                document.getElementsByTagName('ol')[0].innerHTML = inn + li.outerHTML;
                document.getElementsByTagName('ol')[0].removeChild(document.getElementsByTagName('ol')[0].children[0]);
            }
            if (i == 3) {
                i = 0;
                clearInterval(refreshIntervalId);
            }

        }
            , 350);
    }
    render() {
        return (
            <div>

                <section class="home-module">
                    <div class="row layout-content-sidebar">
                        <div class="tablet-width-100 content homeMovieCarousel--wrapper" style={{ width: "100%" }}>
                            <button class="icon style-none left js-flipper-left">Previous Films</button>
                            <div>
                                <section class="home-module">
                                    <div class="row layout-content-sidebar">
                                        <div class="tablet-width-100 content homeMovieCarousel--wrapper">
                                            <div id="homeMovieCarousel" class="carousel jcarousel carousel-style-strip" data-jcarousel="true" style={{ userSelect: "none", touchAction: "pan-y" }}>
                                                <ol class="carousel-items js-items" style={{ width: "13020px", left: "0px", top: "0px" }}>
                                                    <li>
                                                        <div class="fluid poster">
                                                            <a href="/avengers-infinity-war-199925/movie-overview" class="visual-container">
                                                                <img class="poster-thumb-size-s visual-thumb" src="//images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/199925/AvengersInfinityWar-postera.jpg" alt="Avengers: Infinity War poster">
                                                                </img>
                                                            </a>
                                                            <div><a class="heading-style-1 heading-size-s heading__movie-carousel" href="/avengers-infinity-war-199925/movie-overview">Avengers: Infinity War</a><time datetime="Fri, Apr 27">Fri, Apr 27</time></div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="fluid poster">
                                                            <a href="/a-quiet-place-207769/movie-overview" class="visual-container">
                                                                <img class="poster-thumb-size-s visual-thumb" src="//images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/207769/AQuietPlace2018.jpg" alt="A Quiet Place poster">
                                                                </img>
                                                            </a>
                                                            <div><a class="heading-style-1 heading-size-s heading__movie-carousel" href="/a-quiet-place-207769/movie-overview">A Quiet Place</a><time datetime="Fri, Apr 6">Fri, Apr 6</time></div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="fluid poster">
                                                            <a href="/i-feel-pretty-209375/movie-overview" class="visual-container">
                                                                <img class="poster-thumb-size-s visual-thumb" src="//images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/209375/IFeelPretty_OneSheet_RGB_10.jpg" alt="I Feel Pretty poster">
                                                                </img>
                                                            </a>
                                                            <div><a class="heading-style-1 heading-size-s heading__movie-carousel" href="/i-feel-pretty-209375/movie-overview">I Feel Pretty</a><time datetime="Fri, Apr 20">Fri, Apr 20</time></div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="fluid poster">
                                                            <a href="/rampage-2018-207628/movie-overview" class="visual-container">
                                                                <img class="poster-thumb-size-s visual-thumb" src="//images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/207628/RMPGE_VERT_ONLINE_TEASER_DOM_2764x4096_master.jpg" alt="Rampage (2018) poster">
                                                                </img>
                                                            </a>
                                                            <div><a class="heading-style-1 heading-size-s heading__movie-carousel" href="/rampage-2018-207628/movie-overview">Rampage (2018)</a><time datetime="Fri, Apr 13">Fri, Apr 13</time></div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="fluid poster">
                                                            <a href="/super-troopers-2-204918/movie-overview" class="visual-container">
                                                                <img class="poster-thumb-size-s visual-thumb" src="//images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/204918/SuperTroopers2_OfficialPost.jpg" alt="Super Troopers 2 poster">
                                                                </img>
                                                            </a>
                                                            <div><a class="heading-style-1 heading-size-s heading__movie-carousel" href="/super-troopers-2-204918/movie-overview">Super Troopers 2</a><time datetime="Fri, Apr 20">Fri, Apr 20</time></div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="fluid poster">
                                                            <a href="/overboard-2018-208487/movie-overview" class="visual-container">
                                                                <img class="poster-thumb-size-s visual-thumb" src="//images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/208487/Overboard_1Sht_PAYOFF_FINIS.jpg" alt="Overboard (2018) poster">
                                                                </img>
                                                            </a>
                                                            <div><a class="heading-style-1 heading-size-s heading__movie-carousel" href="/overboard-2018-208487/movie-overview">Overboard (2018)</a><time datetime="Fri, May 4">Fri, May 4</time></div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="fluid poster">
                                                            <a href="/blumhouses-truth-or-dare-2018-208538/movie-overview" class="visual-container">
                                                                <img class="poster-thumb-size-s visual-thumb" src="//images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/208538/TruthOrDare2018.jpg" alt="Blumhouse's Truth or Dare (2018) poster">
                                                                </img>
                                                            </a>
                                                            <div><a class="heading-style-1 heading-size-s heading__movie-carousel" href="/blumhouses-truth-or-dare-2018-208538/movie-overview">Blumhouse's Truth or Dare (2018)</a><time datetime="Fri, Apr 13">Fri, Apr 13</time></div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="fluid poster">
                                                            <a href="/traffik-208806/movie-overview" class="visual-container">
                                                                <img class="poster-thumb-size-s visual-thumb" src="//images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/208806/OneSheetFInalTRAFFIK.jpg" alt="Traffik poster">
                                                                </img>
                                                            </a>
                                                            <div><a class="heading-style-1 heading-size-s heading__movie-carousel" href="/traffik-208806/movie-overview">Traffik</a><time datetime="Fri, Apr 20">Fri, Apr 20</time></div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="fluid poster">
                                                            <a href="/isle-of-dogs-205852/movie-overview" class="visual-container">
                                                                <img class="poster-thumb-size-s visual-thumb" src="//images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/205852/IOD-rated-one-sheet.jpg" alt="Isle of Dogs poster">
                                                                </img>
                                                            </a>
                                                            <div><a class="heading-style-1 heading-size-s heading__movie-carousel" href="/isle-of-dogs-205852/movie-overview">Isle of Dogs</a><time datetime="Fri, Mar 23">Fri, Mar 23</time></div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="fluid poster">
                                                            <a href="/ready-player-one-204139/movie-overview" class="visual-container">
                                                                <img class="poster-thumb-size-s visual-thumb" src="//images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/204139/RPO_new_MAIN_VERT_DOM_2764x.jpg" alt="Ready Player One poster">
                                                                </img>
                                                            </a>
                                                            <div><a class="heading-style-1 heading-size-s heading__movie-carousel" href="/ready-player-one-204139/movie-overview">Ready Player One</a><time datetime="Thu, Mar 29">Thu, Mar 29</time></div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="fluid poster">
                                                            <a href="/blockers-206654/movie-overview" class="visual-container">
                                                                <img class="poster-thumb-size-s visual-thumb" src="//images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/206654/Blockers-Full.jpg" alt="Blockers poster">
                                                                </img>
                                                            </a>
                                                            <div><a class="heading-style-1 heading-size-s heading__movie-carousel" href="/blockers-206654/movie-overview">Blockers</a><time datetime="Fri, Apr 6">Fri, Apr 6</time></div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="fluid poster">
                                                            <a href="/beirut-208658/movie-overview" class="visual-container">
                                                                <img class="poster-thumb-size-s visual-thumb" src="//images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/208658/BER_156_M20V31.jpg" alt="Beirut poster">
                                                                </img>
                                                            </a>
                                                            <div><a class="heading-style-1 heading-size-s heading__movie-carousel" href="/beirut-208658/movie-overview">Beirut</a><time datetime="Wed, Apr 11">Wed, Apr 11</time></div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="fluid poster">
                                                            <a href="/black-panther-202991/movie-overview" class="visual-container">
                                                                <img class="poster-thumb-size-s visual-thumb" src="//images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/202991/fan_postertwo_blackpanther_.jpg" alt="Black Panther poster">
                                                                </img>
                                                            </a>
                                                            <div><a class="heading-style-1 heading-size-s heading__movie-carousel" href="/black-panther-202991/movie-overview">Black Panther</a><time datetime="Fri, Feb 16">Fri, Feb 16</time></div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="fluid poster">
                                                            <a href="/tyler-perrys-acrimony-206776/movie-overview" class="visual-container">
                                                                <img class="poster-thumb-size-s visual-thumb" src="//images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/206776/Acrimony_1Sht_Payoff_Online.jpg" alt="Tyler Perry's Acrimony poster">
                                                                </img>
                                                            </a>
                                                            <div><a class="heading-style-1 heading-size-s heading__movie-carousel" href="/tyler-perrys-acrimony-206776/movie-overview">Tyler Perry's Acrimony</a><time datetime="Fri, Mar 30">Fri, Mar 30</time></div>
                                                        </div>
                                                    </li>
                                                </ol>
                                                <button onClick={this.deleteRow.bind(this, 'left')} class="icon style-none left js-flipper-left">Previous Films</button><button onClick={this.deleteRow.bind(this, 'right')} class="icon style-none right js-flipper-right">More Films</button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <button class="icon style-none right js-flipper-right">More Films</button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
