import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../css/admin.css';
//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class admin extends Component{

    constructor(props){
        super(props);
        this.state = {  
            start:null,
            users: [],
        
        }
    }
    componentDidMount(){
        this.state.start=new Date();
        console.log("started");
        axios('http://localhost:8900/users', {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }).then((res) => {
          this.setState({users: res.data});
          //console.log(this.state.users);
        })
    }

    componentWillUnmount(){
        var end=new Date();
        var diff= end-this.state.start;
        console.log("stooped");
        console.log(diff/1000);
    }

    deleteUser(id){
        var url = 'http://localhost:8900/user/' + id;
        axios(url, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
            
        }).then((res) => {
            var array=[];
            this.state.users.map(function(key){
                if(key._id!==id){
                    array.push(key);
                    }
                });

            this.setState({
                users:array
            });
            console.log(res);
        })
    }


    render(){
        return(
            <div>
                <div className="container">
                <Link to="/signup" className= "btn btn-block" style={{textDecoration:'none',color:'white'}}>Add User</Link>
                    <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
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
                    <Link to={{pathname:"/adduser", state:{id: "0"}}} className= "btn btn-primary buttonAlign" style={{textDecoration:'none',color:'white'}}>Add User</Link>
                    
                    <div className="container">  

                    <h3><b>List of Users</b></h3>   
                    <table className="table table-striped">
                <thead>
                <tr className="headerBg">
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {  
                        this.state.users.map((user, id=0) => {
                        return(
                            <tr key={user._id}>
                                <td>{id}</td>
                                <td>{user.fName}</td>
                                <td>{user.lName}</td>
                                <td>{user.email}</td>
                                {/*<td>
                                <span className="glyphicon glyphicon-pencil"><Link to="/user"></Link></span>
                                </td>*/}
                                <td>
                                    <Link to={{pathname:"/adduser", state:{id: user._id}}}><span className="glyphicon glyphicon-pencil"></span></Link>
                                </td>
                                <td>
                                <span className="glyphicon glyphicon-remove" onClick={this.deleteUser.bind(this, user._id)}></span>
                                </td>
                            </tr>
                        )
                    
                    })}
                


                </tbody>
                </table>
                </div>
                </table>
            </div>
            </div>
        );
    }
}

export default admin;