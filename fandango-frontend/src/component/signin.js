import React, {Component} from 'react';
// import '../css/foundation.css';
// import '../css/base.css';
// import '../css/nav.css';
// import '../css/layout.css';
// import '../css/button.css';
// import '../css/vipregistration.css';
  import '../css/signin.css';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
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
          <body>
            <div class="container">
              <form class="form-signin">
                <h2 class="form-signin-heading">Please sign in</h2>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""/>
                <br/>
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""/>
                <div class="checkbox">
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
              </form>
            </div>
          </body>
        </div>
)}
}
  