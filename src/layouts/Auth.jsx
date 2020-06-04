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
import Login from "components/Auth/Login.jsx";
import Reset from "components/Auth/Reset.jsx";
import Footer from "components/Footer/Footer.jsx";
import Logo from "assets/img/logo.png";

class Auth extends React.Component {

  render() {
    return (
        <div className="auth-screen
                        container
                        d-flex
                        flex-column
                        align-items-center
                        justify-content-center"
             style={{height: '100vh'}}>
          <img className="logo-image" width="100px" src={Logo} />
          <Switch>
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/reset" component={Reset} />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
          <Footer />
        </div>
    );
  }
}

export default Auth;
