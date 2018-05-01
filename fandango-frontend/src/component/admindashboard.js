import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import {Pie, Bar, Line} from 'react-chartjs-2';
import {Link} from 'react-router-dom';


export default class admindashboard extends Component{
    constructor(props){
        super(props);

        this.state={
           
            masterRepo:[],
            cityTraceRepo :[],
            cityName:'',
            userName:'',
            movieName:'',
            year:'',
            movieYear:'',
            movie:'',

            pageTraceUser:{
                labels:["Home", "Movies","Movie Details", "Ticket Booking", "Checkout"],
               
                datasets:[
                    {
                        data:[0,0,0,0,0],
                        label: "Time in secs",
                        backgroundColor:["#F7464A","#F7464A","#F7464A","#F7464A","#F7464A"]
                    }
                ]
            },


            pageTraceCity:{
                labels:["Home", "Movies","Movie Details", "Ticket Booking", "Checkout"],
                datasets:[
                    {
                        data:[0,0,0,0,0],
                        label: "Time in secs",
                        backgroundColor:["#F7464A","#F7464A","#F7464A","#F7464A","#F7464A"]
                    }
                ]
            },

            movieRating:{
                labels:["1 star", "2 stars","3 stars", "4 stars", "5 stars"],
                datasets:[
                    {
                        data:[0,0,0,0,0],
                        label: "Rating count",
                        backgroundColor:["#F7464A","#F7464A","#F7464A","#F7464A","#F7464A"]
                    }
                ]
            },

            topMoviesRevenuePerYear:{
                    labels:["", "","", "", "","","","","",""],
                datasets:[
                    {
                        data:[0,0,0,0,0,0,0,0,0,0],
                        label: "Revenue for Movie per year",
                        backgroundColor:["#F7464A","#F7464A","#F7464A","#F7464A","#F7464A","#F7464A","#F7464A","#F7464A","#F7464A","#F7464A"]
                    }
                ]
            },

            topCitiesRevenuePerMoviePerYear:{
                labels:["", "","", "", "","","","","",""],
            datasets:[
                {
                    data:[0,0,0,0,0,0,0,0,0,0],
                    label: "Revenue for Movie per city per year",
                    backgroundColor:["#F7464A","#F7464A","#F7464A","#F7464A","#F7464A","#F7464A","#F7464A","#F7464A","#F7464A","#F7464A"]
                }
            ]
        }

        }

        

        this.handleSubmitForCity=this.handleSubmitForCity.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmitForMovie=this.handleSubmitForMovie.bind(this);
        this.handleSubmitForUser=this.handleSubmitForUser.bind(this);
        this.handleSubmitForMovieRevenuePerYear=this.handleSubmitForMovieRevenuePerYear.bind(this);
        this.handleSubmitForMovieRevenuePerCityPerYear=this.handleSubmitForMovieRevenuePerCityPerYear.bind(this);
    }
handleChange = (events) => {

        console.log("Here", events.target.name);
        if(events.target.name === "city"){
            this.setState({
                ...this.state,
                cityName : events.target.value
            });
           
        }

        if(events.target.name === "username"){
            this.setState({
                ...this.state,
                userName : events.target.value
            });    
        }

        if(events.target.name === "moviename"){
            this.setState({
                ...this.state,
                movieName : events.target.value
            });
        }

        if(events.target.name==="year"){
            this.setState({
                ...this.state,
                year : events.target.value
            });
        }

        if(events.target.name==="movie"){
            this.setState({
                ...this.state,
                movie : events.target.value
            });
        }

        if(events.target.name==="movieYear"){
            this.setState({
                ...this.state,
                movieYear : events.target.value
            });
        }


    }
    handleSubmitForCity = (events) =>{
        events.preventDefault();
        let pagesTimeArray=[0,0,0,0,0];
        let city=this.state.cityName;
        this.state.masterRepo.map(function(log){ 

           if(log.city !=null && log.city.toUpperCase()===city.toUpperCase()){
                if(log.page !=null && log.page==="home"){
                    pagesTimeArray[0]+=(log.time);
                }else  if(log.page !=null && log.page==="movies"){
                    pagesTimeArray[1]+=(log.time);
                }else if(log.page !=null && log.page==="moviedetails"){
                    pagesTimeArray[2]+=(log.time);
                }else if(log.page !=null && log.page==="ticketbooking"){
                    pagesTimeArray[3]+=(log.time);
                }else if(log.page !=null && log.page==="checkout"){
                    pagesTimeArray[4]+=(log.time);
                }
            }
        });
        this.setState({
            ...this.state,
            pageTraceCity:{
                labels:["Home", "Movies","Movie Details", "Ticket Booking", "Checkout"],
                datasets:[
                    {
                        data:pagesTimeArray,
                        label: "Time in secs",
                        backgroundColor:["#ffbf00","#ffbf00","#ffbf00","#ffbf00","#ffbf00"]
                    }
                ]
            }
        });
           
    }



