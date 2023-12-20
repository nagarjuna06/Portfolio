import {
  BiHome,
  BiInfoCircle,
  BiCoffee,
  BiPhone,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoFacebook,
  BiLogoTelegram,
} from "react-icons/bi";
import { MdEmail, MdLocalPhone, MdLocationOn } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

export const navList = [
  {
    name: "Home",
    route: "/",
    icon: BiHome,
  },
  {
    name: "About Me",
    route: "/about",
    icon: BiInfoCircle,
  },
  {
    name: "Work",
    route: "/work",
    icon: BiCoffee,
  },
  {
    name: "Contact",
    route: "/contact",
    icon: BiPhone,
  },
];

export const latestWorkList = [
  {
    image: "/project_images/learnly.jpg",
    title: "Learnly",
    description: "Learnly Website built with React and Vite.js",
    link: "https://learn-ly.netlify.app/",
    linkText: "learn-ly.netlify.app",
    icon: "link",
  },
  {
    image: "/project_images/simpliquiz.jpg",
    title: "SimpliQuiz App",
    description: "A Dynamic Quiz Application with Authentication",
    link: "https://simpliquiz.netlify.app/",
    linkText: "simpliquiz.netlify.app",
    icon: "link",
  },
  {
    image: "/project_images/urlshortner.jpg",
    title: "URL Shortener",
    description: "Convert long,ugly URL into beautiful short URL",
    link: "https://u-short.vercel.app",
    linkText: "u-short.vercel.app",
    icon: "link",
  },
];

export const socialList = [
  {
    text: "Github",
    icon: BiLogoGithub,
    link: "https://github.com/nagarjuna06",
  },
  {
    text: "LinkedIn",
    icon: BiLogoLinkedin,
    link: "https://www.linkedin.com/in/nagarjuna-chenna",
  },
  {
    text: "Instagram",
    icon: BiLogoInstagram,
    link: "https://www.instagram.com/__nagarjuna06__",
  },
  {
    text: "Twitter",
    icon: BiLogoTwitter,
    link: "",
  },
  {
    text: "Facebook",
    icon: BiLogoFacebook,
    link: "",
  },
];

export const introLinks = [
  {
    text: "About Me",
    icon: "arrow",
    link: "/about",
  },
  {
    text: "View Resume",
    icon: "arrow",
    link: "https://drive.google.com/file/d/1Q3DqG_MYCWsV87Ko0M7F7Iw4IG91CXP6/view?usp=sharing",
    target: "blank",
  },
  {
    text: "Contact",
    icon: "arrow",
    link: "/contact",
  },
];

export const profileData = {
  name: "Nagarjuna Chenna",
  avatar: "/profile/avatar.jpeg",
  github: {
    media: "Github",
    icon: BiLogoGithub,
    link: "https://github.com/nagarjuna06",
  },
  profiles: [
    {
      text: "Github Profile",
      icon: BiLogoGithub,
      link: "https://github.com/nagarjuna06",
      target: "blank",
      move: false,
    },
    {
      text: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/nagarjuna-chenna",
      icon: BiLogoLinkedin,
      target: "blank",
      move: false,
    },
    {
      text: "View Resume",
      icon: "arrow",
      link: "https://drive.google.com/file/d/1Q3DqG_MYCWsV87Ko0M7F7Iw4IG91CXP6/view?usp=sharing",
      target: "blank",
    },
    {
      text: "Contact Me",
      link: "/contact",
      icon: "arrow",
      target: "self",
      move: true,
    },
  ],
  profileDescriptions: [
    {
      title: `Hi! I'm Nagarjuna`,
      description: `I'm a ${
        new Date().getFullYear() - 2001
      } year-old self-taught
  developer. Passionate Full Stack Developer with a flair for
  crafting seamless and innovative digital experiences. Proficient
  in both front-end and back-end technologies, I thrive on
  translating complex ideas into elegant, user-friendly solutions.
  Constantly learning and adapting to stay at the forefront of
  technology trends.`,
    },
    {
      title: "Programming",
      description: `I started experimenting with code back in 2021. 
      I tweaked a lot to existing projects from other people to see what happened when I changed something. 
      Since then I gained a lot of experience and developed my own (code) style.
      <br/><br/> For programming I primarily use the tools of Microsoft, such as Visual Studio and some Extensions; 
      those applications are a perfect fit for me. All of my projects are stored on their own GitHub repository 
      and I host everything on Netlify server.`,
    },
  ],
};

