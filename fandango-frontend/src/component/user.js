import React,{Component} from 'react';
import axios from 'axios';

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
        message: ''
      }
       
    }
    componentDidMount(){
        var url = 'http://localhost:8900/user/' + this.props.location.state.id;
        
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
          creditCard: res.data.creditCard,
          userType: res.data.userType});
          console.log(res);
        }
          )
    }
    updateProfile(){
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
          creditCard: this.state.creditCard, userType: this.state.userType
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
 
    getProfile(){
 
    }
     
    render() {
      return (
         <div className = "container">
         <div className = "row">
         <div className = "col-md-3">
         <h1 className="text-center">Profile Image</h1>
         <button className="btn pull-left btn-block">Update</button>
         </div>

        <div className="col-md-9">
          <div className="form-area">  
              <form role="form">
                <br styles="clear:both" />
                <div className="form-group">
                  <input  type="text" className="form-control" placeholder="First Name" value={this.state.fname} onChange={(event)=>{
                    this.setState({fname: event.target.value});
                  }}  required />
                </div>
                <div className="form-group">
                  <input  type="text" className="form-control" placeholder="Last Name" value={this.state.lname} onChange={(event)=>{
                    this.setState({lname: event.target.value});
                  }} required />
                </div>
                <div className="form-group">
                  <input  type="text" className="form-control" placeholder="Email" value={this.state.email} onChange={(event)=>{
                    this.setState({email: event.target.value});
                  }} required />
                </div>
                <div className="form-group">
                  <input  type="text" className="form-control" placeholder="Address" value={this.state.address} onChange={(event)=>{
                    this.setState({address: event.target.value});
                  }} required />
                </div>
                <div className="form-group">
                  <input  type="text" className="form-control" placeholder="City" value={this.state.city} onChange={(event)=>{
                    this.setState({city: event.target.value});
                  }} required />
                </div>
                <div className="form-group">
                  <input  type="text" className="form-control" placeholder="state" value={this.state.state} onChange={(event)=>{
                    this.setState({state: event.target.value});
                  }} required />
                </div>
                <div className="form-group">
                  <input  type="text" className="form-control" placeholder="Zip Code" value={this.state.zipCode} onChange={(event)=>{
                    this.setState({zipCode: event.target.value});
                  }} required />
                </div>
                <div className="form-group">
                  <input  type="text" className="form-control" placeholder="phoneNumber" value={this.state.phoneNumber} onChange={(event)=>{
                    this.setState({phoneNumber: event.target.value});
                  }} required />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Password" required />
                </div>
                
                <button type="button" id="submit" name="submit" className="btn btn-primary pull-right" onClick={this.updateProfile.bind(this)}>Update</button>
              </form>
              <div>{this.state.message}</div>
          </div>
        </div>

        </div>
        </div>
      )
    }
}


export default user;