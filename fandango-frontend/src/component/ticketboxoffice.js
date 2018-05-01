import React from 'react';
import {Link} from 'react-router-dom';
import '../css/ticketboxoffice.css';
import axios from 'axios';

export default class ticketboxoffice extends React.Component {
    constructor(props) {
        super();
        this.state = {
            totalTickets: 0,
            totalSum: 0,
            row1Sum: 0,
            row2Sum: 0,
            row3Sum: 0,
            movieHall: null,
            elapsed: 0,
            start:new Date(),
            count: 0
        }
        this.ticketNumberChange = this.ticketNumberChange.bind(this);
        this.HandleState = this.HandleState.bind(this);
        this.tick=this.tick.bind(this);
        this.handleSubmitForTime=this.handleSubmitForTime.bind(this);
        this.incrementCount=this.incrementCount.bind(this);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }
    
    tick(){
        this.setState({...this.state,elapsed: new Date() - this.state.start});
    }

    handleSubmitForTime(){
        let userDetails = JSON.parse(localStorage.getItem('userid'));
        var elapsed = Math.round(this.state.elapsed / 100);
        var seconds = (elapsed / 10).toFixed(1);  
        console.log("Inside Time ");
        //alert("Page Count Value : " + this.state.count);
        var url = 'http://localhost:8900/log/';
        axios(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: JSON.stringify({
                time: seconds,
                page : 'ticketbooking',
                pageclick : this.state.count,
                hallticketcount:0,
                movierating:0,
                movie : "",
                movieclick : 0,
                fname : userDetails.fName,
                lname : userDetails.lName,
                state : "CA",
                city : "New York",
                hall : "",
                hallbooking:0,
                moviebooking:0,
                bookingdate:""

            })
            
            
        }).then((res) => {
            console.log("Response sent");
        });

    }

    incrementCount = () => {
        
        this.setState(
            {...this.state, count: this.state.count + 1 }
        );
        //alert("Count Value : " + this.state.count);
    };

    componentWillMount() {
        this.setState({
            movieHall: JSON.parse(localStorage.getItem('movieHall'))
        })
    }

    ticketNumberChange = (events, heading) => {
        console.log("changed");
        if(heading=="General") {
            let newTo = Number(this.state.row2Sum+this.state.row3Sum) + Number(events.target.value)*this.state.movieHall.hallPrice;
            let rsum = (Number(events.target.value)*this.state.movieHall.hallPrice);
            let newNum = Number(this.state.totalTickets) + Number(events.target.value) - Number(this.state.row1Sum)/this.state.movieHall.hallPrice;
            this.setState({
                totalSum: newTo, row1Sum: rsum, totalTickets: newNum
            })
        }
        else if (heading=="Student") {
            console.log("events",events.target.value);
            let newTo = Number(this.state.row1Sum+this.state.row3Sum) + Number(events.target.value)*Math.floor(this.state.movieHall.hallPrice/2);
            let rsum = (Number(events.target.value)*Math.floor(this.state.movieHall.hallPrice/2));
            let newNum = Number(this.state.totalTickets) + Number(events.target.value) - Number(this.state.row2Sum)/Math.floor(this.state.movieHall.hallPrice/2);
            console.log("Student", newTo);
            console.log("StudentSum", rsum);
            this.setState({
                totalSum: newTo, row2Sum: rsum, totalTickets: newNum
            })
        }
        else {
            let newTo = Number(this.state.row2Sum+this.state.row1Sum) + Number(events.target.value)*Math.floor(this.state.movieHall.hallPrice/2);
            let rsum = (Number(events.target.value)*Math.floor(this.state.movieHall.hallPrice/2));
            let newNum = Number(this.state.totalTickets) + Number(events.target.value) - Number(this.state.row3Sum)/Math.floor(this.state.movieHall.hallPrice/2);
            this.setState({
                totalSum: newTo, row3Sum: rsum, totalTickets: newNum
            })
        }
    }

    HandleState = () => {
        localStorage.setItem('ticketBoxOfficeState', JSON.stringify({totalTickets: this.state.totalTickets,
            totalSum: this.state.totalSum,
            row1Sum: this.state.row1Sum,
            row2Sum: this.state.row2Sum,
            row3Sum: this.state.row3Sum}));
        this.handleSubmitForTime();
    }

    componentDidMount(){
        this.timer = setInterval(this.tick, 50);
    }

    render() {

        const styleborder = {
            border:'0px'
        }
        const ticketRow = (heading) => {
            let pPerTic = Math.floor(this.state.movieHall.hallPrice/2);
            let rowTo;
            if(heading=="General") {
                pPerTic = this.state.movieHall.hallPrice;
                rowTo = "$"+this.state.row1Sum+".00";
            }
            else if (heading=="Student") {
                rowTo = "$"+this.state.row2Sum+".00";
            }
            else {
                rowTo = "$"+this.state.row3Sum+".00";
            }
            return(
                <tr>
                    <th className="ticketType">
                        {heading}
                    </th>
                    <td className="numberofTickets">
                        <select name="ticketNumber" id="AreaRepeater_TicketRepeater_0_quantityddl_0" tabindex="1" className="tb-qtyDropDown" onChange={(e)=>this.ticketNumberChange(e, heading)}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>     
                    </td>
                    <td className="timesX">x</td>
                    <td className="pricePerTicket">${pPerTic}.00</td>
                    <td className="equals">=</td>
                    <td className="tb-rowTotal"><input name="AreaRepeater$ctl00$TicketRepeater$ctl00$ItemTotal" type="text" id="AreaRepeater_TicketRepeater_0_ItemTotal_0" style={styleborder} className="tb-sub" size="8" readonly="readonly" tabindex="-1" value={rowTo}/></td>
                </tr>
            );
        }
        return (
            <div id="siteContainer" className="ticketBoxoffice">
                <div id="headerContainer" class="purchase detail on-order" name="HeaderContainer">
                    <div id="headerPurchase">
                        <div className="commonContainer"> 
                            <div id="logo">
                                <a href="" title="Click to go to Fandango homepage">Fandango Home</a>
                            </div>
                            <div id="bannerMessage">You're a guaranteed ticket away from the perfect movie night.</div>
                        </div>
                    </div>
                </div>
                <div id="container" className="commonContainer">
                    <div className="row">
                        <div id="heading" className="main">
                                <h1 className="tb-section-header inline">Checkout</h1> 
                                <ul className="breadcrumb">
                                    <li className="tickets complete"><i className="icon"></i>Tickets</li> 
                                    <li className="payment "><i className="icon"></i>Payment</li> 
                                    <li className="confirmation "><i className="icon"></i>Confirmation</li> 
                                </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="main">
                            <div className="module-standard">
                                <div id="params">
                                    <input name="RowCountHidden" type="hidden" id="RowCountHidden" value="221149586"/>
                                    <input name="MovieDetailIdHidden" type="hidden" id="MovieDetailIdHidden" value="209375"/>
                                    <input name="TmsIdHidden" type="hidden" id="TmsIdHidden" value="AAFQQ"/>
                                    <input name="ShowDateHidden" type="hidden" id="ShowDateHidden" value="4/19/2018 9:45:00 PM"/>
                                    <input name="ShowTimeHidden" type="hidden" id="ShowTimeHidden"/>
                                    <input name="ShowTimeListHidden" type="hidden" id="ShowTimeListHidden"/>
                                </div>
                                <section className="newShowtimeContainer">
                                    <a href="">Select new showtime</a>
                                </section>
                                <section onClick={this.incrementCount}>
                                    <h2 className="tb-header-secondary">HOW MANY TICKETS?</h2>
                                    <div className="reservedMessage">You can request up to 9 reserved seats per transaction.</div>
                                    <table className="section tb-quantityTable">
                                        <tbody className="ticketTypeTable" id="Reserved"> 
                                            {ticketRow("General")}
                                            {ticketRow("Student")}
                                            {ticketRow("Child/Senior")}
                                        </tbody>
                                    </table>
                                </section>
                                <div class="tb-buttonContainer">
                                    <Link onClick={this.HandleState} id="NewCustomerCheckoutButton" type="button" class="tb-button primary medium" to="/transaction/seatpicker">Continue to Seat Selection</Link>                 
                                </div>
                                <section class="tb-offers">
                                    <h3 class="tb-offerHeading">For Fandango VIPs</h3>
                                    <span class="offer-info">
                                        <strong>EARN 150 VIP+ POINTS</strong> per ticket. More points = more movies on us.
                                        <span class="disclaimer"> </span>
                                    </span>
                                </section>
                            </div>
                        </div>
                        <div class="side">                   
                            <div class="module-standard module-timer collapseEmpty"> 
                                <div id="timer" class="remove">
                                    <span class="timerText">Time to complete your order: </span>
                                    <span class="countdown" id="countdownTimer">6:41</span>
                                </div>
                            </div>
                            <div class="module-standard">  
                                <div id="movieTicketSummary"> 
                                    <div class="moviePoster">
                                        <img id="moviePosterImage" alt="" src={"http://localhost:8900/moviesImages/"+this.state.movieHall.moviePhoto} />
                                    </div>
                                    <div class="movieInfo"> 
                                        <ul class="movie-specs">
                                            <li class="title"><h3 id="movieTitle">{this.state.movieHall.movieName}</h3></li>
                                            <li class="info"><span id="ratingInfo" class="emptyCheck">{this.state.movieHall.movieRating}</span><span id="ratingSeparator" class="separator emptyCheck">, </span><span class="emptyCheck" id="runtimeInfo">{this.state.movieHall.movieLength}</span></li>
                                        </ul>
                                        <ul class="movie-other-specs">
                                            <li><h2 id="theaterName">{this.state.movieHall.hallName}</h2></li>
                                            <li id="theaterAddress">
                                                <a id="maplink" href="#" target="_blank" class="emptyCheck">{this.state.movieHall.hallAddress}<br/>{this.state.movieHall.hallCity}, {this.state.movieHall.hallState} {this.state.movieHall.hallZipCode}</a> 
                                            </li>
                                            <li class="agePolicy emptyCheck"><a href="#">{this.state.movieHall.hallName.split(" ")[0]} Theatres Age Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="module-standard module-cutout">  
                                <p><a class="help helplink" href="">Need Help With Checkout?</a></p>                
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        );
    }
}