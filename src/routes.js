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

import MainBoard from 'views/MainBoard.jsx';
import CompanyBoard from 'views/CompanyBoard.jsx';
import LandloardBoard from 'views/LandloardBoard.jsx';
import TaskBoard from 'views/TaskBoard.jsx';
import CDCBoard from 'views/CDCBoard.jsx';
import UserBoard from 'views/UserBoard.jsx';

import { faProjectDiagram, faTasks, faBuilding, faUserTie, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faWindows } from '@fortawesome/free-brands-svg-icons';

const dashRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: faWindows,
    component: MainBoard,
    layout: '/admin',
  },
  {
    path: '/companies',
    name: 'Company management',
    icon: faBuilding,
    component: CompanyBoard,
    layout: '/admin',
  },
  {
    path: '/landloards',
    name: 'Landloards management',
    icon: faUserTie,
    component: LandloardBoard,
    layout: '/admin',
  },
  {
    path: '/tasks',
    name: 'Task management',
    icon: faTasks,
    component: TaskBoard,
    layout: '/admin',
  },
  {
    path: '/cdcview',
    name: 'CDC management',
    icon: faProjectDiagram,
    component: CDCBoard,
    layout: '/admin',
  },
  {
    path: '/users',
    name: 'User management',
    icon: faUsers,
    component: UserBoard,
    layout: '/admin',
  },
];

export default dashRoutes;
