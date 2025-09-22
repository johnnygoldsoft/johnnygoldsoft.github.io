import user_image from "./jean_professionnal.jpg";
import profile_pic from "./jean_prof2.jpg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import laravel from "./laravel.png";
import flutter from "./flutter.png";
import wordpress from "./wordpress.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

// work images

import centre_site from "./public/work/centre.jpg";
import sproca from "./public/work/sproca.jpg";
import aip from "./public/work/aip.png";
import evalcit_ui from "./public/work/evalcit_ui.png";
import ebd_ui from "./public/work/ebd_ui.png";
import festi_ui from "./public/work/festi_ui.png";
import festijet_mobile from "./public/work/festijet_mobile.png";
import front1 from "./public/work/front1.jpeg";
import front2 from "./public/work/front2.jpeg";
import front3 from "./public/work/front3.jpeg";

export const assets = {
  centre_site,
  aip,
  sproca,
  evalcit_ui,
  festi_ui,
  ebd_ui,
  festi_ui,
  festijet_mobile,
  front1,
  front2,
  front3,

  // autre
  user_image,
  profile_img,
  profile_pic,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  flutter,
  wordpress,
  laravel,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "Frontend Festijet",
    description: "Fontend Festijet ui ...",
    bgImage: assets.festi_ui,
    category: "UI/UX Design",
  },
  {
    title: "Frontend EBD",
    description: "front end EBD ui ...",
    bgImage: assets.ebd_ui,
    category: "UI/UX Design",
  },

  {
    title: "Frontend AIPJeunes",
    description: "front end AIPJeunes ui ...",
    bgImage: assets.aip,
    category: "UI/UX Design",
  },

  {
    title: "Site web CDEJ",
    description: "CDEJ Siteweb ...",
    bgImage: assets.centre_site,
    category: "Web Design",
  },

  {
    title: "Site web Sproca",
    description: "Sproca Sitexeb ...",
    bgImage: assets.sproca,
    category: "Web Design",
  },
  {
    title: "evlalcit UI",
    description: "Evalcit app ui ",
    bgImage: assets.evalcit_ui,
    category: "UI/UX Design",
  },
  {
    title: "Feedplate App",
    description: "mobile front end app",
    bgImage: assets.front1,
    category: "Mobile App",
  },
  {
    title: "Newsly App",
    description: "mobile front end app",
    bgImage: assets.front2,
    category: "Mobile App",
  },

  {
    title: "Socialy App",
    description: "mobile front end app",
    bgImage: assets.front3,
    category: "Mobile App",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "creation de site web moderne et responsive ...",
    linke: "ffs",
  },
  {
    icon: assets.web_icon,
    title: "Mobile app",
    description: "creation d'application mobile performante et réactive ...",
    link: "fsf",
  },
  {
    icon: assets.web_icon,
    title: "UI/UX design",
    description:
      "UI/UX design intuitif et attrayant pour une expérience utilisateur optimale...",
    link: "fsf",
  },
  {
    icon: assets.web_icon,
    title: "Graphics design",
    description:
      "Design graphique créatif pour renforcer votre identité visuelle...",
    link: "fsfs",
  },
  {
    icon: assets.web_icon,
    title: "Reseau et systeme",
    description:
      "Configuration et gestion de réseaux et systèmes informatiques...",
    link: "fsfs",
  },
  {
    icon: assets.web_icon,
    title: "Maintenance informatique",
    description:
      "Support et maintenance pour assurer la performance de vos systèmes...",
    link: "fsfs",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript , php, Dart, SQL, etc ...",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Haute Etude des Science et Technologie",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Plus de 5 projets deja realisés ",
  },
];

export const toolsData = [
  assets.firebase,
  assets.wordpress,
  assets.laravel,
  assets.flutter,
  assets.figma,
  assets.git,
];
