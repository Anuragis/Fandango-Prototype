/**
 * This component implements the functionality that enables the admin to see all the bookings of a particular movie and cancel
 * bookings as required. It also displays the total revenue of the movie clicked.
 * 
 * How to implement:
 * 1. Click on the name of a movie on Admin Movie Dashboard.
 * 2. Fetch all the bookings done on that movie and display it in a tabular form.
 * 3. 
 */

import React, {Component} from 'react';
import axios from 'axios';
import Head from './Header';
import '../css/admin.css';
export default class AdminViewMovieRevenue extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookings : [],
            revenue:0
           
        }
    }

    componentDidMount() {
        console.log("started");
        axios('http://localhost:8900/bookingByMovieId/'+localStorage.getItem('movieClicked'), {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }).then((res) => {
          this.setState({bookings: res.data,
        bookingscpy:res.data});
            let amt=0;
            this.state.bookings.map(function(booking){
                amt+=booking.bamount;
            });
            this.setState({revenue: amt});
        });

        
    }

    deleteBooking(_id) {
        console.log("delete",_id);
        var bookingObj = this.state.bookings.find(function (obj) { return obj._id === _id; });
        console.log("bookingObj",bookingObj);
        axios('http://localhost:8900/booking/'+bookingObj._id, {
          method: 'DELETE',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }).then((res) => {
            var array=[];
            this.state.bookings.map(function(key){
                if(key._id!==_id){
                    array.push(key);
                    }
                });

            this.setState({
                bookings:array
            });
          
        });
        let updateHall = {
            moviename: bookingObj.moviename,
            screenID: bookingObj.screenid,
            hallname: bookingObj.hallname,
            seatsbooked: bookingObj.seatsbooked
        }
        axios('http://localhost:8900/hall/' + bookingObj.hallname, {
            method: 'put',
            mode: 'cors',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
            data: (updateHall)
        })
        .then((res) => {
            console.log("hall update res",res);
        })
    }


    render(){
        return(
            <div>
                <Head />
                <br/>
                <br/>
                <div className="container">  
                    <h3><b>Bookings for {localStorage.getItem('movieClicked')} </b></h3>
              
                    <h3 className="buttonAlign"><b>Revenue:${this.state.revenue}</b></h3>      
                    <table className="table table-striped">
                        <thead>
                            <tr className="headerBg">
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Show Time</th>
                                <th>Hall Name</th>
                                <th>Hall City</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody> 
                        {  
                            this.state.bookings.map((booking, id=1) => {
                            
                            return(
                                
                                
                                <tr key={booking._id}>
                                    <td>{id}</td>
                                    <td>{booking.fname}</td>
                                    <td>{booking.lname}</td>
                                    <td>{booking.showtime}</td>
                                    <td>{booking.hallname}</td>
                                    <td>{booking.hallcity}</td>
                                    <td>
                                        <span className="glyphicon glyphicon-remove" onClick={this.deleteBooking.bind(this, booking._id)}></span>
                                    </td>
                                </tr>
                            )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}