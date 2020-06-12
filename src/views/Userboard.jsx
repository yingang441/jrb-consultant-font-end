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
import { Row, Col } from 'reactstrap';
import UserTable from 'components/UserTable/UserTable.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

class Userboard extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column flex" style={{height: `100%`}}>
        <Row style={{paddingRight: 15, paddingLeft: 15}}>
          <Col>
            <p >Dashboard  >  User Management</p>
          </Col>
          <Col>
            <p style={{ textAlign: `right`}}>
              <FontAwesomeIcon icon={faChevronLeft } /> BACK
            </p>
          </Col>
        </Row>
        <UserTable />
      </div>
    );
  }
}

export default Userboard;
