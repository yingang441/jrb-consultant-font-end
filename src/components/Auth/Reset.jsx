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
import {
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Reset = () => {
  return (
    <div className="reset-screen container">
      <Form className="d-flex flex-column align-items-center">
        <Col className="px-1" md="4">
          <FormGroup>
            <Input
              className="text-center"
              defaultValue=""
              placeholder="Email Address"
              type="email"
            />
          </FormGroup>
        </Col>
        <Col className="px-1" md="4">
          <Row className="d-flex justify-content-between" style={{ padding: 18 }}>
            <div style={{ minWidth: 180 }} className="d-flex justify-content-end align-items-center jrb-button hv-jrb-yellow ml-auto p-2 px-3" >
              <Link to="">Reset password</Link> 
              <FontAwesomeIcon style={{ marginLeft: 19 }} icon={faChevronRight} />
            </div>
          </Row>
        </Col>
      </Form>
    </div>
  );
}

export default Reset;
