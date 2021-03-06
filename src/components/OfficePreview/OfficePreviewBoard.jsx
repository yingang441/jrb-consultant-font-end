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

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';

const OfficePreviewBoard = ({ data }) => {   
  return (
    <div className="office-preview-item" style={{ borderRadius: 30 }}>
      <img src={data.portrait} width={'100%'}/>
      <div className="pb-0 pt-0" style={{ padding: 22 }}>
        <p className="m-0 pt-4 pb-1" style={{ fontSize: 15 }}>{data.address}</p>
        <p className="m-0 p-0 text-white" style={{ fontSize: 13 }}>{data.rooms} rooms, {data.duration} months lease</p>
        <p className="m-0 pt-4 text-white" style={{ fontSize: 10 }}>{data.type}</p>
        <span className="m-0 mt-1 px-2" style={{ borderRadius: 10, fontSize: 11, backgroundColor: '#ddd' }}>${data.price}</span>
      </div>
    </div>
  );
};

export default OfficePreviewBoard;
