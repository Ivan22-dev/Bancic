

// @mui icons
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LockIcon from '@mui/icons-material/Lock';

import React from 'react'
import EMS from "pages/LandingPages/EMS";
import Contact from "pages/LandingPages/Contact";
import Administration from "pages/LandingPages/Administration";
import Prices from "pages/LandingPages/Prices";
import Gallery from "pages/LandingPages/Gallery";
import SignInBasic from "pages/LandingPages/SignIn";

const getCookie = function(name) {
  var r = document.cookie.match("\\b" + name + "=([^;]*)\\b");
  return r ? r[1] : null;
};

const routes = [
  {
    name: "EMS",
    route: "/pages/ems",
    component: <EMS />,
  },
  {
    name: "Kontakt",
    route: "/pages/contact",
    component: <Contact />,
  },
  {
    name: "Cijenik",
    route: "/pages/prices",
    component: <Prices />,
  },
  {
    name: "Galerija",
    route: "/pages/gallery",
    component: <Gallery />,
  },
 
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/b_gym_by_ivobancic/?hl=en",
  },
  {
    name: "Facebook",
    icon: <FacebookIcon />,
    href: "https://web.facebook.com/p/B-GYM-100076471634241/?_rdc=1&_rdr",
  },
  getCookie('username')==="admin22"?{
    name: "Administracija",
    component: <  Administration />,
    route: "/pages/administration",
  }:{
    icon: <LockIcon />,
    component: <  SignInBasic />,
    route: "/sign-in",
  },
  

];

export default routes;