export const skillsList = [
  {
    name: "React",
    image: "/skills/react.svg",
  },
  {
    name: "Redux",
    image: "/skills/redux.svg",
  },
  {
    name: "Node.js",
    image: "/skills/node.svg",
  },
  {
    name: "Mongo DB",
    image: "/skills/mongo.svg",
  },
  // {
  //   name: "MySQL",
  //   image: "/skills/mysql.svg",
  // },
  {
    name: "HTML",
    image: "/skills/html.svg",
  },
  {
    name: "CSS",
    image: "/skills/css.svg",
  },
  {
    name: "JavaScript",
    image: "/skills/javascript.svg",
  },
  {
    name: "TypeScript",
    image: "/skills/typescript.svg",
  },
  {
    name: "Git",
    image: "/skills/git.svg",
  },
  {
    name: "Python",
    image: "/skills/python.svg",
  },
  {
    name: "Tailwind CSS",
    image: "/skills/tailwind.svg",
  },
  {
    name: "Material UI",
    image: "/skills/mui.svg",
  },
];

const experienceList = [
  {
    title: "Code Clause",
    start: "Jun 2023",
    end: "July 2023",
    description:
      "Internship — During the period that  I did an internship at Code Clause. Here I learned to work with React, among other things, and I found out that E-Commerce app development does interest me.",
  },
];

const educationList = [
  {
    title: "SVU College of CM & CS,Tirupati",
    start: "Dec 2021",
    end: "Sep 2023",
    description: "Master of Computer Applications - MCA",
  },
  {
    title: "Sir C.V Raman Degree College,Tadipatri",
    start: "Jun 2018",
    end: "Aug 2021",
    description: "Bachelor of Science in Computer Science - B.Sc",
  },
];

export const experience = {
  title: "Work Experience",
  description:
    "A few things that I've done to gain work experience in my field.",
  data: experienceList,
};

export const eduction = {
  title: "Schooling",
  description:
    "It was a bit rough, but eventually I managed to successfully get my degree!",
  data: educationList,
};

