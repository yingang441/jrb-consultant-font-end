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
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

import Img from 'assets/img/office1.png'
import RecentOfficeBoard from './RecentOfficeboard';

const data = [
  {
    portrait: Img,
    address: '2012 King St',
    duration: '3-6',
    rooms: '5',
    type: 'Private office'
  },
  {
    portrait: Img,
    address: '1548 Yong St',
    duration: '6',
    rooms: '2',
    type: 'Office'
  },
  {
    portrait: Img,
    address: '2012 King St',
    duration: '2',
    rooms: '15',
    type: 'Private office'
  },
  {
    portrait: Img,
    address: '2012 Young St',
    duration: '12',
    rooms: '7',
    type: 'Assigned workstation'
  }
];

const RecentOfficePreview = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => {
      return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
    }
  };
   
  return (
    <div className="recentoffices-container">
      <div className="d-flex align-items-center justify-content-between">
        <p className="m-0">Most recent offices on your area</p>
        <button className="p-2 pr-3 jrb-button hv-jrb-green">
          <FontAwesomeIcon className="mx-2" icon={faMapPin} />
          View on map  
        </button>
      </div>
      <Slider {...settings}>
        <RecentOfficeBoard data={data}/>
        <RecentOfficeBoard data={data}/>
        <RecentOfficeBoard data={data}/>
      </Slider>
    </div>
  );
};

export default RecentOfficePreview;
