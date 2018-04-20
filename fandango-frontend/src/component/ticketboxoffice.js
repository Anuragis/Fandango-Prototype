import React from 'react';
import '../css/ticketboxoffice.css';

export default class ticketboxoffice extends React.Component {
    render() {
        const styleborder = {
            border:'0px'
        }
        const ticketRow = (heading) => {
            return(
                <tr>
                    <th className="ticketType">
                        <input type="hidden" name="AreaRepeater$ctl00$TicketRepeater$ctl00$TicketCode" id="AreaRepeater_TicketRepeater_0_TicketCode_0" value="5"/>
                        <input type="hidden" name="AreaRepeater$ctl00$TicketRepeater$ctl00$TicketCategory" id="AreaRepeater_TicketRepeater_0_TicketCategory_0" value="Adult"/>
                        <input type="hidden" name="pricecode" value="5"/>
                        <input type="hidden" name="pricedesc" value="General"/>
                        <input type="hidden" name="price" value="10.0000"/>
                        {heading}
                        <input type="hidden" name="quantityControlName" id="quantityControlName" value="AreaRepeater_TicketRepeater_0_quantityddl_0"/>
                        <input type="hidden" name="itemTotalControlName" id="itemTotalControlName" value="AreaRepeater_TicketRepeater_0_ItemTotal_0"/>
                    </th>
                    <td className="numberofTickets">
                        <select name="AreaRepeater$ctl00$TicketRepeater$ctl00$quantityddl" id="AreaRepeater_TicketRepeater_0_quantityddl_0" tabindex="1" className="qtyDropDown" onchange="javascript: adjustTickets(9,3);ticketTotal(this);">
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
                    <td className="pricePerTicket">$10.00</td>
                    <td className="equals">=</td>
                    <td className="rowTotal"><input name="AreaRepeater$ctl00$TicketRepeater$ctl00$ItemTotal" type="text" id="AreaRepeater_TicketRepeater_0_ItemTotal_0" style={styleborder} className="sub" size="8" readonly="readonly" tabindex="-1" value="$0.00"/></td>
                </tr>
            );
        }
        return (
            <div id="siteContainer" className="ticketBoxoffice">
                <div className="commonContainer"> 
                    <div id="logo">
                        <a href="http://www.fandango.com/" title="Click to go to Fandango homepage">Fandango Home</a>
                    </div>
                </div>
                <div id="container" className="commonContainer">
                    <div className="row">
                        <div id="heading" className="main">
                                <h1 className="section-header inline">Checkout</h1> 
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
                                    <a href="https://tickets.fandango.com/transaction/ticketing/express/ticketboxoffice.aspx?mid=209375&amp;tid=AAFQQ">Select new showtime</a>
                                </section>
                                <section>
                                    <h2 className="header-secondary">HOW MANY TICKETS?</h2>
                                    <div className="reservedMessage">You can request up to 9 reserved seats per transaction.</div>
                                    <table className="section quantityTable">
                                        <tbody className="ticketTypeTable" id="Reserved"> 
                                            {ticketRow("General")}
                                            {ticketRow("Student")}
                                            {ticketRow("Child/Senior")}
                                        </tbody>
                                    </table>
                                </section>
                                <div class="buttonContainer">
                                    <button onclick="__doPostBack('NewCustomerCheckoutButton','')" id="NewCustomerCheckoutButton" type="button" class="button primary medium">Continue to Seat Selection</button>                 
                                </div>
                                <section class="offers">
                                    <h3 class="offerHeading">For Fandango VIPs</h3>
                                    <span class="offer-info">
                                        <strong>EARN 150 VIP+ POINTS</strong> per ticket. More points = more movies on us.
                                        <span class="disclaimer"> </span>
                                    </span>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        );
    }
}