/* 
  Row component written as a simple function:
  https://facebook.github.io/react/docs/components-and-props.html#functional-and-class-components
  
  Any components that do not have state should be written this way,
  see: https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc
*/
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserPlus, faPenSquare, faUserTimes } from "@fortawesome/free-solid-svg-icons"


const RowItem = ({id, name, location, email, phone, type, date, index}) => (
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
      <button className="btn circled jrb-button hv-jrb-green">
        <FontAwesomeIcon size="2x" icon={faPenSquare} />
      </button>
      <button className="btn circled jrb-button hv-jrb-red">
        <FontAwesomeIcon icon={faUserTimes} size="2x"/>
      </button>
    </div>
  </div>
);

/*
  Table component written as an ES6 class
*/
class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: '123-456', 
         name: 'Gerry', 
         location: 'Canada', 
         email: 'gerry@gmail.com', 
         phone: 120500,
         type: 'Consultant',
         date: '2020-6-1'
        }, 
        {id: '847-456', 
         name: 'Mke Kon', 
         location: 'Canada', 
         email: 'mike@gmail.com', 
         phone: 120500,
         type: 'Landord',
         date: '2020-6-2'
        }, 
        {id: '923-456', 
         name: 'Elisee', 
         location: 'Canada', 
         email: 'gerry@gmail.com', 
         phone: 120500,
         type: 'Consultant',
         date: '2020-6-1'
        }, 
        {id: '951-456', 
         name: 'Ain Gang', 
         location: 'Greece', 
         email: 'a-yin@gmail.com', 
         phone: 1020500,
         type: 'Consultant',
         date: '2020-6-10'
        }
      ],
    };

    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }
  
  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
 
  sortBy(key) {
    let arrayCopy = [...this.state.data];
    arrayCopy.sort(this.compareBy(key));
    this.setState({data: arrayCopy});
  }
    
  render() {
    return (
      <div className="user-table">
        <div className="header d-flex align-items-center justify-content-between">
          <div className="d-flex justify-content-between align-items-center" style={{width: `40%`, backgroundColor: 'white', borderRadius: 20, padding: 13, border: '1px solid #ddd'}}>
            <input type="text" placeholder="Search on users" className="bg-transparent border-none" style={{fontSize: 13}}/>
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div>
            <div className="jrb-button hv-jrb-green" style={{padding: 13}}>
              <FontAwesomeIcon className="mr-4" icon={faUserPlus} />
              Add New User
            </div>
          </div>
        </div>
        <div className="table-header">
          <div style={{maxWidth: 30}}><input type={'checkbox'} /> </div>
          <div onClick={() => this.sortBy('id')} >User ID</div>
          <div onClick={() => this.sortBy('name')}>Full name</div>
          <div onClick={() => this.sortBy('location')} style={{maxWidth: 70}}>Location</div>
          <div onClick={() => this.sortBy('email')}>Email Address</div>
          <div onClick={() => this.sortBy('phone')}>Phone number</div>
          <div onClick={() => this.sortBy('type')}>Type</div>
          <div onClick={() => this.sortBy('date')}>Date added</div>
          <div> Actions</div>
        </div>
        <div className="body">
        {this.state.data.map(
           (rowData, index) => <RowItem {...rowData} index={index} />)
        }
        </div>
      </div>
    );
    
  }
}

export default UserTable;