    handleSubmitForMovie = (events) =>{
        events.preventDefault();
        let pagesTimeArray=[0,0,0,0,0];
        let movie=this.state.movieName;
        this.state.masterRepo.map(function(log){ 

           if(log.movie !=null && log.movie.toUpperCase()===movie.toUpperCase()){
                if(log.movierating!=null && log.movierating===1){
                    pagesTimeArray[0]++;
                }else  if(log.movierating!=null && log.movierating===2){
                    pagesTimeArray[1]++;
                }else if(log.movierating!=null && log.movierating===3){
                    pagesTimeArray[2]++;
                }else if(log.movierating!=null && log.movierating===4){
                    pagesTimeArray[3]++;
                }else if(log.movierating!=null && log.movierating===5){
                    pagesTimeArray[4]++;
                }
            }
        });
        this.setState({
            ...this.state,
            movieRating:{
                labels:["1 star", "2 stars","3 stars", "4 stars", "5 stars"],
                datasets:[
                    {
                        data:pagesTimeArray,
                        label: "Rating count",
                        backgroundColor:["#ffbf00","#ffbf00","#ffbf00","#ffbf00","#ffbf00"]
                    }
                ]
            }
        });
           
    }
    handleSubmitForUser = (events) =>{
        events.preventDefault();
    
        let pagesTimeArray=[0,0,0,0,0];
        let username=this.state.userName;
        this.state.masterRepo.map(function(log){ 

           if(log.fname!=null && log.fname.toUpperCase()===username.toUpperCase()){
                if(log.page!=null && log.page==="home"){
                    pagesTimeArray[0]+=(log.time);
                }else  if(log.page!=null && log.page==="movies"){
                    pagesTimeArray[1]+=(log.time);
                }else if(log.page!=null && log.page==="moviedetails"){
                    pagesTimeArray[2]+=(log.time);
                }else if(log.page!=null && log.page==="ticketbooking"){
                    pagesTimeArray[3]+=(log.time);
                }else if(log.page!=null && log.page==="checkout"){
                    pagesTimeArray[4]+=(log.time);
                }
            }
        });
       
        this.setState({
            ...this.state,
            pageTraceUser:{
                labels:["Home", "Movies","Movie Details", "Ticket Booking", "Checkout"],
                datasets:[
                    {
                        data:pagesTimeArray,
                        label: "Time in secs",
                        backgroundColor:["#df2080","#df2080","#df2080","#df2080","#df2080"]
                    }
                ]
            }
        });
    }


