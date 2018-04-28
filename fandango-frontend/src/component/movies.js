import React,{Component} from 'react';
import Header from './headers';
import Footer from './footer';
import axios from 'axios';
import {Link} from 'react-router-dom';


class movies extends Component{
    constructor(props) {
        super(props);
        this.state = {
            movies : [],
        }
    }
    componentDidMount(){

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        axios('http://localhost:8900/movies', {
                method: 'get',
                mode: 'cors',
                headers: headers,
            })
            .then((response) => {
                this.setState({
                    movies : this.state.movies.concat(response.data)
                });
            });
      }
    nextDate(dayIndex) {
        var today = new Date();
        today.setDate(today.getDate() + (dayIndex - 1 - today.getDay() + 7) % 7 + 1);
        return today;
    }
    render(){
    let openingMovies = null, nowPlaying = null;
    let sunday = this.nextDate(0);
	console.log("Next Sunday : ", sunday);
	var today = new Date();
	console.log("Todays Date : ", today);
    let releaseDate= null;
    console.log("Resposne Data : ", this.state.movies);
	let openMovie = this.state.movies.map(movie => {
		releaseDate = movie.releaseDate;
		releaseDate = new Date(releaseDate);
		console.log("Release Date : ", releaseDate);
		if(releaseDate < sunday && releaseDate > today){
			openingMovies = (
                <li style = {{float : 'left', margin : '0 26px 20px 0', height : '200px', width : '125px', float : 'left'}} class="visual-item">
                    <Link to = {"/moviedetails/"+ movie._id}  style = {{background : '#000', display:'block', overflow : 'hidden', width : '100%'}} class="visual-container" >
                        <img data-src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/199925/images/masterrepository/fandango/199925/avengersinfinitywar-postera.jpg" class="visual-thumb" alt="Avengers: Infinity War showtimes and tickets" src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/199925/images/masterrepository/fandango/199925/avengersinfinitywar-postera.jpg"/>
                    </Link>
                    <div style = {{display : 'block', padding : '5px', background : '#fff'}} class="visual-detail">
                        <Link to = {"/moviedetails/"+ movie._id} style = {{fontSize : '20px', lineHeight : '20px', overflow : 'hidden', padding : '0 10px 0 0', maxHeight: '40px', whiteSpace: 'normal'}} class="visual-title dark" >
                            {movie.movieTitle}
                        </Link>
                        <span class="visual-sub-title">Opens Today</span>
                    </div>
                </li>
            );
        }else //if(releaseDate < today)
		{
            nowPlaying = (
					<div>
						<li style = {{float : 'left', margin : '0 26px 20px 0', height : '200px', width : '125px', float : 'left'}} class="visual-item">
                            <Link to = {"/moviedetails/"+ movie._id} style = {{background : '#000', display:'block', overflow : 'hidden', width : '100%'}} class="visual-container" >
								<img data-src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/199925/images/masterrepository/fandango/199925/avengersinfinitywar-postera.jpg" class="visual-thumb" alt="Avengers: Infinity War showtimes and tickets" src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/199925/images/masterrepository/fandango/199925/avengersinfinitywar-postera.jpg"/>
							</Link>
							<div style = {{display : 'block', padding : '5px', background : '#fff'}} class="visual-detail">
                                <Link to = {"/moviedetails/"+ movie._id} style = {{fontSize : '20px', lineHeight : '20px', overflow : 'hidden', padding : '0 10px 0 0', maxHeight: '40px', whiteSpace: 'normal'}} class="visual-title dark" >
									{movie.movieTitle}
								</Link>
								<span class="visual-sub-title">Opens Today</span>
							</div>
						</li>
					</div>
				)
        }
    });
        console.log("Movies : ", this.state.movies);
        let styleLI = {
            listStyleType: 'none',
            display: 'inline-block',
            height: '30px',
            border: '1px solid #ccc',
            textAlign: 'center',
            backgroundColor: '#fff',
            verticalAlign: 'middle',
            padding: '8px 10px',
            margin: '0 5px 20px 0',
            fontWeight : '700'
        }
       return ( 
        <div>
        <Header />
        <div id="page" role="main">
            <section class="subnav">
                <div class="row">
                    <div class="width-100">
                        <h3  style = {{color : 'white', fontSize : '35px'}} class="subnav__title heading-style-1 heading-size-xl timing-header">
                             MOVIES
                            <span class="subnav__title--accent">
                                NOW PLAYING
                                <span class="js-subnav__user-location"></span>
                            </span>
                        </h3>
                        <ul class="subnav__link-list">
                            <li class="subnav__link-item">
                                <a class="subnav__link subnav__link--active" href="/95101_movietimes">
                                    Now Playing
                                </a>
                            </li>
                            <li class="subnav__link-item">
                                <a class="subnav__link" href="/95101_movietimes?ticketedonly=true">
                                    Coming Soon 
                                </a>
                            </li>
                            <li class="subnav__link-item">
                                <a class="subnav__link" href="/95101_movietimes?mytheaters=true">
                                    Movie Genres
                                </a>
                            </li>
                            <li class="subnav__link-item">
                                <a class="subnav__link" href="/95101_movietimes?mytheaters=true">
                                    Top Box Office
                                </a>
                            </li>
                            <li class="subnav__link-item">
                                <a class="subnav__link" href="/95101_movietimes?mytheaters=true">
                                    At Home
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <br/><br/>
            <div style = {{width : '75%', marginLeft : '40px'} }class="large-9 columns">
                <div style = {{position : 'relative', top : '-20px'}} class="genre-menu tabs">
                    <h3 style = {{fontSize : '14px', fontFamily : 'proxima novs'}}class="heading-size-xs heading-style-3">Filter by Movie Genres</h3><br/>
                    <div style = {{height : '45px', overflow : 'hidden'}} class="filter-wrap">
                        <ul>
                            <li style = {styleLI}>
                                <a id="GenreName" href="http://www.fandango.com/moviesintheaters?GenreFilter=Action%2FAdventure">ACTION</a>
                            </li>
                        
                            <li style = {styleLI}>
                                <a id="GenreName" href="http://www.fandango.com/moviesintheaters?GenreFilter=Drama">DRAMA</a>
                            </li>
                        
                            <li style = {styleLI}>
                                <a id="GenreName" href="http://www.fandango.com/moviesintheaters?GenreFilter=Comedy">COMEDY</a>
                            </li>
                        
                            <li style = {styleLI}>
                                <a id="GenreName" href="http://www.fandango.com/moviesintheaters?GenreFilter=Family">KIDS</a>
                            </li>
                        
                            <li style = {styleLI}>
                                <a id="GenreName" href="http://www.fandango.com/moviesintheaters?GenreFilter=Horror">HORROR</a>
                            </li>
                        
                            <li style = {styleLI}>
                                <a id="GenreName" href="http://www.fandango.com/moviesintheaters?GenreFilter=Romance">ROMANCE</a>
                            </li>
                        
                            <li style = {styleLI}>
                                <a id="GenreName" href="http://www.fandango.com/moviesintheaters?GenreFilter=Sci-Fi%2FFantasy">SCI-FI</a>
                            </li>
                        
                            <li style = {styleLI}>
                                <a id="GenreName" href="http://www.fandango.com/moviesintheaters?GenreFilter=Animated">ANIMATED</a>
                            </li>
                        
                            <li style = {styleLI}>
                                <a id="GenreName" href="http://www.fandango.com/moviesintheaters?GenreFilter=Documentary">DOCUMENTARIES</a>
                            </li>
                        
                            <li style = {styleLI}>
                                <a id="GenreName" href="http://www.fandango.com/moviesintheaters?GenreFilter=Suspense%2FThriller">SUSPENSE</a>
                            </li>
                        
                            <li style = {styleLI}>
                                <a id="GenreName" href="http://www.fandango.com/moviesintheaters?GenreFilter=Indie">INDIE</a>
                            </li>
                        
                            <li style = {styleLI}>
                                <a id="GenreName" href="http://www.fandango.com/moviesintheaters?GenreFilter=Concert%2FSpecial%20Events">SPECIAL EVENTS</a>
                            </li>
                        
                            <li style = {styleLI}>
                                <a id="GenreName" href="http://www.fandango.com/moviesintheaters?GenreFilter=Western">WESTERN</a>
                            </li>
                        
                            <li style = {styleLI}>
                                <a id="GenreName" href="http://www.fandango.com/moviesintheaters?GenreFilter=Music%2FPerforming%20Arts">MUSIC/PERFORMING ARTS</a>
                            </li>      
                        </ul>
                    </div>
                </div>
                <div class="movie-ls-group">
                    <h2 style = {{color : '#4c4c4c', margin : '0 0 15px', padding : '0 30px', position : 'relative', textAlign : 'center'}} class="inline heading-style-stub heading-style-1 heading-size-l section-header">Opening This Week</h2>
                    <ul style = {{margin : '0 -30px 20px 0', overflow : 'auto', lifeStyle : 'none', height : '300px'}}>
                        {/*<li style = {{float : 'left', margin : '0 26px 20px 0', height : '200px', width : '125px', float : 'left'}} class="visual-item">
                            <a style = {{background : '#000', display:'block', overflow : 'hidden', width : '100%'}} class="visual-container" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">
                                <img data-src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/199925/images/masterrepository/fandango/199925/avengersinfinitywar-postera.jpg" class="visual-thumb" alt="Avengers: Infinity War showtimes and tickets" src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/199925/images/masterrepository/fandango/199925/avengersinfinitywar-postera.jpg"/>
                            </a>
                            <div style = {{display : 'block', padding : '5px', background : '#fff'}} class="visual-detail">
                                <a style = {{fontSize : '20px', lineHeight : '20px', overflow : 'hidden', padding : '0 10px 0 0', maxHeight: '40px', whiteSpace: 'normal'}} class="visual-title dark" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">
                                    Avengers: Infinity War
                                </a>
                                <span class="visual-sub-title">Opens Today</span>
                            </div>
                        </li>
                                            
                        <li style = {{float : 'left', margin : '0 26px 20px 0', height : '200px', width : '125px', float : 'left'}} class="visual-item">
                            <a style = {{background : '#000', display:'block', overflow : 'hidden', width : '100%'}} class="visual-container" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">
                                <img data-src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/209250/images/masterrepository/fandango/209250/disobedience2018.jpg" class="visual-thumb" alt="Disobedience (2018) showtimes and tickets" src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/209250/images/masterrepository/fandango/209250/disobedience2018.jpg"/>
                            </a>
                            <div style = {{display : 'block', padding : '5px', background : '#fff'}} class="visual-detail">
                                <a style = {{fontSize : '20px', lineHeight : '20px', overflow : 'hidden', padding : '0 10px 0 0', maxHeight: '40px', whiteSpace: 'normal'}} class="visual-title dark" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">
                                    Avengers: Infinity War
                                </a>
                                <span class="visual-sub-title">Opens Today</span>
                            </div>
                        </li>                   
                        <li style = {{float : 'left', margin : '0 26px 20px 0', height : '200px', width : '125px', float : 'left'}} class="visual-item">
                            <a style = {{background : '#000', display:'block', overflow : 'hidden', width : '100%'}} class="visual-container" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">
                                <img data-src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/209376/images/masterrepository/fandango/209376/kings-2017.jpg" class="visual-thumb" alt="Kings (2018) showtimes and tickets" src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/209376/images/masterrepository/fandango/209376/kings-2017.jpg"/>
                            </a>
                            <div style = {{display : 'block', padding : '5px', background : '#fff'}} class="visual-detail">
                                <a style = {{fontSize : '20px', lineHeight : '20px', overflow : 'hidden', padding : '0 10px 0 0', maxHeight: '40px', whiteSpace: 'normal'}} class="visual-title dark" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">
                                    Avengers: Infinity War
                                </a>
                                <span class="visual-sub-title">Opens Today</span>
                            </div>
                        </li>                          
                        <li style = {{float : 'left', margin : '0 26px 20px 0', height : '200px', width : '125px', float : 'left'}} class="visual-item">
    
                            <a style = {{background : '#000', display:'block', overflow : 'hidden', width : '100%'}} class="visual-container" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">
                                <img data-src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/210959/images/masterrepository/fandango/210959/thetestandtheartofthinking2018.jpg" class="visual-thumb" alt="The Test and the Art of Thinking showtimes and tickets" src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/210959/images/masterrepository/fandango/210959/thetestandtheartofthinking2018.jpg"/>
                            </a>
                            <div style = {{display : 'block', padding : '5px', background : '#fff'}} class="visual-detail">
                                <a style = {{fontSize : '20px', lineHeight : '20px', overflow : 'hidden', padding : '0 10px 0 0', maxHeight: '40px', whiteSpace: 'normal'}} class="visual-title dark" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">
                                    Avengers: Infinity War
                                </a>
                                <span class="visual-sub-title">Opens Today</span>
                            </div>
                        </li>                   
                        <li style = {{float : 'left', margin : '0 26px 20px 0', height : '200px', width : '125px', float : 'left'}} class="visual-item">
    
                            <a style = {{background : '#000', display:'block', overflow : 'hidden', width : '100%'}} class="visual-container" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">
                                <img data-src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/210959/images/masterrepository/fandango/210959/thetestandtheartofthinking2018.jpg" class="visual-thumb" alt="The Test and the Art of Thinking showtimes and tickets" src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/210959/images/masterrepository/fandango/210959/thetestandtheartofthinking2018.jpg"/>
                            </a>
                            <div style = {{display : 'block', padding : '5px', background : '#fff'}} class="visual-detail">
                                <a style = {{fontSize : '20px', lineHeight : '20px', overflow : 'hidden', padding : '0 10px 0 0', maxHeight: '40px', whiteSpace: 'normal'}} class="visual-title dark" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">
                                    Avengers: Infinity War
                                </a>
                                <span class="visual-sub-title">Opens Today</span>
                            </div>
                        </li>
                        <li style = {{float : 'left', margin : '0 26px 20px 0', height : '200px', width : '125px', float : 'left'}} class="visual-item">
    
                            <a style = {{background : '#000', display:'block', overflow : 'hidden', width : '100%'}} class="visual-container" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">
                                <img data-src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/210959/images/masterrepository/fandango/210959/thetestandtheartofthinking2018.jpg" class="visual-thumb" alt="The Test and the Art of Thinking showtimes and tickets" src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/210959/images/masterrepository/fandango/210959/thetestandtheartofthinking2018.jpg"/>
                            </a>
                            <div style = {{display : 'block', padding : '5px', background : '#fff'}} class="visual-detail">
                                <a style = {{fontSize : '20px', lineHeight : '20px', overflow : 'hidden', padding : '0 10px 0 0', maxHeight: '40px', whiteSpace: 'normal'}} class="visual-title dark" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">
                                    Avengers: Infinity War
                                </a>
                                <span class="visual-sub-title">Opens Today</span>
                            </div>
                        </li>*/}
                        {openingMovies}                    
                    </ul>
                </div>
                <div class="movie-ls-group">
                    <h2 style = {{color : '#4c4c4c', margin : '0 0 15px', padding : '0 30px', position : 'relative', textAlign : 'center'}} class="inline heading-style-stub heading-style-1 heading-size-l section-header">Now Playing</h2>
                    <ul style = {{margin : '0 -30px 20px 0', overflow : 'auto', lifeStyle : 'none', height : '300px'}}>
                        {/*<li style = {{float : 'left', margin : '0 26px 20px 0', height : '200px', width : '125px', float : 'left'}} class="visual-item">
                            <a style = {{background : '#000', display:'block', overflow : 'hidden', width : '100%'}} class="visual-container" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">
                                <img data-src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/199925/images/masterrepository/fandango/199925/avengersinfinitywar-postera.jpg" class="visual-thumb" alt="Avengers: Infinity War showtimes and tickets" src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/199925/images/masterrepository/fandango/199925/avengersinfinitywar-postera.jpg"/>
                            </a>
                            <div style = {{display : 'block', padding : '5px', background : '#fff'}} class="visual-detail">
                                <a style = {{fontSize : '20px', lineHeight : '20px', overflow : 'hidden', padding : '0 10px 0 0', maxHeight: '40px', whiteSpace: 'normal'}} class="visual-title dark" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">
                                    Avengers: Infinity War
                                </a>
                                <span class="visual-sub-title">Opens Today</span>
                            </div>
                        </li>
                                            
                        <li style = {{float : 'left', margin : '0 26px 20px 0', height : '200px', width : '125px', float : 'left'}} class="visual-item">
                            <a style = {{background : '#000', display:'block', overflow : 'hidden', width : '100%'}} class="visual-container" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">
                                <img data-src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/209250/images/masterrepository/fandango/209250/disobedience2018.jpg" class="visual-thumb" alt="Disobedience (2018) showtimes and tickets" src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/209250/images/masterrepository/fandango/209250/disobedience2018.jpg"/>
                            </a>
                            <div style = {{display : 'block', padding : '5px', background : '#fff'}} class="visual-detail">
                                <a style = {{fontSize : '20px', lineHeight : '20px', overflow : 'hidden', padding : '0 10px 0 0', maxHeight: '40px', whiteSpace: 'normal'}} class="visual-title dark" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">
                                    Avengers: Infinity War
                                </a>
                                <span class="visual-sub-title">Opens Today</span>
                            </div>
                        </li>                   
                        <li style = {{float : 'left', margin : '0 26px 20px 0', height : '200px', width : '125px', float : 'left'}} class="visual-item">
                            <a style = {{background : '#000', display:'block', overflow : 'hidden', width : '100%'}} class="visual-container" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">
                                <img data-src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/209376/images/masterrepository/fandango/209376/kings-2017.jpg" class="visual-thumb" alt="Kings (2018) showtimes and tickets" src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/209376/images/masterrepository/fandango/209376/kings-2017.jpg"/>
                            </a>
                            <div style = {{display : 'block', padding : '5px', background : '#fff'}} class="visual-detail">
                                <a style = {{fontSize : '20px', lineHeight : '20px', overflow : 'hidden', padding : '0 10px 0 0', maxHeight: '40px', whiteSpace: 'normal'}} class="visual-title dark" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">
                                    Avengers: Infinity War
                                </a>
                                <span class="visual-sub-title">Opens Today</span>
                            </div>
                        </li>                          
                        <li style = {{float : 'left', margin : '0 26px 20px 0', height : '200px', width : '125px', float : 'left'}} class="visual-item">
    
                            <a style = {{background : '#000', display:'block', overflow : 'hidden', width : '100%'}} class="visual-container" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">
                                <img data-src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/210959/images/masterrepository/fandango/210959/thetestandtheartofthinking2018.jpg" class="visual-thumb" alt="The Test and the Art of Thinking showtimes and tickets" src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/210959/images/masterrepository/fandango/210959/thetestandtheartofthinking2018.jpg"/>
                            </a>
                            <div style = {{display : 'block', padding : '5px', background : '#fff'}} class="visual-detail">
                                <a style = {{fontSize : '20px', lineHeight : '20px', overflow : 'hidden', padding : '0 10px 0 0', maxHeight: '40px', whiteSpace: 'normal'}} class="visual-title dark" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">
                                    Avengers: Infinity War
                                </a>
                                <span class="visual-sub-title">Opens Today</span>
                            </div>
                        </li>                   
                        <li style = {{float : 'left', margin : '0 26px 20px 0', height : '200px', width : '125px', float : 'left'}} class="visual-item">
    
                            <a style = {{background : '#000', display:'block', overflow : 'hidden', width : '100%'}} class="visual-container" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">
                                <img data-src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/210959/images/masterrepository/fandango/210959/thetestandtheartofthinking2018.jpg" class="visual-thumb" alt="The Test and the Art of Thinking showtimes and tickets" src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/210959/images/masterrepository/fandango/210959/thetestandtheartofthinking2018.jpg"/>
                            </a>
                            <div style = {{display : 'block', padding : '5px', background : '#fff'}} class="visual-detail">
                                <a style = {{fontSize : '20px', lineHeight : '20px', overflow : 'hidden', padding : '0 10px 0 0', maxHeight: '40px', whiteSpace: 'normal'}} class="visual-title dark" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">
                                    Avengers: Infinity War
                                </a>
                                <span class="visual-sub-title">Opens Today</span>
                            </div>
                        </li>
                                
                        <li style = {{float : 'left', margin : '0 26px 20px 0', height : '200px', width : '125px', float : 'left'}} class="visual-item">
    
                            <a style = {{background : '#000', display:'block', overflow : 'hidden', width : '100%'}} class="visual-container" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">
                                <img data-src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/210959/images/masterrepository/fandango/210959/thetestandtheartofthinking2018.jpg" class="visual-thumb" alt="The Test and the Art of Thinking showtimes and tickets" src="https://images.fandango.com/r1.0.444/ImageRenderer/168/250/redesign/static/img/default_poster.png/210959/images/masterrepository/fandango/210959/thetestandtheartofthinking2018.jpg"/>
                            </a>
                            <div style = {{display : 'block', padding : '5px', background : '#fff'}} class="visual-detail">
                                <a style = {{fontSize : '20px', lineHeight : '20px', overflow : 'hidden', padding : '0 10px 0 0', maxHeight: '40px', whiteSpace: 'normal'}} class="visual-title dark" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">
                                    Avengers: Infinity War
                                </a>
                                <span class="visual-sub-title">Opens Today</span>
                            </div>
                        </li>*/}
                        {nowPlaying}
                    </ul>
                </div>
            </div>
        </div>
        <Footer />
    </div>
       );
    }
}

export default movies;