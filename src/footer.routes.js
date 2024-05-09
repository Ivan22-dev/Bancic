// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import React from 'react'



// Images
import favicon from "assets/images/favicon.png";


export default {
  brand: {
    name: "B-GYM",
    image: favicon,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://web.facebook.com/p/B-GYM-100076471634241/?_rdc=1&_rdr",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/b_gym_by_ivobancic/?hl=en",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://youtu.be/bmvOC8P27L4",
    },
  ],
  menus: [
    {
      name: "Cijenik",
      items: [
     
      ],
    },
    {
      name: "resources",
      items: [
       
      ],
    },
   
  ],
 
};
