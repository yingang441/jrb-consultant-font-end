import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Auth from './Auth';
import AdminLayout from './Admin';

const Main = (props) => {
  const { authenticated } = useSelector((state) => state.auth);

  return (
    !authenticated
      ? <Route path="/auth" render={props => <Auth />} />
      : <Route path="/admin" render={props => <AdminLayout {...props} />} />
  );
};

export default Main;
