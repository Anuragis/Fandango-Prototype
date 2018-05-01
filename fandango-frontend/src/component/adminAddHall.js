import React,{Component} from 'react';
import axios from 'axios';
import '../css/admin.css';
import {Link} from 'react-router-dom';

class hall extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        hallName: '',
        hallAddress: '',
        hallCity: '',
        hallZipCode: '',
        hallState: '',
        hallPrice : '',
        hallNameError:'',
        zipCodeError:'',
        stateError:'',
        screenCount:'',
        screensArray:[],
        screens:{
            movieTimings:[],
            movieName:"",
            movieRating:"",
            movieLength:"",
            movieCategory:"",
            price:""
        },
        hallData : [],
        newScreenID : "",
        newScreenName : "",
        newScreenTime : "",
        newScreenDate : "",
      }
       
      
    }

    validate = () => {
      let isError = false;
      const errors = {
        firstNameError: "",
        emailError: "",
        zipCodeError: "",
        stateError: "",
        cardNumberError:""
      };
      
      if (this.state.hallName.length ===0) {
        isError = true;
        errors.hallNameError = "First Name cannot be empty";
      }

      
      var isZipValid = /\d{5}-\d{4}$|^\d{5}$/.test(this.state.hallZipCode);

      if(!isZipValid){
        isError = true;
        errors.zipCodeError = "Invalid Zip Code, enter in either xxxx or xxxxx-xxxx format";
      }

     var isStateValid=/^(AL|Alabama|alabama|AK|Alaska|alaska|AZ|Arizona|arizona|AR|Arkansas|arkansas|CA|California|california|CO|Colorado|colorado|CT|Connecticut|connecticut|DE|Delaware|delaware|FL|Florida|florida|GA|Georgia|georgia|HI|Hawaii|hawaii|ID|Idaho|idaho|IL|Illinois|illinois|IN|Indiana|indiana|IA|Iowa|iowa|KS|Kansas|kansas|KY|Kentucky|kentucky|LA|Louisiana|louisiana|ME|Maine|maine|MD|Maryland|maryland|MA|Massachusetts|massachusetts|MI|Michigan|michigan|MN|Minnesota|minnesota|MS|Mississippi|mississippi|MO|Missouri|missouri|MT|Montana|montana|NE|Nebraska|nebraska|NV|Nevada|nevada|NH|New Hampshire|new hampshire|NJ|New Jersey|new jersey|NM|New Mexico|new mexico|NY|New York|new york|NC|North Carolina|new carolina|ND|North Dakota|north dakota|OH|Ohio|ohio|OK|Oklahoma|oklahoma|OR|Oregon|oregon|PA|Pennsylvania|pennsylvania|RI|Rhode Island|rhode island|SC|South Carolina|south carolina|SD|South Dakota|south dakota|TN|Tennessee|tennessee|TX|Texas|texas|UT|Utah|utah|VT|Vermont|vermont|VA|Virginia|virginia|WA|Washington|washington|WV|West Virginia|west virginia|WI|Wisconsin|wisconsin|WY|Wyoming|wyoming)$/.test(this.state.hallState);

      if(!isStateValid){
        isError = true;
        errors.stateError = "Invalid State Abbrevation";
      }
      this.setState({
        ...this.state,
        ...errors
      });
  
      return isError;
    };

    componentWillMount(){

        if(this.props.location.state.id!="0"){
        var url = 'http://localhost:8900/hallById/' + this.props.location.state.id;
        
        axios(url, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }).then((res) => {
            this.setState({
                hallData : this.state.hallData.concat(res.data[0]),
                hallName: res.data[0].hallName, 
                hallAddress: res.data[0].hallAddress,
                hallCity: res.data[0].hallCity,
                hallZipCode: res.data[0].hallZipCode,
                hallState: res.data[0].hallState,
                screenCount:res.data[0].screens.length,
                hallPrice : res.data[0].hallPrice,
                screens:res.data[0].screens
                });
            }
          )
        }


    }
    
 
  
  AddScreen = (e) =>{
    console.log("Hall ID : ", this.props.location.state.id);
    let hallObj = this.state.hallData;
    let newScreenID = this.state.newScreenID, newScreenName = this.state.newScreenName, newScreenTime = this.state.newScreenTime;
    let newScreenDate = this.state.newScreenDate;
    var screenUpdate = 0;
    this.state.hallData.map(hall => {
        hall.screens.map(screen => {
            if(screen.movieName == newScreenName){
                screenUpdate = 1;
                return;
            }
        })
    }) 
    console.log("After return : ", screenUpdate);
      if(screenUpdate == 1){
          var seatArr = [];
          for(var i=0;i<169;i++){
            seatArr[i]=0;
            if(i==108 || i==109 || i==110 || i==111 || i==114 || i==115 || i==116 || i==117)
              seatArr[i]=2;
          }
          let screenObj = {
              'seats' : seatArr,
              'movieTime' : newScreenTime,
              'screenID' : newScreenID,
              'movieDate' : newScreenDate
          };
          hallObj = hallObj.map(hall=>{
            console.log("Hall : ", hall);
            hall.screens = hall.screens.map(screen =>{
              console.log("Screens :",screen);
              
              if(screen.movieName == newScreenName){
               
                  screen.movieTimings.push(screenObj);
              
              }
              return screen;
            })
            return hall;
          })
          console.log("Added New Screen : ",hallObj);
          var url = 'http://localhost:8900/hall/' + this.props.location.state.id;
          axios(url, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data : hallObj
          }).then((res) =>{
              console.log("New Screen Added to existing Hall");
          });
      }else{
        let hallObj = this.state.hallData;
        var url = 'http://localhost:8900/movieByName/' + newScreenName;
        axios(url, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }).then((res) => {
              console.log("Movie Data : ", res.data);
              let movieData = res.data[0];
              var seatArr = [];
              for(var i=0;i<169;i++){
                seatArr[i]=0;
                if(i==108 || i==109 || i==110 || i==111 || i==114 || i==115 || i==116 || i==117)
                  seatArr[i]=2;
              }
              let sObj = {
                  'seats' : seatArr,
                  'movieTime' : newScreenTime,
                  'screenID' : newScreenID,
                  'movieDate': newScreenDate
              };
              let screenObj =[];
              screenObj.push(sObj);
              let NewScreenObj = {
                  'movieCategory' : movieData.movieCategory,
                  'movieLength' : movieData.movieLength,
                  'movieName' : movieData.movieTitle,
                  'movieRating' : movieData.movieRating,
                  'moviePhoto' : movieData.moviePhoto,
                  'movieTimings' : screenObj
              }
              hallObj = hallObj.map(hall=>{
                console.log("Hall : ", hall);
                hall.screens.push(NewScreenObj);
                return hall;
              });
              console.log("Added New Screen : ",hallObj);
              var url = 'http://localhost:8900/hall/' + this.props.location.state.id;
              axios(url, {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                data : hallObj
              }).then((res) =>{
                  console.log("New Screen Added to existing Hall");
                  alert("Screen AddedSuccessfully !!!!"); 
              });
            })
      }   
      
    }

    handleLoopScreenID = (e,screenIndex,timeIndex) => {
      let hallObj = this.state.hallData;
      hallObj = hallObj.map(hall=>{
        
        hall.screens = hall.screens.map((screen,sIndex) =>{
          if(sIndex == screenIndex){
            screen.movieTimings = screen.movieTimings.map((time,tIndex) => {
                if(tIndex == timeIndex){
                  time.screenID = e.target.value;
                }
                return time;
            })
          }
          return screen;
        })
        return hall;
      })
      this.setState({
        hallData : hallObj
      })
      console.log("New Hall Obj",hallObj);
    }

    handleLoopMovieDate = (e,screenIndex,timeIndex) => {
      let hallObj = this.state.hallData;
      hallObj = hallObj.map(hall=>{
        hall.screens = hall.screens.map((screen,sIndex) =>{
          if(sIndex == screenIndex){
            screen.movieTimings = screen.movieTimings.map((time,tIndex) => {
                if(tIndex == timeIndex){
                  time.movieDate = e.target.value;
                }
                return time;
            })
          }
          return screen;
        })
        return hall;
      })
      this.setState({
        hallData : hallObj
      })
      console.log("New Hall Obj",hallObj);
    }


    handleLoopMovieTime = (e,screenIndex,timeIndex) => {
      let hallObj = this.state.hallData;
      hallObj = hallObj.map(hall=>{
        hall.screens = hall.screens.map((screen,sIndex) =>{
          if(sIndex == screenIndex){
            screen.movieTimings = screen.movieTimings.map((time,tIndex) => {
                if(tIndex == timeIndex){
                  time.movieTime = e.target.value;
                }
                return time;
            })
          }
          return screen;
        })
        return hall;
      })
      this.setState({
        hallData : hallObj
      })
      console.log("New Hall Obj",hallObj);
    }

    handleLoopMovieName = (e,screenIndex) =>{
      let hallObj = this.state.hallData;
      hallObj = hallObj.map(hall=>{
        hall.screens = hall.screens.map((screen,sIndex) =>{
          if(sIndex == screenIndex){
            screen.movieName = e.target.value;
          }
          return screen;
        })
        return hall;
      })
      this.setState({
        hallData : hallObj
      })
      console.log("New Hall Obj",hallObj);
    }

    AddScreenID = (e) =>{
      this.setState({
        newScreenID : e.target.value
      })
    }

    AddMovieName = (e) => {
      this.setState({
        newScreenName : e.target.value
      })
    }

    AddMovieTime(e){
      this.setState({
        newScreenTime : e.target.value
      })
    }
    AddMovieDate(e){
      this.setState({
        newScreenDate : e.target.value
      })
    }

    handleAddHall(e){
        var resData = {
          hallName : this.state.hallName,
          hallAddress :this.state.hallAddress,
          hallCity : this.state.hallCity,
          hallState : this.state.hallState,
          hallZipCode : this.state.hallZipCode,
          hallPrice : this.state.hallPrice,
          screens : []
        }
        var url = 'http://localhost:8900/hall';
        axios(url, {
          method: 'POST',
          mode: 'cors',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          data : resData
        }).then((res) =>{
            console.log("Response Data : ", res.data);
            console.log("New Screen Added to existing Hall");
        });
    }

    handleUpdateHall(e){
      console.log("Screens : ",this.state.hallData[0].screens);
      var hallObj = []
      var hallRes = {
        hallName : this.state.hallName,
        hallAddress :this.state.hallAddress,
        hallCity : this.state.hallCity,
        hallState : this.state.hallState,
        hallZipCode : this.state.hallZipCode,
        hallPrice : this.state.hallPrice,
        screens : this.state.hallData[0].screens,
        status : "active"
      }
      hallObj.push(hallRes);
      var url = 'http://localhost:8900/hall/' + this.props.location.state.id;
          axios(url, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data : hallObj
          }).then((res) =>{
              console.log("New Screen Added to existing Hall");
              alert("Hall Data Updated!!!!");
          });
      console.log("Updated Obj : ", hallRes);
    }
  render() {
      
    console.log("Response Data Recieved : ", this.state.hallData);
    let displayScreens="";
    let displayButton="";
    let addScreenButton = "";
    let screensArray=[];
    let screensData = null, timings = null,movieData = null;
    if(this.state.hallData.length > 0){
      screensData = this.state.hallData.map(hall => {
        movieData = hall.screens.map((screen, screenIndex) => {
          timings = screen.movieTimings.map((time,timeIndex) =>{
            return(
              <div>
                <div className="form-group">
                  <label>Screen ID</label> 
                      <input onChange = {(e) => this.handleLoopScreenID(e,screenIndex,timeIndex)}  type="text" className="form-control" placeholder="Screen ID" value={time.screenID} required />
                </div>
                <div className="form-group">
                  <label>Movie Time</label> 
                      <input onChange = {(e) => this.handleLoopMovieTime(e,screenIndex,timeIndex)} type="text" className="form-control" placeholder="Movie Time" value={time.movieTime} required />
                </div> 
                <div className="form-group">
                  <label>Movie Date</label> 
                      <input onChange = {(e) => this.handleLoopMovieDate(e,screenIndex,timeIndex)} type="text" className="form-control" placeholder="Movie Time" value={time.movieDate} required />
                </div> 
              </div>
            )
          })
          return(
            <div> 
              <div className="form-group">
                  <label>Movie Name</label> 
                      <input onChange = {(e) => this.handleLoopMovieName(e,screenIndex)} type="text" className="form-control" placeholder="Movie Time" value={screen.movieName} required />
                </div> 
              {timings}
            </div>
          )
        })
      });
    }
    /**this.state.screens.map(function(screen){
        screensArray.push(screen);
    });*/


   
      if(this.props.location.state.id==="0") {
        displayButton=(<button onClick = {(e) => this.handleAddHall(e)} type="button" id="submit" name="submit" className="btn btn-primary pull-right" >Create</button>);
      }else{
        displayButton=(<button onClick = {(e) => this.handleUpdateHall(e)} type="button" id="submit" name="submit" className="btn btn-primary pull-right"> Update</button>);
        addScreenButton = (
          <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add a Screen</button>
                
        )
      };
     
      return (
        <div >
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
         <div className = "container">
          <div className = "row">
       

        <div className="col-md-9">
          <div className="form-area">  
              <form role="form">
                <br styles="clear:both" />
                <div className="form-group">
                  <p className="errMsg">{this.state.hallNameError}</p>
                  <input  type="text" className="form-control" placeholder="Hall Name" value={this.state.hallName} onChange={(event)=>{
                    this.setState({hallName: event.target.value,hallNameError:"",message:""});
                  }}  required />
                </div>
                <div className="form-group">
                  <input  type="text" className="form-control" placeholder="Address" value={this.state.hallAddress} onChange={(event)=>{
                    this.setState({hallAddress: event.target.value,message:""});
                  }} required />
                </div>
                <div className="form-group">
                  <input  type="text" className="form-control" placeholder="City" value={this.state.hallCity} onChange={(event)=>{
                    this.setState({hallCity: event.target.value,message:""});
                  }} required />
                </div>
                <div className="form-group">
                <p className="errMsg">{this.state.stateError}</p>
                  <input  type="text" className="form-control" placeholder="State" value={this.state.hallState} onChange={(event)=>{
                    this.setState({hallState: event.target.value,message:"",stateError:""});
                  }} required />
                </div>
                <div className="form-group">
                <p className="errMsg">{this.state.zipCodeError}</p>
                  <input  type="text" className="form-control" placeholder="Zip Code" value={this.state.hallZipCode} onChange={(event)=>{
                    this.setState({hallZipCode: event.target.value,zipCodeError:"",message:""});
                  }} required />
                </div>

                <div className="form-group">
                <p className="errMsg">{this.state.zipCodeError}</p>
                  <input  type="text" className="form-control" placeholder="Hall Price" value={this.state.hallPrice} onChange={(event)=>{
                    this.setState({hallPrice: event.target.value,message:""});
                  }} required />
                </div>

                {/*<div className="form-group">*}
                 {
                   
                   /*screensArray.map((screen) => {
                    
                    return(
                        <div className="form-group">
                        <input  type="text" className="form-control" placeholder="Screen Count" value={screen.movieName} onChange={(event)=>{
                          this.setState({screenCount: event.target.value.trim(),message:""});
                        }} required />
                      </div>
                    )
                
                    })
                */movieData}  
                {/*</div>*/}
                {displayButton}
                {addScreenButton}
                <div class="modal fade" id="myModal" role="dialog">
	<div class="modal-dialog">
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal">&times;</button>
			<h4 class="modal-title">Add a new Screen</h4>
		</div>
		
	<br/>
	
	<div class="modal-body">
		<div className="form-group">
            <label>Screen ID</label> 
            <input onChange = {(e) => this.AddScreenID(e)} type="text" className="form-control" placeholder="Screen ID"  required />
        </div>
		<div className="form-group">
            <label>Movie Name</label> 
            <input onChange = {(e) => this.AddMovieName(e)} type="text" className="form-control" placeholder="Movie Name"  required />
        </div>
		<div className="form-group">
            <label>Movie Time</label> 
            <input onChange = {(e) => this.AddMovieTime(e)} type="text" className="form-control" placeholder="Movie Time"  required />
        </div>
    		<div className="form-group">
            <label>Movie Date</label> 
            <input onChange = {(e) => this.AddMovieDate(e)} type="text" className="form-control" placeholder="Movie Date"  required />
        </div>
	</div>
	<div class="modal-footer">
		<Link to = "" onClick = {(e) => this.AddScreen(e)} type="button" class="btn btn-default" data-dismiss="modal">Submit</Link>
	</div>
	</div>
	
</div>
</div>
             </form>
              <div className="success">{this.state.message}</div>
              <br></br>
          </div>
        </div>

        </div>
        </div>
        </div>
      )
    }
}


export default hall;