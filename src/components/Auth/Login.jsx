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
  Button,
  FormGroup,
  Form,
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
  const { loading } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({ email, password }));
  };

  return (
    <div className="login-screen text-align-center">
      <Col className="px-1">
        <StyledContainer>
          <Form>
            <FormGroup className="mb-3">
              <Input
                id="email"
                name="email"
                className="text-center"
                disabled={loading}
                placeholder="Username(6 Digit Consultant ID)"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <Input
                id="password"
                name="password"
                className="text-center"
                disabled={loading}
                placeholder="Password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
            <FormGroup check className="ml-3">
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
          </Form>
        </StyledContainer>
      </Col>
    </div>
  );
};

export default Login;
