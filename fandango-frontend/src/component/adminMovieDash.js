import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Head from './gauravHeader';
export default class AdminMovieDash extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return(
            <div>
                <Head />
                <br/>
                <br/>
                <Link to={{pathname:"/addmovie", }} className= "btn btn-primary buttonAlign" style={{textDecoration:'none',color:'white'}}>Add Movie</Link>
                <div className="container">  
                    <h3><b>List of Movies</b></h3>   
                    <table className="table table-striped">
                    <thead>
                        <tr className="headerBg">
                            <th>#</th>
                            <th>Movie Name</th>
                            <th>Description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody> 
                            
                    </tbody>
                </table>
               </div>
            </div>
        )
    }
}