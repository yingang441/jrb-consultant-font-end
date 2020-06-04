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
import { Link, Route, Switch, Redirect } from "react-router-dom";
import {
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faLock } from "@fortawesome/free-solid-svg-icons"

class Reset extends React.Component {

  render() {
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
              <Row class="d-flex justify-content-between" style={{padding: 18}}>
                <Col className="d-flex" style={{marginLeft: 17, minWidth: 160}}>
                </Col>
                <Col style={{minWidth: 180}} className="d-flex justify-content-end align-items-center" >
                  <Link to="">Reset password</Link> 
                  <FontAwesomeIcon style={{marginLeft: 19}} icon={faChevronRight} />
                </Col>
              </Row>
            </Col>
					</Form>
        </div>
    );
  }
}

export default Reset;
