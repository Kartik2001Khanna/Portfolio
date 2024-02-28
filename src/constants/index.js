import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  zeed,sf,dstrct,cling,fettle,
  carrent,
  jobit,
  tripguide,
  threejs,
  rp,c,aws,firebaseimg,pythonimg,music,meta,bank
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "Firebase",
    icon: firebaseimg,
  },
  // {
  //   name: "React Native",
  //   icon: rn,
  // },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "C++",
    icon: c,
  },
  {
    name: "Python",
    icon: pythonimg,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Cling Multi-Solutions",
    icon: cling,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Optimised the website performance and increased its efficiency by 18 percent by adopting search engine optimization and improving the ínterface",
      "Executed a dynamic interactive gallery from scratch based upon PHP, MySQL, HTML , Bootstrap for a online-gaming website with daily 1000+ user traffic",
      "Created mobile responsive full stack project with PHP, RESTful API server to handle CRUD operations in MySQL based database schema of user portfolio"
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Random Publications LLP",
    icon: rp,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Employing ReactJS, TurnJS and ViteJS, a cutting-edge e-commerce platform was meticulously crafted, enhanced with Tailwind for a visually captivating UI",
"Built a custom backend API using MERN Stack, enabling user authentication, and implementing real-time order tracking system for a smooth experience",
"Implemented performance optimizations, including code splitting, lazy loading, and caching, ensuring rapid loading times and enhancing the overall UI"
    ],
  },
  {
    title: "Backend Developer Intern",
    company_name: "zeed",
    icon: zeed,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Pioneered a comprehensive admin panel with critical data metrics like user value and integrated third-party API like Metals API for real-time updates",
"Engineered an efficient database backend schema using NoSQL database, guaranteeing effective storage and retrieval of data for seamless operations",
"Architected resilient and scalable APIs utilizing Node.js, Firebase, and Express.js, fostering seamless interaction between the frontend and backend part"
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company_name: "Fettle",
    icon: fettle,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Elevated app performance with tech integrations like Native Track-Player, Redis server and enabled precise user activity tracking through analytics APIs",
"Implemented a notification token system for users and resolved bugs and integrated various packages/tools like Google Fit, Image-Picker and Mixpanel",
"Optimized the admin panel website by addressing timeout issues through data fetching techniques and resolved backend APIs for enhanced efficiency"
    ],
  },
  {
    title: "Software Engineer Lead Intern",
    company_name: "DSTRCT Media BV",
    icon: dstrct,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Developed a React native app, using technologies like react-native-gifted-chat, dialogflow for chatbots, alongside cloud databases and real-time updates",
"Led a team of interns, supervising code quality and fostering a cooperative environment and made decisions on database schema and project architecture",
"Proposed and integrated HL7 FHIR APIs with high-level security features for access to EHR's like EPIC/CERNER , ensuring data integrity and authenticity",
"Leveraged technologies such as Node.js, Redux, Firebase and MySQL for backend, delivering cross-platform applications with advanced state management",
"Developed apps,featuring attendance tracker,event-calendars etc utilizing MySQL/NoSQL,Calendly API and advanced features for employee management"

    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I've never met a software developer who truly cares about their clients' success like Kartik does.",
    name: "Paul Helder",
    designation: "CEO and Founder",
    company: "DSTRCT Media B.V.",
    image: "https://media.licdn.com/dms/image/D4E03AQG1DkDEjoPPbg/profile-displayphoto-shrink_400_400/0/1704673130623?e=1714608000&v=beta&t=emOZNH68K5iOPWGTEaGRPHQ5Fs35wMn-S9wsF5MRIwk",
  },
  {
    testimonial:
      "After Kartik optimized our website and worked on our app, our traffic increased. We can't thank him enough!",
    name: "Shuvam Burnwal",
    designation: "CEO",
    company: "Fettle",
    image: "https://media.licdn.com/dms/image/C4E03AQFIUokJ-ADUAg/profile-displayphoto-shrink_400_400/0/1603990655335?e=1714608000&v=beta&t=F-bxjHt7a_fqVTLN00Tji4n93jxZxUVNKTEQ4z0XNYk",
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Lyriks",
    description:
      "Introducing our sleek web platform for global music exploration. Easily search, play, and create playlists from a vast selection of songs. With real-time API integration, discover new tracks effortlessly. Dive into a world of music with our intuitive platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "white-text-gradient",
      },
    ],
    image: music,
    source_code_link: "https://dazzling-marzipan-049203.netlify.app/",
  },
  {
    name: "Banking Website",
    description:
      "Uncover the perfect banking fit effortlessly with our concise website. From detailed bank insights to handy features for seamless comparison, we streamline your search. Empowering you to make informed decisions and elevate your banking experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://tangerine-madeleine-a2e81b.netlify.app/#clients",
  },
  {
    name: "Metaverse",
    description:
      "Step into the future with our groundbreaking metaverse website. Immerse yourself in a digital realm where endless possibilities await. Explore virtual worlds, connect with others, and unleash your creativity like never before. Join us on the journey to redefine reality in the metaverse.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: meta,
    source_code_link: "https://metaverse-sage-psi.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
