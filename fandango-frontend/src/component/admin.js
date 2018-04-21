import React,{Component} from 'react';

class admin extends Component{

    constructor(props){
        super(props);
        this.state = {  
            start:null
        }
    }
    componentDidMount(){
        this.state.start=new Date();
        console.log("started");
    }

    componentWillUnmount(){
        var end=new Date();
        var diff= end-this.state.start;
        console.log("stooped");
        console.log(diff/1000);
    }


    render(){
        return(
            <div>Hello</div>
        );
    }
}

export default admin;