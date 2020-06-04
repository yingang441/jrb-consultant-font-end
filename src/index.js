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
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?2020";
import "assets/scss/index.scss";
import "assets/css/demo.css";

import AdminLayout from "layouts/Admin.jsx";
import Auth from "layouts/Auth.jsx";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/auth" render={props => <Auth />} />
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Redirect to="/auth" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
