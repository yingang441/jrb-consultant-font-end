import React from 'react';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import UserTable from './UserTable';

const UsersTable = () => {
  return (
    <div className="d-flex flex-column flex" style={{ height: '100%' }}>
      <Row style={{ paddingRight: 15, paddingLeft: 15 }}>
        <Col>
          <p >Dashboard  >  User Management</p>
        </Col>
        <Col>
          <p style={{ textAlign: `right` }}>
            <FontAwesomeIcon icon={faChevronLeft} /> BACK
          </p>
        </Col>
      </Row>
      <UserTable />
    </div>
  );
};

export default UsersTable;