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
import React, { createRef, useState } from 'react';

// reactstrap components
import { Route, Switch, Redirect } from 'react-router-dom';

// core components
import Header from 'components/Navbars/Header.jsx';
import Sidebar from 'components/Sidebar/Sidebar.jsx';

import routes from 'routes';

const Dashboard = (props) => {
  console.log(props);
  const [backgroundColor, setBackgroundColor] = useState('blue');
  const mainPanel = createRef();

  return (
    <div className="admin-container">
      <div className="d-flex container">
        <Sidebar
          {...props}
          routes={routes}
          backgroundColor={'$jrb-black-color'}
        />
        <div className="main-panel" style={{overflow: 'hidden', backgroundColor: 'white'}} ref={mainPanel}>
          <Header {...props} />
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}

            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch> 
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