    handleSubmitForMovieRevenuePerYear = (events) =>{
        events.preventDefault();
        let year=this.state.year;
        var movieMap= new Map();
        this.state.masterRepo.map(function(log){ 
        if(log.movie !=null && log.movie!=="" && log.bookingdate !=null && log.bookingdate.split("-")[0]===year){
            if(movieMap.has(log.movie)){
                movieMap.set(log.movie, movieMap.get(log.movie)+log.moviebooking);
            }else{
                movieMap.set(log.movie,log.moviebooking);
            }
        }
        });

        console.log("MAP:",movieMap);
        
        
        var array = [];
        let keys = Array.from(movieMap.keys());
        keys.map(function(key){
        array.push({
            name: key,
            value: movieMap.get(key)
            });
        });

        console.log("ARRAY:",array);

        var sorted = array.sort(function(a, b) {
        return (a.value < b.value) ? 1 : ((b.value < a.value) ? -1 : 0)
        });

     
        let slicedMovieArray=[];
        console.log("Sorted length",sorted.length);
        if(sorted.length>=10){
            slicedMovieArray =sorted.slice(0,10);
         }else{
            for(var j=0;j<sorted.length;j++){
                slicedMovieArray.push(sorted[j]);
            }
             for(var i=0;i<(10-sorted.length);i++){
                slicedMovieArray.push({
                    name:"unavailable",
                    value:0
                });
             }
         }
       
         console.log("Sliced Array",slicedMovieArray);
        this.setState({
            ...this.state,
            topMoviesRevenuePerYear:{
                labels:[slicedMovieArray[0].name, slicedMovieArray[1].name, slicedMovieArray[2].name,
                slicedMovieArray[3].name,slicedMovieArray[4].name,slicedMovieArray[5].name,slicedMovieArray[6].name,slicedMovieArray[7].name,
                slicedMovieArray[8].name,slicedMovieArray[9].name
            ],
                datasets:[
                    {
                        data:[slicedMovieArray[0].value,slicedMovieArray[1].value,slicedMovieArray[2].value,slicedMovieArray[3].value,
                        slicedMovieArray[4].value,slicedMovieArray[5].value,slicedMovieArray[6].value,slicedMovieArray[7].value,
                        slicedMovieArray[8].value,slicedMovieArray[9].value
                    ],
                        label: "Revenue per movie",
                        backgroundColor:["#df2080","#df2080","#df2080","#df2080","#df2080",
                        "#df2080","#df2080","#df2080","#df2080","#df2080"
                    ]
                    }
                ]
            }
        });
    }


    handleSubmitForMovieRevenuePerCityPerYear = (events) =>{
        events.preventDefault();
        let year=this.state.movieYear;
        let movie=this.state.movie;
        var cityMap= new Map();

    
        this.state.masterRepo.map(function(log){ 

            console.log("Here",log.movie!=null && log.movie.toUpperCase()===movie.toUpperCase() && log.bookingdate!=null && log.bookingdate.split("-")[0]===year);
        if(log.movie!=null && log.movie!="" && log.movie.toUpperCase()===movie.toUpperCase() && log.bookingdate!=null && log.bookingdate.split("-")[0]===year){
            if(cityMap.has(log.city)){
                cityMap.set(log.city, cityMap.get(log.city)+log.moviebooking);
            }else{
                cityMap.set(log.city,log.moviebooking);
            }
        }
        });

        console.log("MAP:",cityMap);
        
        
        var array = [];
        let keys = Array.from(cityMap.keys());
        keys.map(function(key){
        array.push({
            name: key,
            value: cityMap.get(key)
            });
        });

        console.log("ARRAY:",array);

        var sorted = array.sort(function(a, b) {
        return (a.value < b.value) ? 1 : ((b.value < a.value) ? -1 : 0)
        });

     
        let slicedMovieArray=[];
        console.log("Sorted length",sorted.length);
        if(sorted.length>=10){
            slicedMovieArray =sorted.slice(0,10);
         }else{
            for(var j=0;j<sorted.length;j++){
                slicedMovieArray.push(sorted[j]);
            }
             for(var i=0;i<(10-sorted.length);i++){
                slicedMovieArray.push({
                    name:"unavailable",
                    value:0
                });
             }
         }
       
        
        this.setState({
            ...this.state,
            topCitiesRevenuePerMoviePerYear:{
                labels:[slicedMovieArray[0].name, slicedMovieArray[1].name, slicedMovieArray[2].name,
                slicedMovieArray[3].name,slicedMovieArray[4].name,slicedMovieArray[5].name,slicedMovieArray[6].name,slicedMovieArray[7].name,
                slicedMovieArray[8].name,slicedMovieArray[9].name
            ],
                datasets:[
                    {
                        data:[slicedMovieArray[0].value,slicedMovieArray[1].value,slicedMovieArray[2].value,slicedMovieArray[3].value,
                        slicedMovieArray[4].value,slicedMovieArray[5].value,slicedMovieArray[6].value,slicedMovieArray[7].value,
                        slicedMovieArray[8].value,slicedMovieArray[9].value
                    ],
                        label: "Revenue per city per year",
                        backgroundColor:["#df2080","#df2080","#df2080","#df2080","#df2080",
                        "#df2080","#df2080","#df2080","#df2080","#df2080"
                    ]
                    }
                ]
            }
        });
    }


