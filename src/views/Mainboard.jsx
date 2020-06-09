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
import React from "react";
import {
  Row,
  Col
} from 'reactstrap';
import OfficePreview from 'components/OfficePreview/OfficePreview.jsx';
import OfficeChart from 'components/OfficePreview/OfficeChart.jsx';
import RecentOfficePreview from 'components/OfficePreview/RecentOfficePreview.jsx';

class Mainboard extends React.Component {
  render() {
    return (
        <Row style={{height: '100%'}}>
          <Col className='' md={6} style={{maxWidth: '56%', minWidth: '56%'}}>
            <Row className="flex-column d-flex" style={{height: '100%'}}>
              <Col className='flex'>
                <Row style={{height: '100%'}}>
                  <Col md={6} className="pr-2 d-flex flex-column">
                    <label style={{paddingBottom: 27, margin: 0, paddingLeft: 15}}>Dashboard</label>
                    <OfficeChart />
                  </Col>
                  <Col md={6} className="pl-2 d-flex flex-column">
                    <OfficePreview />
                  </Col>
                </Row>
              </Col>
              <Col className='flex'>
                <RecentOfficePreview />
              </Col>
            </Row>
          </Col>
          <Col className='' md={6} style={{maxWidth: '44%'}}>
            Canendar
          </Col>
        </Row>
    );
  }
}

export default Mainboard;
