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
            bookingscpy:[],
            moviename:"",
            hallname:"",
            revenue:0,
            date:"",
            month:"",
            year:""
        
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmitForRevenue=this.handleSubmitForRevenue.bind(this);
        this.handleSubmitForSearch=this.handleSubmitForSearch.bind(this);

    }
    componentDidMount(){
        this.state.start=new Date();
        console.log("started");
        var url='http://localhost:8900/bookings';

        if(JSON.parse(localStorage.getItem("userid").userType==="user")){
            url="http://localhost:8900/booking/"+JSON.parse(localStorage.getItem("userid")._id);
        }
        axios(url, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }).then((res) => {
          this.setState({bookings: res.data,
            bookingscpy:res.data});
        
        })
    }

    handleChange = (events) => {

        console.log("Here", events.target.name);
        if(events.target.name === "hallname"){
            this.setState({
                ...this.state,
                hallname : events.target.value.trim()
            });
           
        }

        if(events.target.name === "moviename"){
            this.setState({
                ...this.state,
                moviename : events.target.value.trim()
            });    
        }

        if(events.target.name === "date"){
            this.setState({
                ...this.state,
                date : events.target.value.trim(),
                bookings:this.state.bookingscpy
            });    
        }

        if(events.target.name === "month"){
            this.setState({
                ...this.state,
                month : events.target.value.trim(),
                bookings:this.state.bookingscpy
            });    
        }

        if(events.target.name === "year"){
            this.setState({
                ...this.state,
                year : events.target.value,
                bookings:this.state.bookingscpy
            });    
        }
    }

    handleSubmitForRevenue(events){
         events.preventDefault();
        var amt=0;
        if(this.state.hallname=="" && this.state.moviename!=""){
            let movieName=this.state.moviename;
            this.state.bookings.map(function(booking){
                if(booking.moviename.toUpperCase()===movieName.toUpperCase()){
                    amt+=booking.bamount;
                }
            });
        }else if(this.state.moviename==="" && this.state.hallname!==""){

            let hallName=this.state.hallname;
            this.state.bookings.map(function(booking){
                if(booking.hallname.toUpperCase()===hallName.toUpperCase()){
                    amt+=booking.bamount;
                }
            });
        }else if(this.state.moviename!=="" && this.state.hallname!==""){
            let movieName=this.state.moviename;
            let hallName=this.state.hallname;
            this.state.bookings.map(function(booking){
                if((booking.hallname.toUpperCase()===hallName.toUpperCase()) && (booking.moviename.toUpperCase()===movieName.toUpperCase())){
                    amt+=booking.bamount;
                }
            });
        }

        this.setState({
            revenue:amt
        });
    }

    handleSubmitForSearch(events){
        events.preventDefault();
        let newBookings=[];
        this.state.bookingscpy.map(function(booking){
               newBookings.push(booking);
        });
 
       if(this.state.date!==""){
        let query=this.state.date;
        
         newBookings=[];
           this.state.bookingscpy.map(function(booking){
               var date=new Date(booking.bdate);
               var month=date.getMonth()+1;
               var bdate1= date.getFullYear()+"-"+month+"-"+date.getDate();
               var bdate2= date.getFullYear()+"-0"+month+"-"+date.getDate();
              if(bdate1==query||bdate2==query){
                  newBookings.push(booking);
               }
           });
        }else if(this.state.month!=="" && this.state.year===""){
            
            let month=this.state.month;
            newBookings=[];

            this.state.bookingscpy.map(function(booking){
                var date=new Date(booking.bdate);
                var bdate1= date.getMonth()+1;
                if(bdate1==month|| bdate1+"0"==month){
                   newBookings.push(booking);
                }
            });
        }else if(this.state.month==="" && this.state.year!==""){
            let year=this.state.year;
            newBookings=[];

            this.state.bookingscpy.map(function(booking){
                var date=new Date(booking.bdate);
                var bdate1= date.getFullYear();
                if(bdate1==year|| bdate1===year){
                   newBookings.push(booking);
                }
            });
        }else if(this.state.month!=="" && this.state.year!==""){
            let year=this.state.year;
            let month=this.state.month;
            newBookings=[];
        
            this.state.bookingscpy.map(function(booking){
                var date=new Date(booking.bdate);
                var bdate1= date.getFullYear();
                var bdate2= date.getMonth()+1;
                if((bdate2==month || bdate2+0===month) && (bdate1===year ||bdate1==year )){
                   newBookings.push(booking);
                }
            });
        }
        this.setState({
            bookings:newBookings
        });

    }

    render(){
        let showFilter;
        if(JSON.parse(localStorage.getItem("userid")).userType==="admin"){
            showFilter=(<div><h4 className="filterAlign"><b>Revenue: ${this.state.revenue}</b></h4>
        <table className="filterAlign">
             <tr>
                 <form onSubmit = {this.handleSubmitForRevenue}> 
                  <td>   <input type="text"  name="moviename" value={this.state.moviename} onChange = {this.handleChange}   placeholder="Enter Movie Name"/></td>
                  <td>   <input type="text"  name="hallname" value={this.state.hallname} onChange = {this.handleChange}   placeholder="Enter Hall Name"/></td>
                   <td>  <button className="btn btn-lg btn-primary" type="submit">Show</button></td>
              </form>
              </tr>
              <tr>
                 <form onSubmit = {this.handleSubmitForSearch}> 
                  <td>   <input type="text"  name="date" value={this.state.date} onChange = {this.handleChange}   placeholder="Enter Date"/></td>
                  <td>   <input type="text"  name="month" value={this.state.month} onChange = {this.handleChange}   placeholder="Enter Month"/></td>
                  <td>   <input type="text"  name="year" value={this.state.year} onChange = {this.handleChange}   placeholder="Enter Year"/></td>
                   <td>  <button className="btn btn-lg btn-primary" type="submit">Search</button></td>
              </form>
              </tr>    
       </table></div>  );}
        else{
            showFilter=(<div></div>);
       }
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
                    {showFilter}
                  
                   
                 
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