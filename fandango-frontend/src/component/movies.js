import React,{Component} from 'react';
import '../css/movies.css';
class movies extends Component{

    render(){
       return ( 
       <div>
       <div className="page-header-container">
	        <div className="row">
		        <div className="large-12 columns">
			        <h1 className="page-header">
				            MOVIES <span className="page-header-emphasis">PLAYING</span>
			        </h1>
		        </div>
	        </div>
        </div>
<br></br>
<h3><b>Filter by Genres</b></h3>
<br></br>
<button type="button" className="btn btn-light space">Action</button>
<button type="button" className="btn btn-light space">Drama</button>
<button type="button" className="btn btn-light space">Comedy</button>
<button type="button" className="btn btn-light space">Kids</button>
<button type="button" className="btn btn-light space">Horror</button>
<button type="button" className="btn btn-light space">Romance</button>
<button type="button" className="btn btn-light space">Sci-fi</button>
<button type="button" className="btn btn-light space">Others</button>
<br></br>
<hr></hr>
<h3><b>Opening this Week</b></h3>

<br></br>
<ul class="visual-list movie-list">
                            
                                    <li className="visual-item">
                                        <a className="visual-container" href="http://www.fandango.com/traffik_208806/movieoverview">
                                            <img data-src="https://images.fandango.com/r1.0.431/ImageRenderer/168/250/redesign/static/img/default_poster.png/208806/images/masterrepository/fandango/208806/onesheetfinaltraffik.jpg" class="visual-thumb" alt="Traffik showtimes and tickets" src="https://images.fandango.com/r1.0.431/ImageRenderer/168/250/redesign/static/img/default_poster.png/208806/images/masterrepository/fandango/208806/onesheetfinaltraffik.jpg"/>
                                        </a>
                                    </li>
                        </ul>

<br></br>
<hr></hr>
<h3><b>Playing</b></h3>
<br></br>
<ul>
                        
                                <li class="col-lg-2 col-sm-1">
                                    <a class="visual-container" href="http://www.fandango.com/rampage2018_207628/movieoverview">
                                        <img src="https://images.fandango.com/r1.0.431/ImageRenderer/168/250/redesign/static/img/default_poster.png/207628/images/masterrepository/fandango/207628/rmpge_vert_online_teaser_dom_2764x4096_master.jpg" class="visual-thumb"/>
                                    </a>
                                    <div class="visual-detail">
                                        <a class="visual-title dark" href="http://www.fandango.com/rampage2018_207628/movieoverview">
                                            Rampage (2018)
                                        </a>
                                    </div>
                                </li>
                            
                                <li class="col-lg-2 col-sm-1">
                                    <a class="visual-container" href="http://www.fandango.com/readyplayerone_204139/movieoverview">
                                        <img src="https://images.fandango.com/r1.0.431/ImageRenderer/168/250/redesign/static/img/default_poster.png/204139/images/masterrepository/fandango/204139/rpo_new_main_vert_dom_2764x.jpg" class="visual-thumb"/>
                                    </a>
                                    <div class="visual-detail">
                                        <a class="visual-title dark" href="http://www.fandango.com/readyplayerone_204139/movieoverview">
                                            Ready Player One
                                        </a>
                                    </div>
                                </li>
                            
                                <li class="col-lg-2 col-sm-1">
                                    <a class="visual-container" href="http://www.fandango.com/isleofdogs_205852/movieoverview">
                                        <img src="https://images.fandango.com/r1.0.431/ImageRenderer/168/250/redesign/static/img/default_poster.png/205852/images/masterrepository/fandango/205852/iod-rated-one-sheet.jpg" class="visual-thumb"/>
                                    </a>
                                    <div class="visual-detail">
                                        <a class="visual-title dark" href="http://www.fandango.com/isleofdogs_205852/movieoverview">
                                            Isle of Dogs
                                        </a>
                                    </div>
                                </li>   

                                <li class="col-lg-2 col-sm-1">
                                    <a class="visual-container" href="http://www.fandango.com/isleofdogs_205852/movieoverview">
                                        <img src="https://images.fandango.com/r1.0.431/ImageRenderer/168/250/redesign/static/img/default_poster.png/205852/images/masterrepository/fandango/205852/iod-rated-one-sheet.jpg" class="visual-thumb"/>
                                    </a>
                                    <div class="visual-detail">
                                        <a class="visual-title dark" href="http://www.fandango.com/isleofdogs_205852/movieoverview">
                                            Isle of Dogs
                                        </a>
                                    </div>
                                </li>   

                                    <li class="col-lg-2 col-sm-1">
                                    <a class="visual-container" href="http://www.fandango.com/isleofdogs_205852/movieoverview">
                                        <img src="https://images.fandango.com/r1.0.431/ImageRenderer/168/250/redesign/static/img/default_poster.png/205852/images/masterrepository/fandango/205852/iod-rated-one-sheet.jpg" class="visual-thumb"/>
                                    </a>
                                    <div class="visual-detail">
                                        <a class="visual-title dark" href="http://www.fandango.com/isleofdogs_205852/movieoverview">
                                            Isle of Dogs
                                        </a>
                                    </div>
                                </li>   
             
                    </ul>
</div>
       );
    }
}

export default movies;