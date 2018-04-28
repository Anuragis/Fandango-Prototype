import React,{Component} from 'react';
import axios from 'axios';
import '../css/admin.css';
class booking extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        bdate:"",
        bamount: 0,
        btax: 0,
        fname: "",
        lname: "",
        showtime: "",
        moviename: "",
        screenid: "",
        hallname: "",
        hallcity: "",
      }
       
    }

 
    componentDidMount(){

        
        var url = 'http://localhost:8900/booking/' + this.props.location.state.id;
        
        axios(url, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }).then((res) => {this.setState({bdate: res.data[0].bdate, 
           bamount: res.data[0].bamount,
           btax: res.data[0].btax,
          fname: res.data[0].fname,
          lname: res.data[0].lname,
          showtime: res.data[0].showtime,
          moviename: res.data[0].moviename,
          screenid: res.data[0].screenid,
          hallname: res.data[0].hallname,
          hallcity: res.data[0].hallcity,
          });
         
        }
          )
        
    }
    
    render() {  
      return (
        <div id="siteContainer" className="ticketBoxoffice">
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

         <h1><b>Booking Details</b></h1>
         <br></br>
                    <div className="container">
                        <div className="row">
                        <div className="col-xs-7"> 
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Booking Date</td>
                                <td>{this.state.bdate}</td>
                                
                                </tr>
                                <tr>
                                
                                <td>Booking Tax</td>
                                <td>{this.state.btax}</td>
                            
                                </tr>

                                 <tr>
                                
                                <td>Booking Amount</td>
                                <td>{this.state.bamount}</td>
                                </tr>

                                <tr>
                                <td>First Name</td>
                                <td>{this.state.fname}</td>
                                    
                                </tr>

                                <tr>
                                <td>Last Name</td>
                                <td>{this.state.lname}</td>
                                    
                                </tr>

                                <tr>
                                <td>Show Time</td>
                                <td>{this.state.showtime}</td>
                                    
                                </tr>


                                <tr>
                                <td>Movie Name</td>
                                <td>{this.state.moviename}</td>
                                    
                                </tr>

                                <tr>
                                <td>Screen Id</td>
                                <td>{this.state.screenid}</td>
                                    
                                </tr>

                                <tr>
                                <td>Hall Name</td>
                                <td>{this.state.hallname}</td>
                                    
                                </tr>

                                

                                <tr>
                                <td>City</td>
                                <td>{this.state.hallcity}</td>
                                    
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                    </div>
        </div>
      )
    }
}


export default booking;