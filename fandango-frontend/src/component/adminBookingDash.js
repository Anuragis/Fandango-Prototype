import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../css/admin.css';
//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class booking extends Component{

    constructor(props){
        super(props);
        this.state = {  
            bookings: [],
        
        }
    }
    componentDidMount(){
        this.state.start=new Date();
        console.log("started");
        axios('http://localhost:8900/bookings', {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }).then((res) => {
          this.setState({bookings: res.data});
        
        })
    }

    render(){
        return(
            <div >
            <div id="headerContainer" class="purchase detail on-order" name="HeaderContainer">
                <div id="headerPurchase">
                    <div className="commonContainer"> 
                        <div id="logo">
                            <a href="http://www.fandango.com/" title="Click to go to Fandango homepage">Fandango Home</a>
                        </div>
                        <div id="bannerMessage">You're a guaranteed ticket away from the perfect movie night.</div>
                    </div>
                </div>
            </div>
                              
                 <div className="container">  

                  <h3><b>List of Bookings</b></h3>   
                <table className="table table-striped">
            <thead>
              <tr className="headerBg">
                <th>#</th>
                <th>User Name</th>
                <th>Booking Date</th>
                <th>Movie Name</th>
                <th>Hall Name</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
                
                {  
                    this.state.bookings.map((booking, id=0) => {
                    
                    return(
                        <tr key={booking._id}>
                            <td>{id}</td>
                            <td>{booking.fname}</td>
                            <td>{booking.bdate}</td>
                            <td>{booking.moviename}</td>
                            <td>{booking.hallname}</td>
                            {/*<td>
                              <span className="glyphicon glyphicon-pencil"><Link to="/user"></Link></span>
                            </td>*/}
                            <td>
                                <Link to={{pathname:"/viewbooking", state:{id: booking._id}}}><span className="glyphicon glyphicon-option-horizontal"></span></Link>
                            </td>
                        </tr>
                    )
                
                })}
               


            </tbody>
</table>
               </div>
            </div>
        );
    }
}

export default booking;