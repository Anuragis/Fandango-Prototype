import React, {Component} from 'react';
import Head from './gauravHeader';
export default class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return(
            <div>
                <Head />
                <div style={{textAlign : 'center'}}>
                    <h3>Add Movie</h3>
                </div>
                <div className="container" style={{width:"60%", border: "5px solid"}}> 

                <form>
                    <div class="form-group"> 
                        <label for="title" class="control-label">Title</label>
                        <input type="text" class="form-control" id="title" name="title" placeholder="Movie Title"/>
                    </div>
                    <div class="form-group"> 
                        <label for="genre" class="control-label">Genre</label>
                        <input type="text" class="form-control" id="genre" name="genre" placeholder="Movie Genre, Comma Separated"/>
                    </div>
                    <div class="form-group"> 
                        <label for="trailerLink" class="control-label">Trailer Link</label>
                        <input type="text" class="form-control" id="trailerLink" name="trailerLink" placeholder="Trailer Link"/>
                    </div>
                    <div class="form-group">
                        <label class="control-label " for="description">Description</label>
                        <textarea class="form-control" cols="40" id="description" name="description" rows="10"></textarea>
                    </div>
                    <div class="form-group"> 
                        <label for="cast" class="control-label">Cast</label>
                        <input type="text" class="form-control" id="cast" name="cast" placeholder="Cast, Comma Separated"/>
                    </div>
                    <div class="form-group"> 
                        <label for="movieLength" class="control-label">Movie Length</label>
                        <input type="text" class="form-control" id="movieLength" name="movieLength" placeholder="Movie Length"/>
                    </div>
                    <div class="form-group"> 
                        <label for="releaseDate" class="control-label">Release Date</label>
                        <input type="text" class="form-control" id="releaseDate" name="releaseDate" placeholder="Release Date"/>
                    </div>
                    <div class="form-group"> 
                        <label for="moviePhoto" class="control-label">Movie Photo</label>
                        <input type="text" class="form-control" id="moviePhoto" name="moviePhoto" placeholder="Movie Photo"/>
                    </div>
                    <div class="form-group"> 
                        <label for="movieScreen" class="control-label">Movie Screen</label>
                        <input type="text" class="form-control" id="movieScreen" name="movieScreen" placeholder="Movie Screen, Comma Separated"/>
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