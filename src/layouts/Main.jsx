import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Auth from './Auth';
import AdminLayout from './Admin';
import Footer from 'components/Footer/Footer.jsx';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const Main = (props) => {
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <div>
      {!authenticated
      ? <Route path="/auth" render={props => <Auth />} />
      : <Route path="/admin" render={props => <AdminLayout {...props} />} />}
      <Route exact path="/">
        {authenticated && <Redirect to="/admin/dashboard" />}
        {!authenticated && <Redirect to="/auth" />}
      </Route>
      <Footer />
    </div>
  );
};

export default Main;
