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
import {
  Alert,
  Button,
  FormGroup,
  Form,
  FormFeedback,
  Input,
  Label,
  Row,
  Col,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faLock } from '@fortawesome/free-solid-svg-icons';
import { login } from 'redux/actions/auth';
import { validateEmail } from 'services/helper';

export const StyledContainer = styled.div`
  min-width: 360px;

  @media (max-width: 768px) {
    min-width: 0;
    max-width: 250px;
    margin: auto;
  }
`;

const Login = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [dirty, setDirty] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDirty(true);
    if (!email || ! password) return;
    if (!validateEmail(email)) return;
    dispatch(login({ email, password }));
    setDirty(false);
  };

  return (
    <div className="login-screen text-align-center">
      <Col className="px-1">
        <StyledContainer>
          <Form>
            <FormGroup autoComplete="off" className="mb-3">
              <Input
                id="email"
                name="email"
                autoComplete="off"
                className="text-center"
                disabled={loading}
                invalid={(dirty && !email) || (dirty && !validateEmail(email))}
                placeholder="Username(6 Digit Consultant ID)"
                type="text"
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
            <FormGroup className="mb-3">
              <Input
                id="password"
                name="password"
                autoComplete="new-password"
                className="text-center"
                disabled={loading}
                invalid={dirty && !password}
                placeholder="Password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {dirty && (
                <FormFeedback>
                  Password is required
                </FormFeedback>
              )}
            </FormGroup>
            <div className="d-flex justify-content-between mb-3">
              <Button
                className="jrb-button hv-jrb-yellow px-1 d-flex align-items-center justify-content-center px-3 py-2" md="4"
                disabled={loading}
              >
                <FontAwesomeIcon size={15} icon={faLock} style={{ marginRight: 16 }}/>
                <Link to="/auth/reset">Reset password</Link>
              </Button>
              <Button
                className="d-flex justify-content-end align-items-center jrb-button hv-jrb-yellow px-3 py-2"
                disabled={loading}
                onClick={handleSubmit}
              >
                <span>Login</span>
                <FontAwesomeIcon 
                  icon={faChevronRight} 
                  style={{ marginLeft: 16 }}
                />
              </Button>
            </div>
            <FormGroup check className="mb-3">
              <Input
                id="trust"
                name="trust"
                type="checkbox"
                disabled={loading}
                value={remember}
                onChange={(e) => setRemember(e.target.value)}
              />{' '}
              <span
                style={{
                  fontSize: '15px',
                  color: '#666666',
                }}
              >
                Trust this device
              </span>
            </FormGroup>
            <div className="mb-3">
              {(error && !loading) && (
                <Alert color={error === 'Unauthorized' ? 'warning' : 'danger'}>
                  {error === 'Unauthorized'
                    ? 'Password is invalid'
                    : error}
                </Alert>
              )}
            </div>
          </Form>
        </StyledContainer>
      </Col>
    </div>
  );
};

export default Login;
