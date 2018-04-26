import React from 'react';
import '../css/checkout.css';

class confirmation extends React.Component {
    render() {
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
                                    <li className="payment complete"><i className="icon"></i>Payment</li> 
                                    <li className="confirmation "><i className="icon"></i>Confirmation</li> 
                                </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="main">
                            <div className="module-standard">
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
                                    <h2 class="header-secondary">Order Confirmation <span class="paymentlock"></span></h2>
                                    <h3 class="payment-subheader">Congratulations, Your order is successfully placed</h3>
                                    {/*likho Ticket Summary*/}
                                            
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default confirmation;