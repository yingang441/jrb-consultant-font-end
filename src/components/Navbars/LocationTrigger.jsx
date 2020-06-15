import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const StyledTriggerSpan = styled.span`
  color: #C1DAD6;
  font-size: 16px;
  margin-left: 10px;
  margin-right: 10px;
`;

const LocationTrigger = ({ collapsed }) => {
  return (
    <div className="d-flex align-items-center">
      <FontAwesomeIcon 
        icon={faMapMarkedAlt} 
      />
      <StyledTriggerSpan>Toronto, ON</StyledTriggerSpan>
      {collapsed
        ? (
          <FontAwesomeIcon 
            icon={faChevronDown} 
          />
        ) : (
          <FontAwesomeIcon 
            icon={faChevronUp} 
          />
        )
      }
    </div>
  )
};

export default LocationTrigger;
