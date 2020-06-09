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


// reactstrap components
import { Link } from "react-router-dom";

import {
    FormGroup,
    Form,
    Input,
    Row,
    Col
} from "reactstrap";
  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faLock } from "@fortawesome/free-solid-svg-icons"

class Login extends React.Component {

  render() {
    return (
        <div className="login-screen container">
					<Form className="d-flex flex-column align-items-center">
						<Col className="px-1" md="4">
							<FormGroup>
								<Input
									className="text-center"
									defaultValue=""
									placeholder="Username(6 Digit Consultant ID)"
									type="text"
								/>
							</FormGroup>
						</Col>
						<Col className="px-1" md="4">
							<FormGroup>
								<Input 
									className="text-center"
									placeholder="Password" 
									type="password" />
							</FormGroup>
						</Col>
            <Col className="px-1" md="4">
              <Row className="d-flex justify-content-between" style={{padding: 18}}>
                <Col className="d-flex align-items-center" style={{marginLeft: 17, minWidth: 160}}>
                    <Input style={{width: 17, height: 17, marginTop: 0}}type="checkbox" id="checkbox2" />
                    Trust this device
                </Col>
                <div className="d-flex justify-content-end align-items-center jrb-button hv-jrb-yellow px-3 py-2" >
                  <Link to="/admin">Login</Link>
                  <FontAwesomeIcon 
                    icon={faChevronRight} 
                    style={{marginLeft: 16}}
                  />
                </div>
              </Row>
            </Col>
            <div className="jrb-button hv-jrb-yellow px-1 d-flex align-items-center justify-content-center px-3 py-2" md="4">
              <FontAwesomeIcon size={15} icon={faLock} style={{marginRight: 16}}/>
              <Link to="/auth/reset">Reset password</Link>
            </div>
					</Form>
        </div>
    );
  }
}

export default Login;
