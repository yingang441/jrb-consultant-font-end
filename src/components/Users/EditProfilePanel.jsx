import React from 'react';
import { Col, Row, Button, Input } from 'reactstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faUser, faLocationArrow, faPhone, faLock, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import CustomInput from './CustomInput.jsx';
import ProfileImageUpload from './ProfileImageUpload.jsx';
import CustomDropdown from './CustomDropdown.jsx';

const Description = styled.textarea`
  border-radius: 22px;
  border: 1px solid #DDDDDD;
  background-color: #FFFFFF;
  outline: none;
  width: 100%;
  font-size: 13px;
  font-weight: light;
  color: #666666;
  padding: 7px 15px;
`;

const VerifyButton = styled(Button)`
  border-radius: 22px;
  background-color: #6D929B;
  padding: 6px 12px;
  color: white;
  font-size: 11px;
  font-weight: light;
`;

const PasswordValidator = styled.div`
  border-radius: 22px;
  background-color: #EB9EAC;
  padding: 6px 12px;
  color: white;
  font-size: 11px;
  font-weight: light;
`;

const EditProfilePanel = () => {
  return (
    <div className="user-table">
      <Row>
        <Col xs={8}>
          <div className="header d-flex align-items-center justify-content-between">
            <span>000-000 (generated)</span>
            <div>
              <div className="jrb-button hv-jrb-green" style={{ padding: 13 }}>
                <FontAwesomeIcon className="mr-4" icon={faEdit} />
                View Dashboard
              </div>
            </div>
          </div>
          <CustomInput
            leftIcon={faUser}
            leftContent="Full Name"
            type="text"
          />
          <CustomInput
            leftIcon={faLocationArrow}
            leftContent="Email Address"
            type="email"
          />
          <CustomInput
            leftIcon={faPhone}
            leftContent="Phone no"
            type="text"
            rightComponent={
              <VerifyButton>Verify your phone number</VerifyButton>
            }
          />
          <CustomInput
            leftIcon={faLock}
            leftContent="Old Password"
            type="password"
            placeholder="At least 6 characters (A-a, 0-9)"
          />
          <CustomInput
            leftIcon={faLock}
            leftContent="New Password"
            type="password"
            placeholder="Confirm your password"
          />
          <CustomInput
            leftIcon={faLock}
            leftContent="Re-enter Password"
            type="password"
            placeholder="Confirm your password"
            rightComponent={
              <PasswordValidator>Password does not match</PasswordValidator>
            }
          />
          <Description placeholder="Description" />
        </Col>
        <Col xs={4}>
          <ProfileImageUpload />
          <CustomDropdown type="select">
            <option>Company</option>
            <option>Consultant</option>
            <option>Landlord</option>
          </CustomDropdown>
          <CustomDropdown type="select">
            <option>Active</option>
            <option>Inactive</option>
          </CustomDropdown>
          <div className="d-flex align-items-center justify-content-between">
            <button className="btn circled text jrb-button hv-jrb-red d-flex align-items-center pl-3 pr-3">
              <FontAwesomeIcon icon={faTimes} size={15} className="mr-3" />
              Discard
            </button>
            <button className="btn circled text jrb-button hv-jrb-green d-flex align-items-center pl-3 pr-3">
              <FontAwesomeIcon icon={faCheck} size={15} className="mr-3" />
              Save
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default EditProfilePanel;
