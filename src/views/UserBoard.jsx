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
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import UsersTable from 'components/Users/UsersTable.jsx';
import EditProfilePanel from 'components/Users/EditProfile.jsx';

const UserBoard = () => {
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={UsersTable} />
      <Route path={`${path}/edit-profile`} component={EditProfilePanel} />
    </Switch>
  );
};

export default UserBoard;
