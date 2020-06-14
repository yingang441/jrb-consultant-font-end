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
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
import  OfficePreviewBoard  from "./OfficePreviewBoard.jsx";
import Img from 'assets/img/office1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faLock } from '@fortawesome/free-solid-svg-icons';

const data = [
  {
    portrait: Img,
    address: '2012 King St',
    duration: '3-6',
    rooms: '5',
    type: 'NOW AVAILABLE',
    price: 16500
  },
  {
    portrait: Img,
    address: '1548 Yong St',
    duration: '6',
    rooms: '2',
    type: 'NOT AVAILABLE',
    price: 6500
  },
  {
    portrait: Img,
    address: '2012 King St',
    duration: '2',
    rooms: '15',
    type: 'WAITING',
    price: 3500
  },
  {
    portrait: Img,
    address: '2012 Young St',
    duration: '12',
    rooms: '7',
    type: 'PENDING',
    price: 1500
  }
];

const OfficePreview = (props) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => {
      return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
    }
  };

  return (
    <div className="officepreview-container" style={{ borderRadius: 30 }}>
      <Slider {...settings} >
        {data.map(item => 
          <OfficePreviewBoard data={item} />
        )}
      </Slider>

      <Link
        to="/admin/companies"
        style={{ width: 100 }}
        className="d-flex ml-auto mr-3 mb-3 jrb-button hv-jrb-green px-1 d-flex align-items-center justify-content-center px-3 py-2" md="4"
      >
        <Link style={{ color: 'white' }}to="/admin/companies">Visit</Link>
        <FontAwesomeIcon size={15} icon={faChevronRight} style={{ marginLeft: 16, color: `white` }}/>
      </Link>
    </div>
  );
};

export default OfficePreview;
