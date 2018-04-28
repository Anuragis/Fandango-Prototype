import React,{Component} from 'react';
import axios from 'axios';
import '../css/admin.css';

class hall extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        hallName: '',
        hallAddress: '',
        hallCity: '',
        hallZipCode: '',
        hallState: ''
      }
       
      
    }

    validate = () => {
      let isError = false;
      const errors = {
        firstNameError: "",
        emailError: "",
        zipCodeError: "",
        stateError: "",
        cardNumberError:""
      };
      
      if (this.state.fname.length ===0) {
        isError = true;
        errors.firstNameError = "First Name cannot be empty";
      }
  
      if (this.state.email.indexOf("@") === -1) {
        isError = true;
        errors.emailError = "Requires valid email";
      }

      if( this.state.cardnumber.length!==0 && this.state.cardnumber.length!==16){
        isError = true;
        errors.cardNumberError = "Card Number must be 16 digit and numeric only";
      }
      
      var isZipValid = /\d{5}-\d{4}$|^\d{5}$/.test(this.state.zipCode);

      if(!isZipValid){
        isError = true;
        errors.zipCodeError = "Invalid Zip Code, enter in either xxxx or xxxxx-xxxx format";
      }

     var isStateValid=/^(AL|Alabama|alabama|AK|Alaska|alaska|AZ|Arizona|arizona|AR|Arkansas|arkansas|CA|California|california|CO|Colorado|colorado|CT|Connecticut|connecticut|DE|Delaware|delaware|FL|Florida|florida|GA|Georgia|georgia|HI|Hawaii|hawaii|ID|Idaho|idaho|IL|Illinois|illinois|IN|Indiana|indiana|IA|Iowa|iowa|KS|Kansas|kansas|KY|Kentucky|kentucky|LA|Louisiana|louisiana|ME|Maine|maine|MD|Maryland|maryland|MA|Massachusetts|massachusetts|MI|Michigan|michigan|MN|Minnesota|minnesota|MS|Mississippi|mississippi|MO|Missouri|missouri|MT|Montana|montana|NE|Nebraska|nebraska|NV|Nevada|nevada|NH|New Hampshire|new hampshire|NJ|New Jersey|new jersey|NM|New Mexico|new mexico|NY|New York|new york|NC|North Carolina|new carolina|ND|North Dakota|north dakota|OH|Ohio|ohio|OK|Oklahoma|oklahoma|OR|Oregon|oregon|PA|Pennsylvania|pennsylvania|RI|Rhode Island|rhode island|SC|South Carolina|south carolina|SD|South Dakota|south dakota|TN|Tennessee|tennessee|TX|Texas|texas|UT|Utah|utah|VT|Vermont|vermont|VA|Virginia|virginia|WA|Washington|washington|WV|West Virginia|west virginia|WI|Wisconsin|wisconsin|WY|Wyoming|wyoming)$/.test(this.state.state);

      if(!isStateValid){
        isError = true;
        errors.stateError = "Invalid State Abbrevation";
      }
      this.setState({
        ...this.state,
        ...errors
      });
  
      return isError;
    };

    componentWillMount(){

        if(this.props.location.state.id!="0"){
        var url = 'http://localhost:8900/hallById/' + this.props.location.state.id;
        
        axios(url, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }).then((res) => {this.setState({hallName: res.data[0].hallName, 
            hallAddress: res.data[0].hallAddress,
            hallCity: res.data[0].hallCity,
            hallZipCode: res.data[0].hallZipCode,
            hallState: res.data[0].hallState,

        
                });
            }
          )
        }


    }
    updateProfile(){

      const err = this.validate();
      if (!err) {

       var url = 'http://localhost:8900/user/' + this.props.location.state.id;
       axios(url, {
         method: 'PUT',
         mode: 'cors',
         headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         },
         data: JSON.stringify({fName: this.state.fname, lName: this.state.lname,
          email: this.state.email, address: this.state.address, 
          city: this.state.city, state: this.state.state,
          zipCode: this.state.zipCode, phoneNumber: this.state.phoneNumber,
          password: this.state.password, profileImage: this.state.profileImage,
          userType: this.state.userType,
          creditCard:{
            cardNumber:this.state.cardnumber,
            nameOnCard:this.state.nameoncard,
            expiry:this.state.expiry,
            cvv:this.state.cvv
          }

          })
          
          
       }).then((res) => {
        if(res.status === 200){
          this.setState({message: "Profile changed successfully"});
        }
        else{
          this.setState({message: "Couldn't change the profile"});
        }
       })
    }
  }

  createProfile(){
    console.log("Inside Create Profile");
    const err = this.validate();
    if (!err) {

     var url = 'http://localhost:8900/signup/';
     axios(url, {
       method: 'POST',
       mode: 'cors',
       headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
       data: JSON.stringify({fName: this.state.fname, lName: this.state.lname,
        email: this.state.email, address: this.state.address, 
        city: this.state.city, state: this.state.state,
        zipCode: this.state.zipCode, phoneNumber: this.state.phoneNumber,
        password: this.state.password, profileImage: this.state.profileImage,
        userType: this.state.userType,
        password:this.state.password,
        creditCard:{
          cardNumber:this.state.cardnumber,
          nameOnCard:this.state.nameoncard,
          expiry:this.state.expiry,
          cvv:this.state.cvv
        }

        })
        
        
     }).then((res) => {
      if(res.status === 200){
        this.setState({message: "User created successfully"});
      }
      else{
        this.setState({message: "Couldn't create the user"});
      }
     })
  }
  }
 
  
    

     
  render() {
    let showPassword="";
    let displayButton="";
      if(this.props.location.state.id==="0") {
        displayButton=(<button type="button" id="submit" name="submit" className="btn btn-primary pull-right" onClick={this.createProfile.bind(this)}>Create</button>);
      }else{
        displayButton=(<button type="button" id="submit" name="submit" className="btn btn-primary pull-right" onClick={this.updateProfile.bind(this)}>Update</button>);
      };
     
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
         <div className = "container">
          <div className = "row">
       

        <div className="col-md-9">
          <div className="form-area">  
              <form role="form">
                <br styles="clear:both" />
                <div className="form-group">
                  <p className="errMsg">{this.state.firstNameError}</p>
                  <input  type="text" className="form-control" placeholder="Hall Name" value={this.state.hallName} onChange={(event)=>{
                    this.setState({hallName: event.target.value.trim(),firstNameError:"",message:""});
                  }}  required />
                </div>
                <div className="form-group">
                  <input  type="text" className="form-control" placeholder="Addrees" value={this.state.hallAddress} onChange={(event)=>{
                    this.setState({hallAddress: event.target.value.trim(),message:""});
                  }} required />
                </div>
                <div className="form-group">
                  <p className="errMsg">{this.state.emailError}</p>
                  <input  type="text" className="form-control" placeholder="City" value={this.state.hallCity} onChange={(event)=>{
                    this.setState({hallCity: event.target.value.trim(),message:"",emailError:""});
                  }} required />
                </div>
                <div className="form-group">
                  <input  type="text" className="form-control" placeholder="State" value={this.state.hallState} onChange={(event)=>{
                    this.setState({hallState: event.target.value.trim(),message:""});
                  }} required />
                </div>
                <div className="form-group">
                <p className="errMsg">{this.state.stateError}</p>
                  <input  type="text" className="form-control" placeholder="Zip Code" value={this.state.hallZipCode} onChange={(event)=>{
                    this.setState({hallZipCode: event.target.value.trim(),stateError:"",message:""});
                  }} required />
                </div>
                {displayButton}
             </form>
              <div className="success">{this.state.message}</div>
              <br></br>
          </div>
        </div>

        </div>
        </div>
        </div>
      )
    }
}


export default hall;