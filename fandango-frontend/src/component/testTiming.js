import React,{Component} from 'react';
import axios from 'axios';
import '../css/admin.css';


// http://tutorialzine.com/2014/07/5-practical-examples-for-learning-facebooks-react-framework/

export default class test extends Component{


    constructor(props) {
        super(props);
        this.state={
            elapsed: 0,
            start:new Date(),
            count: 0
        } 

        this.tick=this.tick.bind(this);
        this.handleSubmitForTime=this.handleSubmitForTime.bind(this);
        this.incrementCount=this.incrementCount.bind(this);
      }

    componentDidMount(){

        // componentDidMount is called by react when the component 
        // has been rendered on the page. We can set the interval here:

        this.timer = setInterval(this.tick, 50);
    }
    

    componentWillUnmount(){

        // This method is called immediately before the component is removed
        // from the page and destroyed. We can clear the interval here:

        clearInterval(this.timer);
    }

    tick(){

        // This function is called every 50 ms. It updates the 
        // elapsed counter. Calling setState causes the component to be re-rendered

        this.setState({...this.state,elapsed: new Date() - this.state.start});
    }

    incrementCount = () => {
		this.setState(
            {...this.state, count: this.state.count + 1 }
        );
	};

    handleSubmitForTime(events){
            events.preventDefault();
        var elapsed = Math.round(this.state.elapsed / 100);
        var seconds = (elapsed / 10).toFixed(1);  



    console.log("Inside Time ");
     var url = 'http://localhost:8900/log/';
     axios(url, {
       method: 'POST',
       mode: 'cors',
       headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
       data: JSON.stringify({
            time: seconds,
            page :"ticketbooking",
            pageclick : this.state.count,
            hallticketcount:0,
            movierating:0,
            movie : "",
            movieclick : 0,
            fname : "Anuui",
            lname : "jggsd",
            state : "CA",
            city : "New York",
            hall : "",
            hallbooking:0,
            moviebooking:0,
            bookingdate:""

        })
        
        
     }).then((res) => {
        console.log("Response sent");
     });
  
 


    }
    render() {
        
        // Calculate elapsed to tenth of a second:
       

        // This will give a number with one digit after the decimal dot (xx.x):
   

        // Although we return an entire <p> element, react will smartly update
        // only the changed parts, which contain the seconds variable.

       

        return (
            
            <div onClick={this.incrementCount}>
               
            <form onSubmit = {this.handleSubmitForTime}> 
                    <button className="btn btn-lg btn-primary" type="submit">Send</button>
                </form>
            </div>
        );
    }
}


