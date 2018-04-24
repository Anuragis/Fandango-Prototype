import React, {Component} from 'react';
import '../css/foundation.css';
import '../css/base.css';
import '../css/nav.css';
import '../css/layout.css';
import '../css/button.css';
import '../css/vipregistration.css';
import '../css/signup.css';

export default class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
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
                <div style = {{height:"10%"}}>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <div class="panel-group row" style={{paddingLeft: '20%',  paddingRight: '20%', width: '100%'}} id="DIV_1">
                <div class="panel intercept-container large-6 medium-6 small-12 columns" id="DIV_2">
                    <div style={{textAlign : 'center', width : '100%'}}>
                        <div class="action-details small-12 columns" id="DIV_3">
                            <div class="vip-perks vip-perks--authentication" id="DIV_4">
                                <div class="perks__header" id="DIV_5">
                                    Level up your movie life with Fandango VIP:
                                </div>
                            <div class="perks__list" id="DIV_6">
                                <div class="perk perk--vip-plus" id="DIV_7">
                                    <div class="perk__header" id="DIV_8">
                                        New! Earn Points, Get Movies
                                    </div>
                                </div>
                                <div class="perk perk--rope" id="DIV_9">
                                    <div class="perk__header" id="DIV_10">
                                        Insider Perks
                                    </div>
                                </div>
                                <div class="perk perk--popcorn" id="DIV_11">
                                    <div class="perk__header" id="DIV_12">
                                        Partner Rewards
                                    </div>
                                </div>
                                <div class="perk perk--ticket" id="DIV_13">
                                    <div class="perk__header" id="DIV_14">
                                        Refunds &amp; Exchanges
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="registration-promo-unit hide-for-small-only" id="DIV_15">
	                    <img src="//images.fandango.com/cms/assets/aced1350-33b7-11e8-8eca-fd26e4965c58--vip-registration-banner.png" alt="Introducing FandangoVIP+ -- Join now and get started." id="IMG_16"/>
                </div>
            </div>
            <div class="panel sign-up-form large-6 medium-6 small-12 columns" id="DIV_17">
                <div class="sub-panel" id="DIV_18">
                    <p class="join-header" id="P_19">JOIN FANDANGO<span class="page-header-emphasis" id="SPAN_20">VIP</span>  
                            <span class="registration-caption hide-for-small-only" id="SPAN_21">(And become eligible for VIP+ Points)</span>
                            <span class="registration-caption show-for-small-only" id="SPAN_22">(And become eligible for VIP+ Points)</span>
                    </p>
                    <div class="registration-promo-unit show-for-small-only" id="DIV_23">
                        <img src="//images.fandango.com/cms/assets/aced1350-33b7-11e8-8eca-fd26e4965c58--vip-registration-banner.png" alt="Introducing FandangoVIP+ -- Join now and get started." id="IMG_24"/>
                    </div>
                    <div id="DIV_25" class=" hide">
                        <div id="DIV_26" class="error-msg">
                    </div>
                </div>
                    
                <script src="https://images.fandango.com/r1.0.431/redesign/areas/registration/js/mobilecallbacks.js" id="SCRIPT_27"></script>

                <label for="FirstNameBox" id="LABEL_28">First Name</label>
                <input name="ctl00$GlobalBody$VipRegistration1$FirstNameBox" type="text" id="INPUT_29" class="vip-first-name" placeholder=""/>

                <label for="EmailAddressBox" id="LABEL_30">Email Address</label>
                <input name="ctl00$GlobalBody$VipRegistration1$EmailAddressBox" type="text" id="INPUT_31" class="vip-email"/>

                <p class="password-section" id="P_32">
                    <label for="PasswordBox" id="LABEL_33">Password</label>
                    <input name="ctl00$GlobalBody$VipRegistration1$PasswordBox" type="password" id="INPUT_34" class="vip-password-1" placeholder=""/>
                    <small class="password-instruction" id="SMALL_35">Use 8 or more characters with a letter and a number or symbol. No more than 3 of the same character in a row.</small>

                    <label for="ConfirmPasswordBox" class="confirm-password" id="LABEL_36">Confirm Password</label>
                    <input name="ctl00$GlobalBody$VipRegistration1$ConfirmPasswordBox" type="password" id="INPUT_37" class="vip-password-2" placeholder=""/>
                </p>
                <br/>
                <a id="A_38" class="btn-cta full-width vip-join-now" alternatetext="Join Now" data-wss="&amp;lid=Join_Button" href="javascript:__doPostBack('ctl00$GlobalBody$VipRegistration1$JoinNowButton','')">Join Now for Free</a>
                <small id="SMALL_39">
                    By creating an account, you agree to the <a class="footer_links_bottom" rel="nofollow" href="http://www.fandango.com/PrivacyPolicy" name="&amp;lid=Footer&amp;lpos=Footer" id="A_40">Privacy Policy</a> and the <a class="footer_links_bottom" rel="nofollow" href="http://www.fandango.com/terms-and-policies" name="&amp;lid=Footer&amp;lpos=Footer" id="A_41">Terms and Policies</a>, and to receive email from Fandango.
                </small>
                </div>
                    <div class="divider" id="DIV_43">
                        <hr id="HR_44"/>
                    </div> 
                    <div class="large-8 medium-12 columns social-signin large-centered" id="DIV_45">
                        <div id="DIV_46" class="social-login-button social-login-gplus" data-gapiattached="true">Join with Google+</div>
                        <div id="DIV_47" class="social-login-button social-login-facebook">Join with Facebook</div>
                        <small class="secondary-cta" id="SMALL_48">We respect your privacy and will never<br id="BR_49"/> post without your permission.</small>
                    </div>                
                </div>
            </div>
        </div>
    )}
}
