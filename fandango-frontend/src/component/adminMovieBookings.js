import React, {Component} from 'react';
import axios from 'axios';
export default class MovieBookings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    componentDidMount(){
        var url = 'http://localhost:8900/bookingByMovieId/' + this.props.location.state.name;
        axios(url, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type'  : 'application/json',
            'Accept'        : 'application/json'
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
    render() {
        return(
            <h3>
                {this.props.params.testvalue}
            </h3>
        )
    }
}
