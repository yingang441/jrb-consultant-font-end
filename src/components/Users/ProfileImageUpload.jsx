import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import User1 from 'assets/img/user1.png';

const StyledWrapper = styled.div`
  background-color: #EEEEEE;
  padding: 10px;
  border-radius: 32px;
`;

const StyledContainer = styled.div`
  background-color: #66666607;
  border: 1px dashed #66666626;
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AvatarContainer = styled.div`
  max-height: 120px;
  margin: 20px;
`;

const Avatar = styled.img`
  height: 100%;
`;

const StyledUploadContent = styled.div`
  color: #66666655;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: light;
  margin-top: 14px;
  margin-bottom: 40px;
`;

const ProfileImageUpload = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <AvatarContainer>
          <Avatar src={User1} />
        </AvatarContainer>
        <FontAwesomeIcon icon={faCloudUploadAlt} size={30} />
        <StyledUploadContent>Drag and drop To upload</StyledUploadContent>
      </StyledContainer>
    </StyledWrapper>
  )
};

export default ProfileImageUpload;
