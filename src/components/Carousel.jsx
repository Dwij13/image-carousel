import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
export default class Carousel extends Component {
    constructor(props) {
      super(props)
      this.state={
        count:0
      }
    }
    increase=()=>{
      if(this.state.count>=images.length-1){
          this.setState({
              count: 0
          })
      }else{
          this.setState({
              count: this.state.count+1
          })
      }
  }
  decrease=()=>{
      if(this.state.count<1){
          this.setState({
              count: 2
          })
      }else{
          this.setState({
              count: this.state.count-1
          })
      }
  }
    
  
    render() {
        return(
          <>
          <div className="carousel-container flex">
                  <div className="leftArrow arrowDiv flex" onClick={()=>this.decrease()}>
                      <ArrowBackIosIcon />
                  </div>
                  <h2 className="title">{images[this.state.count].title}</h2>
                  <img src={images[this.state.count].img} alt="" width="100px"/>
                  <h4 className="title title2">{images[this.state.count].subtitle}</h4>
                  <div className="rightArrow arrowDiv flex" onClick={()=>this.increase()}>
                      <ArrowForwardIosIcon />
                  </div>
          </div>        
      </>
    )
  }
}

