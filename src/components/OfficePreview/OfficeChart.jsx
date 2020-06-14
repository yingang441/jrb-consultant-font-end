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

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faLock, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'react-google-charts'

const OfficeChart = () => {
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
    <div className="officechart-container">
      <p>Available office space in Toronto</p>
      <Slider {...settings}>
        <div>
          <Chart
            width={'100%'}
            height={'150px'}
            style={{ backgroundColor: 'transparent' }}
            chartType="BarChart"
            loader={
              <div>Loading Chart</div>
            }
            data={[
              [
                'Element',
                'Density',
                { role: 'style' },
                {
                  sourceColumn: 0,
                  role: 'annotation',
                  type: 'string',
                  calc: 'stringify',
                },
              ],
              ['Downtown', 8.94, '#b87333', null],
              ['Midtown', 10.49, 'silver', null],
              ['Suburbs', 19.3, 'gold', null],
            ]}
            options={{
              background: 'transparent',
              width: '100%',
              height: 170,
              bar: { groupWidth: '95%' },
              legend: { position: 'none' },
            }}
            // For tests
            rootProps={{ 'data-testid': '6' }}
          />              
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Slider>
      <Link
        to="/admin/tasks"
        style={{width: 100}}
        className="btn-report d-flex ml-auto mr-0 mb-3 jrb-button hv-jrb-green px-1 d-flex align-items-center justify-content-center px-3 py-2" md="4"
      >
        <FontAwesomeIcon size={15} icon={faChartLine} style={{marginRight: 14, color: `$jrb-black-color`}}/>
        <Link style={{color: '$jrb-black-color'}}>Report</Link>
      </Link>
    </div>
  );
};

export default OfficeChart;
