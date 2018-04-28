import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Head from './gauravHeader';
import MovieBookings from './adminMovieBookings';
export default class AdminMovieDash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies : []
        }

    }
    componentDidMount(){
        this.state.start=new Date();
        console.log("started");
        axios('http://localhost:8900/movies', {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }).then((res) => {
          this.setState({movies: res.data});
          //console.log(this.state.users);
        })
    }
    deleteMovie = (id) => {
        var url = 'http://localhost:8900/movie/' + id;
        axios(url, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
            
        }).then((res) => {
            var array=[];
            this.state.movies.map(function(key){
                if(key._id!==id){
                    array.push(key);
                    }
                });

            this.setState({
                movies:array
            });
            console.log(res);
        })
    }

    render() {
        return(
            <div>
                <Head />
                <br/>
                <br/>
                <Link to={{pathname:"/addmovie", state:{id: "0"}}}  className= "btn btn-primary buttonAlign" style={{textDecoration:'none',color:'white'}}>Add Movie</Link>
                <div className="container">  
                    <h3><b>List of Movies</b></h3>   
                    <table className="table table-striped">
                    <thead>
                        <tr className="headerBg">
                            <th>#</th>
                            <th>Movie Name</th>
                            <th>Genre</th>
                            <th>Release Date</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody> 
                    {  
                        this.state.movies.map((movie, id=0) => {
                        
                        return(
                            <tr key={movie._id}>
                                <td>{id}</td>
                                <td>
                                    <Link to={"/moviebookings"}>
                                        {movie.movieTitle}
                                    </Link>
                                </td>
                                <td>{movie.movieCategory}</td>
                                <td>{movie.releaseDate}</td>
                                <td>
                                    <Link to={{pathname:"/addmovie", state:{id: movie._id}}}><span className="glyphicon glyphicon-pencil"></span></Link>
                                </td>
                                <td>
                                <span className="glyphicon glyphicon-remove" onClick={this.deleteMovie.bind(this, movie._id)}></span>
                                </td>
                            </tr>
                        )
                })}
                    </tbody>
                </table>
               </div>
            </div>
        )
    }
}