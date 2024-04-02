// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import React from 'react'



// Images
import favicon from "assets/images/favicon.png";
import MKTypography from "components/MKTypography";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "B-GYM",
    image: favicon,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "facebook",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/b_gym_by_ivobancic/?hl=en",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/watch?v=IrDVyLGwAq8",
    },
  ],
  menus: [
    {
      name: "Cijenik",
      items: [
        { name: "about us", href: "https://www.creative-tim.com/presentation" },
        { name: "freebies", href: "https://www.creative-tim.com/templates/free" },
        { name: "premium tools", href: "https://www.creative-tim.com/templates/premium" },
        { name: "blog", href: "https://www.creative-tim.com/blog" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "https://iradesign.io/" },
        { name: "bits & snippets", href: "https://www.creative-tim.com/bits" },
        { name: "affiliate program", href: "https://www.creative-tim.com/affiliates/new" },
      ],
    },
   
  ],
 
 
  
};
