import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signinAction } from '../actions/actions';
import '../css/signin.css';
import Redirect from 'react-router-dom/Redirect';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email     : '',
      password  : '',
    }
  }
  
  handleChange = (events) =>{
    if(events.target.name === 'email'){
        this.setState({
            email : events.target.value
        });
    }
    if(events.target.name === 'password'){
        this.setState({
            password : events.target.value
        });
    }
  }
  handleSubmit = (events) =>{
    events.preventDefault();
    const newData = {
        username : this.state.email,
        password : this.state.password
    }  
    this.props.signinAction(newData);
  }
  render() {
    let redirectVar = null;
    if(localStorage.getItem('userid')._id){
      redirectVar = <Redirect to= "/" />
    }
    return(
      <div>
        {redirectVar}
        <div style = {{backgroundColor : "black"}}>
          <header id="registration-header" class="registration-header" role="banner">
              <nav role="navigation" class="nav-bar">
                <div class="row">
                  <div class="large-11 large-centered columns">
                    <ul class="inline-items">
                      <li class="site-logo">
                          <img src="https://images.fandango.com/r1.0.431/redesign/static/img/fandango-logo.svg" alt="Fandango Logo" class="brand-img"/>
                      </li>
                    </ul>
                    <div class="registration-mode right">
                      <span>Already have a Fandango VIP Account?</span> &nbsp;<a href="#" class="cta">Sign In</a>
                    </div>
                  </div>
                </div>
              </nav>
            </header>
          </div>
          <div class="container">
            <form class="form-signin" onSubmit = {this.handleSubmit.bind(this)}>
              <h2 class="form-signin-heading">Please sign in</h2><br/>
              <label for="inputEmail" class="sr-only">Email address</label>
              <input type="email" name = "email" id="inputEmail" onChange = {this.handleChange} class="form-control" placeholder="Email address" required="" autofocus=""/>
              <br/>
              <label for="inputPassword" class="sr-only">Password</label>
              <input onChange = {this.handleChange} type="email" name="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required=""/>
              
              <input type="submit" value="Sign In" className="btn btn-primary form-control"/>

            </form>
          </div>
        </div>
  )}
}
const mapStateToProps = state => {
  return {
      id : state.id,
      error : state.error
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signinAction }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);