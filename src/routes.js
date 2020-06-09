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

import Mainboard from "views/Mainboard.jsx";
import Companyboard from "views/Companyboard.jsx";
import Landloardboard from "views/Landloardboard.jsx";
import Taskboard from "views/Taskboard.jsx";
import CDCboard from "views/CDCboard.jsx";
import Userboard from "views/Userboard.jsx";

import { faProjectDiagram, faTasks, faBuilding, faUserTie, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: faWindows,
    component: Mainboard,
    layout: "/admin"
  },
  {
    path: "/companies",
    name: "Company management",
    icon: faBuilding,
    component: Companyboard,
    layout: "/admin"
  },
  {
    path: "/landloards",
    name: "Landloards management",
    icon: faUserTie,
    component: Landloardboard,
    layout: "/admin"
  },
  {
    path: "/tasks",
    name: "Task management",
    icon: faTasks,
    component: Taskboard,
    layout: "/admin"
  },
  {
    path: "/cdcview",
    name: "CDC management",
    icon: faProjectDiagram,
    component: CDCboard,
    layout: "/admin"
  },
  {
    path: "/users",
    name: "User management",
    icon: faUsers,
    component: Userboard,
    layout: "/admin"
  },

];
export default dashRoutes;
