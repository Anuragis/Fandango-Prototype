import React,{Component} from 'react';
import axios from 'axios';
import '../css/admin.css';

class user extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        user: {},
        fname: '',
        lname: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNumber: '',
        password: '',
        profileImage: '',
        message: '',
        userType:'',
        nameoncard:'',
        cardnumber:'',
        expiry:'',
        cvv:'',
        creditCard:'',
        firstNameError: "",
        emailError:"",
        zipCodeError:"",
        stateError:"",
        cardNumberError:"",
        imagePreview:"",
        fileSelected:""
      }
       
      this.imageUpdate = this.imageUpdate.bind(this);
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
      console.log("usER PROFILE",localStorage.getItem('userid')._id);
      var url='http://localhost:8900/user/' + JSON.parse(localStorage.getItem('userid'))._id;
        if(typeof(this.props.location.state) !== "undefined" && this.props.location.state.id!="0"){
          url = 'http://localhost:8900/user/' + this.props.location.state.id;
        }
        
        axios(url, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }).then((res) => {this.setState({fname: res.data.fName, 
          lname: res.data.lName,
          email: res.data.email,
          address: res.data.address,
          city: res.data.city,
          state: res.data.state,
          zipCode: res.data.zipCode,
          phoneNumber: res.data.phoneNumber,
          password: res.data.password,
          profileImage: res.data.profileImage,
          cardnumber: res.data.creditCard.cardNumber,
          nameoncard:res.data.creditCard.nameOnCard,
          expiry:res.data.creditCard.expiry,
          cvv:res.data.creditCard.cvv,
          userType: res.data.userType});
          console.log("Response",res);
          if(this.state.imagePreview=="") {
            console.log("profileImage"+this.state.fname);
            this.setState({
              imagePreview: "http://localhost:8900/userImages/"+this.state.profileImage
            })
          }
        }
          )
        


    }
    updateProfile(){

      const err = this.validate();
      if (!err) {

        var url='http://localhost:8900/user/' + JSON.parse(localStorage.getItem('userid'))._id;
        if(typeof(this.props.location.state) !== "undefined" && this.props.location.state.id!="0"){
          url = 'http://localhost:8900/user/' + this.props.location.state.id;
        }

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
 
 
    handleCancel = () => {
      this.setState({
          fileSelected: '',
          imagePreview: "http://localhost:8900/userImages/"+this.state.profileImage
      });
    }

    handleChange = e => {
      e.preventDefault();
      
      let rdr = new FileReader();
      let fileSelected = this.uploadInput.files[0];
      rdr.onloadend = () => {
        this.setState({
          fileSelected: fileSelected,
          imagePreview: rdr.result
        });
      }
  
      rdr.readAsDataURL(fileSelected);
    }

    imageUpdate() {
      var url = 'http://localhost:8900/saveImage/' + this.props.location.state.id;
      var fData = new FormData();
        fData.append('iFile', this.state.fileSelected);
       axios(url, {
         method: 'PUT',
         mode: 'cors',
         headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         },
         data:fData
        })
        this.setState({
          fileSelected:""
        })
    }
     
  render() {
    let showPassword="";
    let displayButton="";
      if(typeof(this.props.location.state) !== "undefined" && this.props.location.state.id==="0") {
        showPassword=( <div className="form-group">
                  <input  type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={(event)=>{
                    this.setState({password: event.target.value,message:""});
                  }} required />
                  </div>);
        displayButton=(<button type="button" id="submit" name="submit" className="btn btn-primary pull-right" onClick={this.createProfile.bind(this)}>Create</button>);
      }else{
        showPassword=( <div></div>);
        displayButton=(<button type="button" id="submit" name="submit" className="btn btn-primary pull-right" onClick={this.updateProfile.bind(this)}>Update</button>);
      };
      const styleUpl = {
        display : 'none'
    }
    const styleBorder = {
        marginRight: '10px'
    }
      let uplImg = null;
      if(this.state.fileSelected==='') {
        uplImg = (
          <div id='imageUploader' style={{marginTop:'5px'}} > 
            <label  htmlFor="uplbtn" id="btn-file-uploader" className="btn btn-warning">
                  <span> <b>Update</b></span>
              </label>
            <input style={{display:'none'}} type="file" className="btn pull-left btn-block" id="uplbtn" onChange={this.handleChange} ref={(ref) => { this.uploadInput = ref; }}/>
          </div>
        );
      }
      else {
        uplImg = (
        <div id='imageUploader' style={{marginTop:'5px'}} >
            <label htmlFor="uplbtn" id="btn-file-uploader" style = {styleBorder} className="btn btn-warning">
                <span> <b>Save</b></span>
            </label>
            <label htmlFor="canbtn" id="btn-file-uploader" style = {styleBorder} className="btn btn-warning">
                <span> <b>Cancel</b></span>
            </label>
            {/* <input style={styleUpl} type='file' id="uplbtn" className='fileInput' onChange={this.handleChange} ref={(ref) => { this.uploadInput = ref; }}/> */}
            <button id="uplbtn" style = {styleUpl} onClick = {this.imageUpdate} ></button>
            <button id="canbtn" style = {styleUpl} onClick = {this.handleCancel} ></button>
        </div>
        );
    }
      
  
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
           <div className = "col-md-3">
              <h1 className="text-center">Profile Image</h1>
              <img src = {this.state.imagePreview} alt = "This is user's display pic"/>
              {uplImg}
          </div>

        <div className="col-md-9">
          <div className="form-area">  
              <form role="form">
                <br styles="clear:both" />
                <div className="form-group">
                  <p className="errMsg">{this.state.firstNameError}</p>
                  <input  type="text" className="form-control" placeholder="First Name" value={this.state.fname} onChange={(event)=>{
                    this.setState({fname: event.target.value,firstNameError:"",message:""});
                  }}  required />
                </div>
                <div className="form-group">
                  <input  type="text" className="form-control" placeholder="Last Name" value={this.state.lname} onChange={(event)=>{
                    this.setState({lname: event.target.value,message:""});
                  }} required />
                </div>
                <div className="form-group">
                  <p className="errMsg">{this.state.emailError}</p>
                  <input  type="text" className="form-control" placeholder="Email" value={this.state.email} onChange={(event)=>{
                    this.setState({email: event.target.value,message:"",emailError:""});
                  }} required />
                </div>
                {showPassword}
                <div className="form-group">
                  <input  type="text" className="form-control" placeholder="Address" value={this.state.address} onChange={(event)=>{
                    this.setState({address: event.target.value,message:""});
                  }} required />
                </div>
                <div className="form-group">
                  <input  type="text" className="form-control" placeholder="City" value={this.state.city} onChange={(event)=>{
                    this.setState({city: event.target.value,message:""});
                  }} required />
                </div>
                <div className="form-group">
                <p className="errMsg">{this.state.stateError}</p>
                  <input  type="text" className="form-control" placeholder="state" value={this.state.state} onChange={(event)=>{
                    this.setState({state: event.target.value,stateError:"",message:""});
                  }} required />
                </div>
                <div className="form-group">
                <p className="errMsg">{this.state.zipCodeError}</p>
                  <input  type="text" className="form-control" placeholder="postal code" value={this.state.zipCode} onChange={(event)=>{
                    this.setState({zipCode: event.target.value,
                      zipCodeError:"",message:""});
                  }} required />
                </div>
                <div className="form-group">
                  <input  type="text" className="form-control" placeholder="phone number" value={this.state.phoneNumber} onChange={(event)=>{
                    this.setState({phoneNumber: event.target.value,message:""});
                  }} required />
                </div>
                <div className="form-group">
                <input  type="text" className="form-control" placeholder="user type" value={this.state.userType} onChange={(event)=>{
                    this.setState({userType: event.target.value,message:""});
                  }} required />
                  <h3><b>Card Details</b></h3>
                  <p className="errMsg">{this.state.cardNumberError}</p>
                  <input style = {{width : '300px', height:'45px'}} type="text" className="form-control" placeholder="Card Number" value={this.state.cardnumber} onChange={(event)=>{
                    this.setState({cardnumber: event.target.value,cardNumberError:"",message:""});
                  }} required />
                  <input style = {{width : '300px', height:'45px'}} type="text" className="form-control" placeholder="Name on Card" value={this.state.nameoncard} onChange={(event)=>{
                    this.setState({nameoncard: event.target.value,message:""});
                  }} required />
                  <input  style = {{width : '125px', height:'45px'}}  maxlength="7" size="7" type="text" className="form-control" placeholder="Expiry MM/YYYY" value={this.state.expiry} onChange={(event)=>{
                    this.setState({expiry: event.target.value,message:""});
                  }} required />
                  <input  type="password"  maxlength="3" size="3"  style = {{width:'50px',textAlign:'center', display: 'inline-block',marginRight : '20px'}}className="form-control" placeholder="CVV" value={this.state.cvv} onChange={(event)=>{
                    this.setState({cvv: event.target.value,message:""});
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


export default user;