export const openSourceProjects = [
  {
    image: "/project_images/weather.png",
    title: "Weather Application",
    description:
      "It allows the user to search for a city and get the current weather details of that city.",
    link: "https://nagarjuna06.github.io/Weather-Application",
    view: "https://github.com/nagarjuna06/Weather-Application",
    linkText: "nagarjuna06.github.io",
    icon: "link",
  },
  {
    image: "/project_images/razorpay.png",
    title: "Integrate Payment GateWay",
    description:
      "Razorpay payment gateway with a React application for a fake store",
    link: "https://razorpay-integration.netlify.app",
    view: "https://github.com/nagarjuna06/Integrate_Payment_Gateway",
    linkText: "razorpay.netlify.app",
    icon: "link",
  },
  {
    image: "/project_images/urlshortner.jpg",
    title: "URL Shortner",
    description: "Convert long,ugly URL into beautiful short URL",
    link: "https://u-short.vercel.app/",
    view: "https://github.com/nagarjuna06/URL-Shortener",
    linkText: "u-short.vercel.app",
    icon: "link",
  },
  {
    image: "/project_images/qr-code.png",
    title: "QR Code Generator",
    description: "It converts any text input into QR code",
    link: "https://nagarjuna06.github.io/Qr-code-Generator",
    view: "https://github.com/nagarjuna06/Qr-code-Generator",
    linkText: "nagarjuna06.github.io",
    icon: "link",
  },
  {
    image: "/project_images/unit-convert.png",
    title: "Unit Converter",
    description:
      "various categories including Length, Temperature, Area, Volume, Weight, and Time.",
    link: "https://nagarjuna06.github.io/Unit-Converter",
    view: "https://github.com/nagarjuna06/Unit-Converter",
    linkText: "nagarjuna06.github.io",
    icon: "link",
  },
  {
    image: "/project_images/dictionary.png",
    title: "Dictionary Application",
    description: "It includes audio pronunciation, examples, and definitions.",
    link: "https://nagarjuna06.github.io/dictionary-app",
    view: "https://github.com/nagarjuna06/dictionary-app",
    linkText: "nagarjuna06.github.io",
    icon: "link",
  },

  {
    image: "/project_images/password-generator.png",
    title: "Password Generator",
    description: "It can be used to generate Strong password 8 to 32 length",
    link: "https://nagarjuna06.github.io/password-Generator",
    view: "https://github.com/nagarjuna06/password-Generator",
    linkText: "nagarjuna06.github.io",
    icon: "link",
  },
  {
    image: "/project_images/alarm.png",
    title: "Simple Alarm Clock",
    description:
      "Alarm clock that triggers both a vibration and a ringtone when the alarm time is reached.",
    link: "https://nagarjuna06.github.io/Simple-Alarm-Clock",
    view: "https://github.com/nagarjuna06/Simple-Alarm-Clock",
    linkText: "nagarjuna06.github.io",
    icon: "link",
  },
  {
    image: "/project_images/calculator.png",
    title: "Calculator Application",
    description: "Basic Calculator",
    link: "https://calculator-base.netlify.app",
    view: "https://github.com/nagarjuna06/Calculator",
    linkText: "nagarjuna06.github.io",
    icon: "link",
  },
  {
    image: "/project_images/counter.png",
    title: "Counter Application",
    description: "It can be used to increase and decrease the numbers",
    link: "https://nagarjuna06.github.io/counter-application/",
    view: "https://github.com/nagarjuna06/counter-application",
    linkText: "nagarjuna06.github.io",
    icon: "link",
  },
];

export const bigProjects = [
  {
    image: "/project_images/learnly.jpg",
    title: "Learnly",
    description: "Learnly Website built with React and Vite.js",
    link: "https://learn-ly.netlify.app/",
    view: "https://github.com/nagarjuna06/learnly-frontend",
    linkText: "learn-ly.netlify.app",
    icon: "link",
  },
  {
    image: "/project_images/simpliquiz.jpg",
    title: "SimpliQuiz App",
    description: "A Dynamic Quiz Application with Authentication",
    link: "https://simpliquiz.netlify.app/",
    view: "https://github.com/nagarjuna06/simpliquiz",
    linkText: "simpliquiz.netlify.app",
    icon: "link",
  },
];

export const featured = [
  {
    image: "/project_images/issue-tracker.jpg",
    title: "Issue Tracker",
    description: "Its a platform maintain Issue Updates",
    view: "https://github.com/nagarjuna06/issue-tracker",
    link: "https://issue-track.vercel.app",
    icon: "link",
    linkText: "issue-track.vercel.app",
  },
];

export const contactInfoList = [
  {
    Icon: MdEmail,
    title: "chennanagarjuna4@gmail.com",
    subtitle: "E-mail",
    link: "mailto:chennanagarjuna4@gmail.com",
  },
  {
    Icon: MdLocalPhone,
    title: "+91 9391568280",
    subtitle: "Phone number",
    link: "tel:9391568280",
  },
  {
    Icon: BsWhatsapp,
    title: "+91 9391568280",
    subtitle: "Whatsapp",
    link: "https://wa.me/9391568280",
  },
  {
    Icon: BiLogoTelegram,
    title: "nagarjuna_chenna",
    subtitle: "Telegram",
    link: "https://t.me/nagarjuna_chenna",
  },
  {
    Icon: MdLocationOn,
    title: "Tadipatri,Andra Pradesh,India",
    subtitle: "Address",
  },
];
