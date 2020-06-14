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
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

const RecentOfficeBoard = (props) => {
  return (
    <div className="recentoffice-board d-flex flex-column">
      {props.data.map(item => 
        <div className="d-flex align-items-center">
          <div className="portrait-wrapper">
            <img height="100%" src={item.portrait} />
          </div>
          <div style={{ width: `20%` }}  className="item">
            {item.address}
          </div>
          <div style={{ width: `25%` }}  className="item pre-dot">
            {item.duration} Months lease
          </div>
          <div style={{ width: `15%` }}  className="item pre-dot">
            {item.rooms} Rooms
          </div>
          <div style={{ width: `30%` }} className="item pre-dot">
            {item.type}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentOfficeBoard;
