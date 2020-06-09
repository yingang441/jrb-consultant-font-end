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
import React from "react";

// reactstrap components
import { Route, Switch, Redirect } from "react-router-dom";

// core components
import Header from "components/Navbars/Header.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";

import routes from "routes.js";

class Dashboard extends React.Component {
  state = {
    backgroundColor: "blue"
  };
  mainPanel = React.createRef();
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  componentDidUpdate(e) {
  }
  render() {
    return (
      <div className="admin-container">
        <div className="d-flex container">
          <Sidebar
            {...this.props}
            routes={routes}
            backgroundColor={'$jrb-black-color'}
          />
          <div className="main-panel" style={{overflow: 'hidden', backgroundColor: 'white'}} ref={this.mainPanel}>
            <Header {...this.props} />
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
}

export default Dashboard;
