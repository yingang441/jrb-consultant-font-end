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
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'assets/scss/now-ui-dashboard.scss?2020';
import 'assets/scss/index.scss';
import 'assets/css/demo.css';

import Main from 'layouts/Main.jsx';
import AdminLayout from 'layouts/Admin.jsx';
import Auth from 'layouts/Auth.jsx';
import Footer from 'components/Footer/Footer.jsx';
import history from 'services/history';
import configureStore from 'configs/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Main />
      <Redirect to="/auth" />
      <Footer />
    </Router>
  </Provider>,
  document.getElementById("root")
);