    componentWillMount(){
        console.log("Inside will mount");
        axios.get('http://localhost:8900/logs')
        .then((response)=>{
            console.log("Response in will mount",response);
            this.setState({
                masterRepo:response.data
            });
            
        });
        
       
    }


    




    render(){


        let redirectVar = null;
        if(!localStorage.getItem('userid')){
            redirectVar = <Redirect to= "/signin" />
        }
        console.log("Data receieved: inside render ",this.state.masterRepo);

        var date=new Date();
        console.log(date.toLocaleDateString());
        var arr=date.toLocaleDateString().split("/");
        var month=Number(arr[0])-1;
        console.log("Month", month);
        var hallMap=new Map();
        var hallBookingMap=new Map();
        var movieMap=new Map();
        var movieClickMap=new Map();

        let pagesTimeArray=[0,0,0,0,0];
        let pageClicks=[0,0,0,0,0];
        if(this.state.masterRepo){
        this.state.masterRepo.map(function(log){ 
            if(log.page!=null && log.page==="home"){
                pagesTimeArray[0]+=(log.time);
            }else  if(log.page!=null &&log.page==="movies"){
                pagesTimeArray[1]+=(log.time);
            }else if(log.page!=null &&log.page==="moviedetails"){
                pagesTimeArray[2]+=(log.time);
            }else if(log.page!=null &&log.page==="ticketbooking"){
                pagesTimeArray[3]+=(log.time);
            }else if(log.page!=null && log.page==="checkout"){
                pagesTimeArray[4]+=(log.time);
            }
            

            


            if(log.page!=null && log.page==="home"){
                pageClicks[0]+=log.pageclick;
            }else  if(log.page!=null && log.page==="movies"){
                pageClicks[1]+=log.pageclick;
            }else if(log.page!=null && log.page==="moviedetails"){
                pageClicks[2]+=log.pageclick;
            }else if(log.page!=null && log.page==="ticketbooking"){
                pageClicks[3]+=log.pageclick;
            }else if(log.page!=null && log.page==="checkout"){
                pageClicks[4]+=log.pageclick;
            }

            console.log("condition",Number(log.bookingdate.split("-")[1])==month);
            if(log.hall!=null && log.hall !=="" && log.bookingdate!=null && Number(log.bookingdate.split("-")[1])==month){
                if(hallMap.has(log.hall)){
                        hallMap.set(log.hall, hallMap.get(log.hall)+log.hallbooking);
                        hallBookingMap.set(log.hall, hallMap.get(log.hallticketcount)+log.hallticketcount);
                }else{
                        hallMap.set(log.hall,log.hallbooking);
                        hallBookingMap.set(log.hall,log.hallticketcount);
                    }
                }
        });

    }
    let min=pagesTimeArray[0];
    let index=0;
    for(var i=1;i<pagesTimeArray.length;i++){
        if(pagesTimeArray[i]<min){
            min=pagesTimeArray[i];
            index=i;
        }
    }

    let pageName='';
    if(index===0){
        pageName="Home";
    }else if(index===1){
        pageName="Movies";   
    }else if(index===2){
        pageName="Movie Details";   
    }else if(index===3){
        pageName="Ticket Booking";   
    }else{
        pageName="CheckOut";
    }

    console.log(
        "hallMap",hallMap
    );

    console.log(
        "hallBookingMap", hallBookingMap
    );
    var array = [];
    var array2=[];
    let keys = Array.from(hallBookingMap.keys());
    keys.map(function(key){
    array.push({
        name: key,
        tickets: hallBookingMap.get(key),
        revenue:hallMap.get(key)
        });
    });
    var sorted = array.sort(function(a, b) {
        return (a.tickets < b.tickets) ? 1 : ((b.tickets < a.tickets) ? -1 : 0)
        });

        let slicedMovieArray=[];
        console.log("Sorted length",sorted.length);
        if(sorted.length>=10){
            slicedMovieArray =sorted.slice(0,10);
         }else{
            for(var j=0;j<sorted.length;j++){
                slicedMovieArray.push(sorted[j]);
            }
             for(var i=0;i<(10-sorted.length);i++){
                slicedMovieArray.push({
                    name:"unavailable",
                    revenue:0,
                    revenue:0
                });
             }
         }


       const  topHallsByRevenue={
            labels:[slicedMovieArray[0].name, slicedMovieArray[1].name, slicedMovieArray[2].name,
            slicedMovieArray[3].name,slicedMovieArray[4].name,slicedMovieArray[5].name,slicedMovieArray[6].name,slicedMovieArray[7].name,
            slicedMovieArray[8].name,slicedMovieArray[9].name
        ],
            datasets:[{
                label: 'Revenue for last month',
                type:'bar',
                data: [slicedMovieArray[0].revenue, slicedMovieArray[1].revenue, slicedMovieArray[2].revenue,
                slicedMovieArray[3].revenue,slicedMovieArray[4].revenue,slicedMovieArray[5].revenue,slicedMovieArray[6].revenue,slicedMovieArray[7].revenue,
                slicedMovieArray[8].revenue,slicedMovieArray[9].revenue],
                fill: false,
                borderColor: '#4FC3F7',
                backgroundColor: '#4FC3F7',
                pointBorderColor: '#4FC3F7',
                pointBackgroundColor: '#4FC3F7',
                pointHoverBackgroundColor: '#4FC3F7',
                pointHoverBorderColor: '#4FC3F7',
                
              },
              {
                label: 'Tickets Sold',
                type:'bar',
                data: [slicedMovieArray[0].tickets, slicedMovieArray[1].tickets, slicedMovieArray[2].tickets,
                slicedMovieArray[3].tickets,slicedMovieArray[4].tickets,slicedMovieArray[5].tickets,slicedMovieArray[6].tickets,slicedMovieArray[7].tickets,
                slicedMovieArray[8].tickets,slicedMovieArray[9].tickets],
                fill: false,
                borderColor: '#EC932F',
                backgroundColor: '#EC932F',
                pointBorderColor: '#EC932F',
                pointBackgroundColor: '#EC932F',
                pointHoverBackgroundColor: '#EC932F',
                pointHoverBorderColor: '#EC932F',
                
              }]
        }


        const pageTrace={
            labels:["Home", "Movies","Movie Details", "Ticket Booking", "Checkout"],
            datasets:[
                {
                    data:pagesTimeArray,
                    label: "Time in secs",
                    backgroundColor:["#0080ff","#0080ff","#0080ff","#0080ff","#0080ff"]
                }
            ]
        }

        const options={
            responsive:true
        }
   
       


      let  clicks={
            labels: [
                'Home',
                'Movies',
                'Movie Details',
                'Ticket Booking',
                'Checkout'
            ],
            datasets: [{
                data: pageClicks,
                label: "Page Clicks",
                backgroundColor:["#F7464A","#46BFBD","#4000ff","#ffff00","#00ffff"]                
            }]
        }
        return (

            <div id="siteContainer" className="ticketBoxoffice">
             {redirectVar}
            <div id="headerContainer" class="purchase detail on-order" name="HeaderContainer">
                <div id="headerPurchase">
                    <div className="commonContainer"> 
                        <div id="logo">
                            <a href="/" title="Click to go to Fandango homepage">Fandango Home</a>
                        </div>
                        <div id="bannerMessage">You're a guaranteed ticket away from the perfect movie night.</div>
                    </div>
                </div>
            </div>

             <h1><b>Admin Dashboard</b></h1>
                <div className="container">
              
                <div className="row">
s                    <h4><b>Complete Trace Bar chart</b></h4>
                    <div className="col-xs-6">
                         <Bar data={pageTrace} options={options}/>
                    </div>   
                    <div className="col-xs-6">
                       
                        <h1><b>Less Seen Page:</b>
                            <span className="page-header-emphasis"><b>{pageName}</b></span>
                        </h1>
                        </div>
                    </div>
                    </div>

               <br></br>
               <div className="row">
                    <div className="col-xs-6"> 
                            <h4><b>Trace Bar Chart for  group of users per city</b></h4>
                            <Bar data={this.state.pageTraceCity} options={options}/>
                            <form onSubmit = {this.handleSubmitForCity}> 
                           <table>
                               <tr>
                                
                                <td ><input type="text"  name="city" value={this.state.cityName} onChange = {this.handleChange}   placeholder="City"/></td>
                                <td ><button className="btn btn-lg btn-primary" type="submit">Show</button></td>
                                </tr>
                            </table>
                         </form>
                    </div>
                     
                    <div className="col-xs-6">
                        <h4><b>Trace Bar Chart for a particular user</b></h4>
                            <Bar data={this.state.pageTraceUser} options={options}/>
                           <table>
                               <tr>
                            <form onSubmit = {this.handleSubmitForUser}> 
                             <td>   <input type="text"  name="username" value={this.state.userName} onChange = {this.handleChange}   placeholder="Enter Username"/></td>
                              <td>  <button className="btn btn-lg btn-primary" type="submit">Show</button></td>
                         </form>
                         </tr>
                         </table>
                    </div>
                   
                    
                    </div>
                    <div className="row">
                    <div className="col-xs-6">
                        <h4><b>Rating graph for a movie</b></h4>
                            <Line data={this.state.movieRating} options={options}/>
                           <table>
                               <tr>
                            <form onSubmit = {this.handleSubmitForMovie}> 
                             <td>   <input type="text"  name="moviename" value={this.state.movieName} onChange = {this.handleChange}   placeholder="Enter Movie Name"/></td>
                              <td>  <button className="btn btn-lg btn-primary" type="submit">Show</button></td>
                         </form>
                         </tr>
                         </table>
                    </div>

                    <div className="col-xs-6">
                        <h4><b>Graph for top 10 movies by revenue per year</b></h4>
                            <Bar data={this.state.topMoviesRevenuePerYear} options={options}/>
                           <table>
                               <tr>
                            <form onSubmit = {this.handleSubmitForMovieRevenuePerYear}> 
                             <td><input type="text"  name="year" value={this.state.year} onChange = {this.handleChange}   placeholder="Enter Year"/></td>
                              <td><button className="btn btn-lg btn-primary" type="submit">Show</button></td>
                         </form>
                         </tr>
                         </table>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-6">
                        <h4><b>Graph for top 10 cities by revenue per year for a movie</b></h4>
                            <Bar data={this.state.topCitiesRevenuePerMoviePerYear} options={options}/>
                           <table>
                               <tr>
                            <form onSubmit = {this.handleSubmitForMovieRevenuePerCityPerYear}> 
                             <td>   <input type="text"  name="movie" value={this.state.movie} onChange = {this.handleChange}   placeholder="Enter Movie Name"/></td>
                             <td>   <input type="text"  name="movieYear" value={this.state.movieYear} onChange = {this.handleChange}   placeholder="Enter Year"/></td>
                              <td>  <button className="btn btn-lg btn-primary" type="submit">Show</button></td>
                         </form>
                         </tr>
                         </table>
                    </div>

                     <div className="col-xs-6">
                     <h4><b>Top 10 halls who sold max tickets and their revenue last month</b></h4>
                            <Bar data={topHallsByRevenue} options={options}/>
                     </div>
                </div>
                <div className="row">
                    <div className="col-xs-6">
                            <h4><b> Pie Chart for clicks per page</b></h4>
                            <Pie  data={clicks} options={options} />
                    </div>
                </div>
                
            </div>
        );

    }
}

