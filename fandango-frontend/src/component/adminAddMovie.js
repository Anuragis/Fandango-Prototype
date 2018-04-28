import React, {Component} from 'react';
import axios from 'axios';
import Head from './gauravHeader';
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
    componentDidMount(){

        if(this.props.location.state.id!="0"){
        var url = 'http://localhost:8900/movieById/' + this.props.location.state.id;
        
        axios(url, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }).then((res) => {

            console.log('res', res);
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
            movieRating     : res.data.phoneNumber,
            moviePhoto      : res.data.moviePhoto,
            screen          : res.data.profileImage
        });
            console.log("Response",res);
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
  
        if(events.target.name === "genre"){
            this.setState({
                movieCategory : events.target.value
            });
        }
  
        if(events.target.name === 'trailerLink'){
            this.setState({
                trailerLink: events.target.value
            });
        }
  
        if(events.target.name === 'description'){
          this.setState({
            movieDescription: events.target.value
          });
        }
        if(events.target.name === 'cast'){
            this.setState({
                cast: events.target.value
            });
        }
        if(events.target.name === 'movieLength'){
            this.setState({
                movieLength: events.target.value
            });
        }
        if(events.target.name === 'releaseDate'){
            this.setState({
                releaseDate: events.target.value
            });
        }
        if(events.target.name === 'moviePhoto'){
            this.setState({
                moviePhoto: events.target.value
            });
        }
        if(events.target.name === 'movieScreen'){
            this.setState({
                screen: events.target.value
            });
        }
        if(events.target.name === 'movieRating'){
            this.setState({
                movieRating: events.target.value
            });
        }
        if(events.target.name === 'movieScreen'){
            this.setState({
                moviePhoto: events.target.value
            });
        }
    }

    handleSubmit = (events) => {
        events.preventDefault();

        var castNames=this.state.cast.trim().split(", ");
        console.log("Split Array : ", castNames);
        var reqCast=[];
        castNames.map((CastName)=>{
            reqCast.push({
                castName: CastName
            });
        });
        console.log("Split Array : ", reqCast);
        const newData = {
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
        console.log("New Data : ", newData);
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
    render() {
        return(
            <div>
                <Head />
                <div style={{textAlign : 'center'}}>
                    <h3>Add Movie</h3>
                </div>
                <div className="container" style={{width:"60%", border: "5px solid"}}> 

                <form onSubmit = {this.handleSubmit.bind(this)}>
                    <div class="form-group"> 
                        <label for="title" class="control-label">Title</label>
                        <input onChange = {this.handleChange} type="text" value={this.state.movieTitle} class="form-control" id="title" name="title" placeholder="Movie Title"/>
                    </div>
                    <div class="form-group"> 
                        <label for="genre" class="control-label">Genre</label>
                        <input onChange = {this.handleChange} type="text" value={this.state.movieCategory} class="form-control" id="genre" name="genre" placeholder="Movie Genre, Comma Separated"/>
                    </div>
                    <div class="form-group"> 
                        <label for="trailerLink" class="control-label">Trailer Link</label>
                        <input onChange = {this.handleChange} type="text" value={this.state.trailerLink} class="form-control" id="trailerLink" name="trailerLink" placeholder="Trailer Link"/>
                    </div>
                    <div class="form-group">
                        <label class="control-label " for="description">Description</label>
                        <input onChange = {this.handleChange} value={this.state.movieDescription} class="form-control" cols="40" id="description" name="description" rows="10"/>
                    </div>
                    <div class="form-group"> 
                        <label for="cast" class="control-label">Cast</label>
                        <input onChange = {this.handleChange} value={this.state.cast} type="text" class="form-control" id="cast" name="cast" placeholder="Cast, Comma Separated"/>
                    </div>
                    <div class="form-group"> 
                        <label for="movieLength" class="control-label">Movie Length</label>
                        <input onChange = {this.handleChange} value={this.state.movieLength} type="text" class="form-control" id="movieLength" name="movieLength" placeholder="Movie Length"/>
                    </div>
                    <div class="form-group"> 
                        <label for="releaseDate" class="control-label">Release Date</label>
                        <input onChange = {this.handleChange} value={this.state.releaseDate} type="text" class="form-control" id="releaseDate" name="releaseDate" placeholder="Release Date"/>
                    </div>
                    <div class="form-group"> 
                        <label for="moviePhoto" class="control-label">Movie Photo</label>
                        <input onChange = {this.handleChange} value={this.state.movieRating} type="text" class="form-control" id="moviePhoto" name="moviePhoto" placeholder="Movie Photo"/>
                    </div>
                    <div class="form-group"> 
                        <label for="movieRating" class="control-label">Movie Rating</label>
                        <input onChange = {this.handleChange} value={this.state.moviePhoto} type="text" class="form-control" id="movieRating" name="movieRating" placeholder="Movie Rating"/>
                    </div>
                    <div class="form-group"> 
                        <label for="movieScreen" class="control-label">Movie Screen</label>
                        <input onChange = {this.handleChange} value={this.state.screen} type="text" class="form-control" id="movieScreen" name="movieScreen" placeholder="Movie Screen, Comma Separated"/>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Add New Movie</button>
                    </div>     

                    </form>							
                </div>
            </div>
        )
    }
}