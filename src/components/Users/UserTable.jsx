import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserPlus, faPenSquare, faUserTimes } from '@fortawesome/free-solid-svg-icons';

const data = [
  {
    id: '123-456', 
    name: 'Gerry', 
    location: 'Canada', 
    email: 'gerry@gmail.com', 
    phone: 120500,
    type: 'Consultant',
    date: '2020-6-1'
  }, 
  {
    id: '847-456', 
    name: 'Mke Kon', 
    location: 'Canada', 
    email: 'mike@gmail.com', 
    phone: 120500,
    type: 'Landord',
    date: '2020-6-2'
  }, 
  {
    id: '923-456', 
    name: 'Elisee', 
    location: 'Canada', 
    email: 'gerry@gmail.com', 
    phone: 120500,
    type: 'Consultant',
    date: '2020-6-1'
  }, 
  {
    id: '951-456', 
    name: 'Ain Gang', 
    location: 'Greece', 
    email: 'a-yin@gmail.com', 
    phone: 1020500,
    type: 'Consultant',
    date: '2020-6-10'
  }
];

const RowItem = ({id, name, location, email, phone, type, date, index}) => {
  const history = useHistory();

  return (
    <div className={`row-item d-flex align-items-center ${index % 2 ? 'odd': ''}`}>
      <div style={{maxWidth: 30}}><input type={'checkbox'} /> </div>
      <div>{id}</div>
      <div>{name}</div>
      <div style={{maxWidth: 70}}>{location}</div>
      <div>{email}</div>
      <div>{phone}</div>
      <div>{type}</div>
      <div>{date}</div>
      <div className="d-flex align-items-center justify-content-center">
        <button className="btn circled jrb-button hv-jrb-green" onClick={() => history.push('/admin/users/edit-profile')}>
          <FontAwesomeIcon size="2x" icon={faPenSquare} />
        </button>
        <button className="btn circled jrb-button hv-jrb-red">
          <FontAwesomeIcon icon={faUserTimes} size="2x"/>
        </button>
      </div>
    </div>
  );
}

/*
  Table component written as an ES6 class
*/
const UserTable = () => {
  const [userData, setUserData] = useState(data);
  const compareBy = (key) => {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
 
  const sortBy = (key) => {
    let arrayCopy = [...userData];
    arrayCopy.sort(compareBy(key));
    setUserData(arrayCopy);
  }
  
  return (
    <div className="user-table">
      <div className="header d-flex align-items-center justify-content-between">
        <div
          className="d-flex justify-content-between align-items-center"
          style={{
            width: '40%',
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 13,
            border: '1px solid #ddd'
          }}
        >
          <input type="text" placeholder="Search on users" className="bg-transparent border-none" style={{fontSize: 13}}/>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div>
          <div className="jrb-button hv-jrb-green" style={{ padding: 13 }}>
            <FontAwesomeIcon className="mr-4" icon={faUserPlus} />
            Add New User
          </div>
        </div>
      </div>
      <div className="table-header">
        <div style={{maxWidth: 30}}><input type={'checkbox'} /> </div>
        <div onClick={() => sortBy('id')} >User ID</div>
        <div onClick={() => sortBy('name')}>Full name</div>
        <div onClick={() => sortBy('location')} style={{maxWidth: 70}}>Location</div>
        <div onClick={() => sortBy('email')}>Email Address</div>
        <div onClick={() => sortBy('phone')}>Phone number</div>
        <div onClick={() => sortBy('type')}>Type</div>
        <div onClick={() => sortBy('date')}>Date added</div>
        <div> Actions</div>
      </div>
      <div className="body">
      {userData.map(
          (rowData, index) => <RowItem {...rowData} index={index} />)
      }
      </div>
    </div>
  );
}

export default UserTable;