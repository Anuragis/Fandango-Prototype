
import React, { Component } from 'react';
import axios from 'axios';

class MovieSlide extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount(){
  
  }

  render() {
    return (
    <div>
      <section class="home-module">
        <section id="heroCarousel" class="nosferatu js-nosferatu">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="item active">
                <img src={require('../assets/images/img5.png')} alt="Test"  />
              </div>
              <div class="item">
                <img src={require('../assets/images/img6.png')} alt="Test"  />
              </div>
              <div class="item">
                <img src={require('../assets/images/img7.png')} alt="Test" />
              </div>
              <div class="item">
                <img src={require('../assets/images/img8.png')} alt="Test" />
              </div>
              <div class="item">
                <img src={require('../assets/images/img9.png')} alt="Test" />
              </div>
            </div>
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left arrows"></span>
            <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right arrows"></span>
            <span class="sr-only">Next</span>
            </a>
          </div>
        </section>
      </section>
    </div>
    )
  }
}



export default MovieSlide;
              