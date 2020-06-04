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

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Mainboard,
    layout: "/admin"
  },
  {
    path: "/companies",
    name: "Company management",
    icon: "design_image",
    component: Companyboard,
    layout: "/admin"
  },
  {
    path: "/landloards",
    name: "Landloards management",
    icon: "design_image",
    component: Landloardboard,
    layout: "/admin"
  },
  {
    path: "/tasks",
    name: "Task management",
    icon: "design_image",
    component: Taskboard,
    layout: "/admin"
  },
  {
    path: "/cdcview",
    name: "CDC management",
    icon: "design_image",
    component: CDCboard,
    layout: "/admin"
  },
  {
    path: "/users",
    name: "User management",
    icon: "design_image",
    component: Userboard,
    layout: "/admin"
  },

];
export default dashRoutes;
