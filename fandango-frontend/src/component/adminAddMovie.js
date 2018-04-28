import React, {Component} from 'react';
import axios from 'axios';
import Head from './Header';
import '../css/admin.css';

export default class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieTitle          : "",
            movieCategory       : "",
            trailerLink         : "",
            movieDescription    : "",
            cast                : [],
            movieLength         : "",
            releaseDate         : "",
            movieRating         : "",
            moviePhoto          : "",
            screen              : ""
        }
    }
    createMovie = (events) => {
        var newData;
        events.preventDefault();
        var castAsString = this.state.cast.toString();
            var castNames=castAsString.split(", ");
            var reqCast=[];
            castNames.map((CastName)=>{
            reqCast.push({
                castName: CastName
            });

            newData = {
                movieTitle          : this.state.movieTitle,
                movieCategory       : this.state.movieCategory,
                trailerLink         : this.state.trailerLink,
                movieDescription    : this.state.movieDescription,
                cast                : reqCast,
                movieLength         : this.state.movieLength,
                releaseDate         : this.state.releaseDate,
                movieRating         : this.state.movieRating,
                moviePhoto          : this.state.moviePhoto,
                screen              : this.state.screen
            }
        });
        var url = 'http://localhost:8900/movie';
        axios(url, {
          method: 'POST',
          mode: 'cors',
          headers: {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
          },
          data: JSON.stringify(newData)
        })
    }

    updateMovie = (events) => {
        var newData;
        events.preventDefault();
        var castAsString = this.state.cast.toString();
            var castNames=castAsString.split(", ");
            var reqCast=[];
            castNames.map((CastName)=>{
            reqCast.push({
                castName: CastName
            });

            newData = {
                movieTitle          : this.state.movieTitle,
                movieCategory       : this.state.movieCategory,
                trailerLink         : this.state.trailerLink,
                movieDescription    : this.state.movieDescription,
                cast                : reqCast,
                movieLength         : this.state.movieLength,
                releaseDate         : this.state.releaseDate,
                movieRating         : this.state.movieRating,
                moviePhoto          : this.state.moviePhoto,
                screen              : this.state.screen
            }
        });
        var url = 'http://localhost:8900/movie/' + this.props.location.state.id;
        axios(url, {
          method: 'PUT',
          mode: 'cors',
          headers: {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
          },
          data: JSON.stringify(newData)
        })
    }
    
    componentDidMount(){
        if(this.props.location.state.id != "0") {

            var url = 'http://localhost:8900/movieById/' + this.props.location.state.id;
            axios(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type'  : 'application/json',
                'Accept'        : 'application/json'
            }
            }).then((res) => {

                var names=[];
                res.data.cast.map((obj)=>{
                    names.push(obj.castName);
                }); 
                this.setState({
                    movieTitle      : res.data.movieTitle, 
                    movieCategory   : res.data.movieCategory,
                    trailerLink     : res.data.trailerLink,
                    movieDescription: res.data.movieDescription,
                    cast            : names,
                    movieLength     : res.data.movieLength,
                    releaseDate     : res.data.releaseDate,
                    movieRating     : res.data.movieRating,
                    moviePhoto      : res.data.moviePhoto,
                    screen          : res.data.profileImage
            });
        }
        )
    }
    }
    handleChange = (events) => {
        if(events.target.name === "title"){
            this.setState({
                movieTitle : events.target.value
            });
        }
        //
        if(events.target.name === "genre"){
            this.setState({
                movieCategory : events.target.value
            });
        }
        //
        if(events.target.name === 'trailerLink'){
            this.setState({
                trailerLink: events.target.value
            });
        }
        //
        if(events.target.name === 'description'){
          this.setState({
            movieDescription: events.target.value
          });
        }
        //
        if(events.target.name === 'cast'){
            this.setState({
                cast: events.target.value
            });
        }
        //
        if(events.target.name === 'movieLength'){
            this.setState({
                movieLength: events.target.value
            });
        }
        //
        if(events.target.name === 'releaseDate'){
            this.setState({
                releaseDate: events.target.value
            });
        }

        //  moviePhoto
        if(events.target.name === 'moviePhoto'){
            this.setState({
                moviePhoto: events.target.value 
            });
        }
        // movieRating
        if(events.target.name === 'movieRating'){
            this.setState({
                movieRating: events.target.value
            });
        }
        // movieScreen   
        if(events.target.name === 'movieScreen'){
            this.setState({
                screen: events.target.value
            });
        }
    }

    handleSubmit = (events) => {
        
    }
    render() {
        let displayButton = "";
        if(this.props.location.state.id === "0") {
            displayButton=(<button type="button" id="submit" name="submit" className="btn btn-primary pull-right" onClick={this.createMovie.bind(this)}>Create Movie</button>);
        }
        else {
            displayButton=(<button type="button" id="submit" name="submit" className="btn btn-primary pull-right" onClick={this.updateMovie.bind(this)}>Update Movie</button>);
        }
        return(
            <div id="siteContainer" className="ticketBoxoffice">
                <Head />
                {/* <div className = "container">
                    <div className = "row">
                        <div className = "col-md-3">
                            <h1 className="text-center">Movie Image</h1>
                            <button className="btn pull-left btn-block">Update</button>
                        </div>
                    </div>
                </div> */}
                <br/>
                <div className="container" style={{width:"60%", border: "5px solid"}}> 

                <form>
                    <div className="form-group"> 
                        <label htmlFor="title" className="control-label">Title</label>
                        <input onChange = {this.handleChange} type="text" value={this.state.movieTitle} className="form-control" id="title" name="title" placeholder="Movie Title" required/>
                    </div>
                    <div className="form-group"> 
                        <label htmlFor="genre" className="control-label">Genre</label>
                        <input onChange = {this.handleChange} type="text" value={this.state.movieCategory} className="form-control" id="genre" name="genre" placeholder="Movie Genre, Comma Separated" required/>
                    </div>
                    <div className="form-group"> 
                        <label htmlFor="trailerLink" className="control-label">Trailer Link</label>
                        <input onChange = {this.handleChange} type="text" value={this.state.trailerLink} className="form-control" id="trailerLink" name="trailerLink" placeholder="Trailer Link" required/>
                    </div>
                    <div className="form-group">
                        <label className="control-label " htmlFor="description">Description</label>
                        <input onChange = {this.handleChange} value={this.state.movieDescription} className="form-control" cols="40" id="description" name="description" rows="10" required/>
                    </div>
                    <div className="form-group"> 
                        <label htmlFor="cast" className="control-label">Cast</label>
                        <input onChange = {this.handleChange} value={this.state.cast} type="text" className="form-control" id="cast" name="cast" placeholder="Cast, Comma Separated" required/>
                    </div>
                    <div className="form-group"> 
                        <label htmlFor="movieLength" className="control-label">Movie Length</label>
                        <input onChange = {this.handleChange} value={this.state.movieLength} type="text" className="form-control" id="movieLength" name="movieLength" placeholder="Movie Length" required/>
                    </div>
                    <div className="form-group"> 
                        <label htmlFor="releaseDate" className="control-label">Release Date</label>
                        <input onChange = {this.handleChange} value={this.state.releaseDate} type="text" className="form-control" id="releaseDate" name="releaseDate" placeholder="Release Date" required/>
                    </div>
                    <div className="form-group"> 
                        <label htmlFor="moviePhoto" className="control-label">Movie Photo</label>
                        <input onChange = {this.handleChange} value={this.state.moviePhoto} type="text" className="form-control" id="moviePhoto" name="moviePhoto" placeholder="Movie Photo" required/>
                    </div>
                    <div className="form-group"> 
                        <label htmlFor="movieRating" className="control-label">Movie Rating</label>
                        <input onChange = {this.handleChange} value={this.state.movieRating} type="text" className="form-control" id="movieRating" name="movieRating" placeholder="Movie Rating" required/>
                    </div>
                    <div className="form-group"> 
                        <label htmlFor="movieScreen" className="control-label">Movie Screen</label>
                        <input onChange = {this.handleChange} value={this.state.screen} type="text" className="form-control" id="movieScreen" name="movieScreen" placeholder="Movie Screen, Comma Separated" required/>
                    </div>
                    {displayButton}     

                    </form>							
                </div>
            </div>
        )
    }
}