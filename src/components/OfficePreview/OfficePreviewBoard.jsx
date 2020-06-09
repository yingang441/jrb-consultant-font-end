/*!

=========================================================
* JRB Consultant - 2020
=========================================================

* *
* Copyright 2020 
**

* Coded by Yin

=========================================================



*/
/*eslint-disable*/
import React from "react";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';

class OfficePreviewBoard extends React.Component {
  render() {
  
      const settings = {
        dots: true,
        arrows: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => {
          return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={8} />;
        }
      };
   
      return (
        <div className="office-preview-item" style={{borderRadius: 30}}>
          <img src={this.props.data.portrait} width={'100%'}/>
          <div className="pb-0 pt-0" style={{padding: 22}}>
            <p className="m-0 pt-4 pb-1" style={{fontSize: 15}}>{this.props.data.address}</p>
            <p className="m-0 p-0 text-white" style={{fontSize: 13}}>{this.props.data.rooms} rooms, {this.props.data.duration} months lease</p>
            <p className="m-0 pt-4 text-white" style={{fontSize: 10}}>{this.props.data.type}</p>
            <span className="m-0 mt-1 px-2" style={{borderRadius: 10, fontSize: 11, backgroundColor: '#ddd'}}>${this.props.data.price}</span>
          </div>
        </div>
      );
  }
}

export default OfficePreviewBoard;
