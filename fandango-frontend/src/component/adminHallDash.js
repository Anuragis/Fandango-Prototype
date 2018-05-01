import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../css/admin.css';
import {Redirect} from 'react-router-dom';
//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class halls extends Component{

    constructor(props){
        super(props);
        this.state = {  
            halls: []
        }

    }
    componentDidMount(){
        this.state.start=new Date();
        console.log("started");
        axios('http://localhost:8900/halls', {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }).then((res) => {
          this.setState({halls: res.data,
           });
        
        })
    }

    
   
    render(){
        let redirectVar = null;
        if(!localStorage.getItem('userid')){
            redirectVar = <Redirect to= "/signin" />
        }
        return(
            <div >
                {redirectVar}
            <div id="headerContainer" class="purchase detail on-order" name="HeaderContainer">
                <div id="headerPurchase">
                    <div className="commonContainer"> 
                        <div id="logo">
                        <Link to = "/"></Link>
                        </div>
                        <div id="bannerMessage">You're a guaranteed ticket away from the perfect movie night.</div>
                    </div>
                </div>
            </div>
            <Link to={{pathname:"/addhall", state:{id: "0"}}} className= "btn btn-primary buttonAlign" style={{textDecoration:'none',color:'white'}}>Add Hall</Link>           
                 <div className="container">  
                  
                  <h3><b>List of Halls</b></h3>

                 
                <table className="table table-striped">
            <thead>
              <tr className="headerBg">
                <th>#</th>
                <th>Hall Name</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
                
                {  
                    this.state.halls.map((hall, id=1) => {
                    
                    return(
                        <tr key={hall._id}>
                            <td>{id + 1}</td>
                            <td>{hall.hallName}</td>
                            <td>{hall.hallAddress}</td>
                            <td>{hall.hallCity}</td>
                            <td>{hall.hallState}</td>
                            {/*<td>
                              <span className="glyphicon glyphicon-pencil"><Link to="/user"></Link></span>
                            </td>*/}
                            <td>
                                <Link to={{pathname:"/addhall", state:{id: hall._id}}}><span className="glyphicon glyphicon-pencil"></span></Link>
                            </td>
                        </tr>
                    )
                
                })}
               


            </tbody>
</table>
               </div>
            </div>
        );
    }
}

export default halls;