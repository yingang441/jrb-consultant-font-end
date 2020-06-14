import React from 'react';
import { Input } from 'reactstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledInput = styled(Input)`
  height: 45px;
  borderRadius: 100%;
  backgroundColor: #FFFFFF;
  border: 1px solid #DDDDDD;
  color: #666666;
  font-size: 13px;
  font-weight: light;
  padding-left: 160px;
  padding-right: 160px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const LeftComponent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
`;

const RightComponent = styled.div`
  position: absolute;
  right: 10px;
  top: 0;
`;

const StyledIcon = ({ icon }) => (
  <FontAwesomeIcon
    icon={icon}
    size={15}
    style={{ color: '#666666', margin: '15px' }}
  />
);

const StyledContent = styled.span`
  font-size: 13px;
  color: #666666;
`;

const CustomInput = ({ leftIcon, leftContent, rightComponent, type, placeholder }) => {
  return (
    <div className="position-relative">
      <StyledInput type={type} placeholder={placeholder} />
      <LeftComponent>
        <StyledIcon icon={leftIcon} />
        <StyledContent>{leftContent}</StyledContent>
      </LeftComponent>
      <RightComponent>
        {rightComponent}
      </RightComponent>
    </div>
  );
};

export default CustomInput;