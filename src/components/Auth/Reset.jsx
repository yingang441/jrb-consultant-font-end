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
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Alert,
  Button,
  FormGroup,
  Form,
  FormFeedback,
  Input,
  Row,
  Col
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { forgotPassword } from 'redux/actions/auth';
import { StyledContainer } from './Login.jsx';
import { validateEmail } from 'services/helper';

const Reset = () => {
  const dispatch = useDispatch();
  const { success, error, loading } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [dirty, setDirty] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setDirty(true);
    if (!email) return;
    if (!validateEmail(email)) return;
    dispatch(forgotPassword({ email }));
    setDirty(false);
  };

  return (
    <div className="reset-screen text-align-center">
      <Col className="px-1">
        <StyledContainer>
          <Form>
            <FormGroup className="mb-3">
              <Input
                id="email"
                name="email"
                className="text-center"
                disabled={loading}
                invalid={(dirty && !email) || (dirty && !validateEmail(email))}
                placeholder="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {(dirty && !email) && (
                <FormFeedback>
                  Email is required
                </FormFeedback>
              )}
              {(dirty && email && !validateEmail(email)) && (
                <FormFeedback>
                  Email is not valid
                </FormFeedback>
              )}
            </FormGroup>
            <div className="mb-3">
              <Button
                disabled={loading}
                style={{ minWidth: 180 }}
                className="d-flex justify-content-end align-items-center jrb-button hv-jrb-yellow ml-auto p-2 px-3"
                onClick={handleSubmit}
              >
                <span>Reset password</span>
                <FontAwesomeIcon style={{ marginLeft: 19 }} icon={faChevronRight} />
              </Button>
            </div>
            {(!loading && success && !error) && (
              <div>
                <Alert color="success">
                  {`Your new password has been sent to ${email}`}
                </Alert>
              </div>
            )}
            {(!loading && !success && error) && (
              <div>
                <Alert color="danger">
                  There is something wrong, Please contact <Link to="" className="alert-link">JRB support</Link>
                </Alert>
              </div>
            )}
          </Form>
        </StyledContainer>
      </Col>
    </div>
  );
}

export default Reset;
