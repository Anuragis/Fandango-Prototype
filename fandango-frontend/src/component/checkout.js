import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitBooking } from '../actions/actions';
import { updateHall } from '../actions/actions';
import Redirect from 'react-router-dom/Redirect';
import axios from 'axios';
import '../css/checkout.css';

class checkout extends React.Component {
    constructor(props) {
        super();
        this.state = {
            elapsed: 0,
            start:new Date(),
            count: 0,
            message: '',
            cardnumber:'',
            cardNumberError:'',
            expirymonthError:'',
            expiryyearError:'',
            firstcardError:'',
            lastcardError:'',
            zipError:'',
            firstcard:'',
            lastcard:'',
            expirymonth:'',
            expiryyear:'',
            zip:'',
            error : true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.tick=this.tick.bind(this);
        this.handleSubmitForTime=this.handleSubmitForTime.bind(this);
        this.incrementCount=this.incrementCount.bind(this);
    }
    handleSubmit = (events) => {
        // alert("checkout submit");
        let isError = false;
        const errors = {
            firstcardError: "",
            lastcardError: "",
            zipError: "",
            expirymonthError: "",
            expiryyearError:"",
            cardNumberError:""
        };
        if( this.state.cardnumber.length!==16){
            isError = true;
            errors.cardNumberError = "Card Number must be 16 digit and numeric only";
        }
        if( this.state.expirymonth==0){
            isError = true;
            errors.expirymonthError = "Expiry Month Invalid";
        }
        if( this.state.expiryyear==0){
            isError = true;
            errors.expiryyearError = "Expiry Year Invalid";
        }
        if( this.state.firstcard.length==0){
            isError = true;
            errors.firstcardError = "Invalid FirstName";
        }
        if( this.state.lastcard.length==0){
            isError = true;
            errors.lastcardError = "Invalid LastName";
        }
        if( this.state.zip.length!=5){
            isError = true;
            errors.zipError = "Invalid Zip Code";
        }

        this.setState({
            ...this.state,
            ...errors,
            error: isError
          });
      
         
        if(!isError) {
            let movieHallParse = JSON.parse(localStorage.getItem('movieHall'));
            let useridparse = JSON.parse(localStorage.getItem('userid'));
            console.log("useridparse ",useridparse);
            let submitBooking = {
                bdate: new Date().toDateString,
                bamount: JSON.parse(localStorage.getItem('ticketBoxOfficeState')).totalSum,
                btax: Number(JSON.parse(localStorage.getItem('ticketBoxOfficeState')).totalTickets)*1.5,
                userid: useridparse._id,
                fname: useridparse.fName,
                lname: useridparse.lName,
                showtime: movieHallParse.movieTime,
                moviename: movieHallParse.movieName,
                screenid: movieHallParse.screenID,
                hallname: movieHallParse.hallName,
                movieDate: movieHallParse.movieDate,
                seatsbooked: JSON.parse(localStorage.getItem('seatpicker')).seats,
                status: 'active',
                hallcity: movieHallParse.hallCity
            }
            
            console.log("submitBooking ",submitBooking);
            let updateHall = {
                hallID: movieHallParse.hallID,
                movieTime: movieHallParse.movieTime,
                moviename: movieHallParse.movieName,
                screenID: movieHallParse.screenID,
                hallname: movieHallParse.hallName,
                movieDate: movieHallParse.movieDate,
                seatsbooked: JSON.parse(localStorage.getItem('seatpicker')).seats
            }
            // console.log(JSON.parse(localStorage.getItem('ticketBoxOfficeState')));
            // alert("submit Booking" + submitBooking.hallname);
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            console.log("update hall",updateHall);
            axios('http://localhost:8900/booking', {
                method: 'post',
                mode: 'cors',
                redirect: 'follow',
                headers: headers,
                data: (submitBooking)
            })
            .then((res) => {
                console.log("booking res",res);
            })
            // alert(updateHall.hallname);
            axios('http://localhost:8900/hall/' + updateHall.hallID, {
                method: 'put',
                mode: 'cors',
                redirect: 'follow',
                headers: headers,
                data: (updateHall)
            })
            .then((res) => {
                console.log("hall update res",res);
            })
            this.handleSubmitForTime();
        }

        return isError;
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
                page : 'checkout',
                pageclick : this.state.count,
                hallticketcount: JSON.parse(localStorage.getItem('ticketBoxOfficeState')).totalTickets,
                movierating:0,
                movie : this.state.movieHall.movieName,
                movieclick : 0,
                fname : userDetails.fName,
                lname : userDetails.lName,
                state : userDetails.state,
                city : userDetails.city,
                hall : this.state.movieHall.movieName,
                hallbooking: JSON.parse(localStorage.getItem('ticketBoxOfficeState')).totalSum,
                moviebooking: JSON.parse(localStorage.getItem('ticketBoxOfficeState')).totalSum,
                bookingdate: new Date().toISOString().slice(0,10)

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

    componentDidMount(){
        this.timer = setInterval(this.tick, 50);
        //console.log("link",ReactDOM.findDOMNode(this.refs.checkPay));
    }
    render() {
        let redirectVar = null;
        if(!localStorage.getItem('userid')){
            redirectVar = <Redirect to= "/signin" />
        }
        var ConditionalLink = !this.state.error ? "/transaction/confirmation" : "/transaction/checkout";//Link : 'div';
        let redirectLink = null;
        if(!this.state.error)
            redirectLink = <Redirect to= "/transaction/confirmation" />
        return (
            <div id="siteContainer" className="ticketBoxoffice">
                {redirectVar}
                {redirectLink}
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
                                    <li className="payment complete"><i className="icon"></i>Payment</li> 
                                    <li className="confirmation "><i className="icon"></i>Confirmation</li> 
                                </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="main">
                            <div className="module-standard" onClick={this.incrementCount}>
                                <div> 
                                    <h3 class="offerHeading">For Fandango VIPs</h3>
                                    <ul class="offerList">
                                        <li class="cookiedPromoListItem"></li>
                                    </ul>
                                    <div id="offersStackContainer">
                                        <ul class="offerList">
                                            <li class="notes" data-reveal-id="tc_287" data-is-loyalty="true" data-offer-type="sitewide">
                                                <div class="inactive remove"></div>
                                                <span class="offer-icon offer-loyalty"></span> 
                                                <span class="offer-info">
                                                    <strong>EARN 150 VIP+ POINTS</strong> per ticket. More points = more movies on us.
                                                    
                                                    <span class="disclaimer"> </span>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <fieldset class="form-stacked">
                                    <h2 class="header-secondary">Payment <span class="paymentlock"></span></h2>
                                    <h3 class="payment-subheader">Use Credit or Debit Card</h3>
                                    <ul class="payment">
                                        <li class="ccPayment js-payment-method creditcard" data-payment-method="creditcard">
                                            <input value="cc" name="ExpressWebCheckout$PaymentView$paymentType" type="radio" id="creditCardPaymentRadioBtn" title="paymentType" class="paymentRadio radio"/>
                                            <label id="creditcard">
                                                <span id="creditCardItem-visa" class="visa"></span>
                                                <span id="creditCardItem-amex" class="amex"></span>
                                                <span id="creditCardItem-mastercard" class="mastercard"></span>
                                                <span id="creditCardItem-discover" class="discover"></span>
                                                <span id="creditCardItem-blank" class="chasefreedom"></span>
                                                <span id="creditCardItem-blank" class="branding"></span>
                                            </label>
                                            <div class="cvvDetail card display">
                                                <label for="creditCardNoInput" class="card display">Card number</label>
                                                <input name="ExpressWebCheckout$PaymentView$creditCardNoInput" type="text" id="creditCardNoInput" class="input card display" min="20" maxlength="19" title="Card number" value={this.state.cardnumber} onChange={(event)=>{
                                                    this.setState({cardnumber: event.target.value,cardNumberError:"",message:""})
                                                }} />
                                                <p className="errMsg">{this.state.cardNumberError}</p>
                                            </div>
                                            <div class="card fieldContainer display">
                                                <label id="expLabel" class="card display" for="expMonthDropdown">Expiration date</label>  
                                                <div class="expMonthDropdown">   
                                                    <select name="ExpressWebCheckout$PaymentView$expMonthDropdown" id="expMonthDropdown" size="1" class="card inline" value={this.state.expirymonth} onChange={(event)=>{
                                                        this.setState({expirymonth: event.target.value,message:""});
                                                    }} >
                                                        <option selected="selected" value="0">Month</option>
                                                        <option value="1">01 - January</option>
                                                        <option value="2">02 - February</option>
                                                        <option value="3">03 - March</option>
                                                        <option value="4">04 - April</option>
                                                        <option value="5">05 - May</option>
                                                        <option value="6">06 - June</option>
                                                        <option value="7">07 - July</option>
                                                        <option value="8">08 - August</option>
                                                        <option value="9">09 - September</option>
                                                        <option value="10">10 - October</option>
                                                        <option value="11">11 - November</option>
                                                        <option value="12">12 - December</option>
                                                    </select>
                                                    <p className="errMsg">{this.state.expirymonthError}</p>
                                                </div> 
                                                <div class="expYearDropdown"> 
                                                    <select name="ExpressWebCheckout$PaymentView$expYearDropdown" id="expYearDropdown" class="card inline" value={this.state.expiryyear} onChange={(event)=>{
                                                        this.setState({expiryyear: event.target.value,message:""});
                                                    }} >
                                                        <option selected="selected" value="Year">Year</option>
                                                        <option value="2018">18</option>
                                                        <option value="2019">19</option>
                                                        <option value="2020">20</option>
                                                        <option value="2021">21</option>
                                                        <option value="2022">22</option>
                                                        <option value="2023">23</option>
                                                        <option value="2024">24</option>
                                                        <option value="2025">25</option>
                                                        <option value="2026">26</option>
                                                        <option value="2027">27</option>
                                                        <option value="2028">28</option>
                                                    </select>
                                                    <p className="errMsg">{this.state.expiryyearError}</p>
                                                </div>
                                                    </div>
                                                    <div class="fieldCol2 customerInfo card display">
                                                    <div class="fieldContainer  card display">
                                                        <div class="errorText remove" id="firstNameError"></div>
                                                        <label id="firstNameLabel" class="card name display" for="firstNameInput">First name</label>
                                                        <input name="ExpressWebCheckout$PaymentView$firstNameInput" type="text" id="firstNameInput" class="input card name display" maxlength="50" title="First Name" value={this.state.firstcard} onChange={(event)=>{
                                                            this.setState({firstcard: event.target.value,message:""});
                                                        }}/>
                                                        <p className="errMsg">{this.state.firstcardError}</p>
                                                    </div>
                                                    <div class="fieldContainer  card display">
                                                        <div class="errorText remove" id="lastNameError"></div>
                                                        <label id="lastNameLabel" class="card name display" for="lastNameInput">Last name</label>
                                                        <input name="ExpressWebCheckout$PaymentView$lastNameInput" type="text" id="lastNameInput" class="input card name display" maxlength="50" title="Last Name" value={this.state.lastcard} onChange={(event)=>{
                                                            this.setState({lastcard: event.target.value,message:""});
                                                        }}/>
                                                        <p className="errMsg">{this.state.lastcardError}</p>
                                                    </div>
                                                </div>
                                                <div class="fieldContainer card display">
                                                    <div class="errorText remove" id="zipError"></div>
                                                    <label id="zipLabel" class="card display" for="zipInput">Billing ZIP code</label>
                                                    <input name="ExpressWebCheckout$PaymentView$zipInput" type="text" id="zipInput" class="input card display" title="Last Name" maxlength="8" value={this.state.zip} onChange={(event)=>{
                                                            this.setState({zip: event.target.value,message:""});
                                                        }} />
                                                    <p className="errMsg">{this.state.zipError}</p>
                                                    <label for="saveCreditCardCheckBox" class="save card co-checkbox inline" id="saveCreditCardCheckBoxContainer">
                                                        <input name="ExpressWebCheckout$PaymentView$saveCreditCardCheckBox" type="checkbox" id="saveCreditCardCheckBox" class="save card inline" />
                                                        Save my credit card information
                                                    </label>
                                                </div>
                                                <div className="success" style={{color:'green'}}>{this.state.message}</div>
                                            </li>
                                        </ul>
                                    </fieldset>
                            </div>
                            <div class="module-standard" id="completePurchase">
                                <section class="completePurchasePanel completePurchase">
                                    <div class="co-buttonContainer">              
                                        <Link to={ConditionalLink} onClick={this.handleSubmit} id="completePurchaseButton" class="button inline-block">Complete My Purchase</Link>
                                    </div>
                                    <p class="notes display" id="standardNotes">
                                        By clicking the Complete My Purchase button, you agree to the
                                        <a onclick="" class="purchaseFooterLink" href="">Privacy Policy</a> and the 
                                        <a onclick="" class="purchaseFooterLink" href="">Terms and Policies</a>, and will be charged for this order. <span class="signInToAccount">You agree to receive email from Fandango.</span> A confirmation of your order will be e-mailed to you.
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        submitBooking: (project) => {
            console.log("Selected Project : ",project);
            dispatch({type: 'SUBMIT_BOOKING',payload : project})
        },
        updateHall: (project) => {
            console.log("Selected Project : ",project);
            dispatch({type: 'UPDATE_HALL',payload : project})
        }
        // actions: bindActionCreators(Object.assign({}, submitBooking, updateHall), dispatch)
    }
}

export default connect(null,mapDispatchToProps)(checkout);