import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
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
                                <Link to={{pathname:"/user", state:{id: user._id}}}><span className="glyphicon glyphicon-pencil"></span></Link>
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
            </div>
        );
    }
}

export default admin;