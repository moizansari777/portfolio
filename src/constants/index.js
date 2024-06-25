import {
  backend,
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
  codility,
  viewexchange,
  cmfusion,
  atp,
  rails,
  react,
  api,
  tecaudex,
  postgresql,
  sql,
  bootstrap,
  equirole,
  smacc,
  thewalt
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
    title: "Ruby on Rails",
    icon: rails,
  },
  {
    title: "Postgresql",
    icon: postgresql,
  },
  {
    title: "JavaScript Developer",
    icon: javascript,
  },
  {
    title: "API | Backend Developer",
    icon: git,
  },
];


const technologies = [
  {
    name: "Ruby on Rails",
    icon: rails,
  },
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
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Postgresql",
    icon: postgresql,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Tecaudex",
    icon: tecaudex,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "Leading the development and deployment of scalable web applications using React.js and Ruby on Rails.",
      "Transforming complex Figma designs into functional, responsive web pages from scratch.",
      "Deployming web applications on AWS and heroku with capistrano.",
      "Developing RESTful APIs and ensuring seamless integration with front-end components.",
      "Automating deployment processes and managing continuous integration/continuous deployment (CI/CD) pipelines.",
      "Mentoring junior developers and conducting knowledge-sharing sessions on best practices on Ruby on Rails.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Agilekode",
    icon: codility,
    iconBg: "#383E56",
    date: "Aug 2022 - Oct 2023",
    points: [
      "Developing and maintaining web applications using Ruby on Rails and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Building and integrating RESTful APIs to enhance application functionality.",
      "Optimizing application performance and ensuring scalability of the web applications.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ViewExchange",
    description:
      "US-based social media platform where users can search for and discuss issues at the state, county, and global levels. Users can create new issues, share their opinions on existing topics, and engage with the community to exchange views and ideas.",
    tags: [
      {
        name: "Ruby On Rails",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: viewexchange,
    source_code_link: "https://www.viewexchange.com/",
  },
  {
    name: "CM Fusion",
    description:
      "Web-based application designed to manage construction sites and entire projects. It allows users to hire engineers and other staff, handle payments, and track invoices, facilitating efficient project management and coordination.",
    tags: [
      {
        name: "Ruby On Rails",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: cmfusion,
    source_code_link: "https://www.cmfusion.com/",
  },
  {
    name: "AnswerThePublic",
    description:
      "A platform designed for SEO purposes, allowing users to search for keywords and access data such as CPC and other relevant metrics. The platform supports keyword searches for various platforms including TikTok, Google, Bing, and Amazon.",
    tags: [
      {
        name: "Ruby On Rails",
        color: "blue-text-gradient",
      },
      {
        name: "Stimulus",
        color: "green-text-gradient",
      },
      {
        name: "Action Cable",
        color: "pink-text-gradient",
      },
    ],
    image: atp,
    source_code_link: "https://answerthepublic.com/",
  },
];
// const projects = [
//   {
//     name: "TheWAlt.io",
//     description:
//       "Build a project that does compare resumes with job description and had quantified success using rails. This project’s involves AI with the backend to measure the success job compared matched results.",
//     tags: [
//       {
//         name: "Ruby On Rails",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "AWS",
//         color: "green-text-gradient",
//       },
//       {
//         name: "bootstrap",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: thewalt,
//     source_code_link: "https://www.thewalt.io/",
//   },
//   {
//     name: "SMACC-7",
//     description:
//       "Revolutionize retail efficiency with our Rails-based POS system, boosting sales by 30% and reducing checkout times by 50%.our POS ensures seamless transactions, inventory management, and customer satisfaction.",
//     tags: [
//       {
//         name: "Ruby On Rails",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "Turbo (stimulus)",
//         color: "green-text-gradient",
//       },
//       {
//         name: "bootstrap",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: smacc,
//     source_code_link: "https://www.smacc.com/en/",
//   },{
//     name: "Equirole",
//     description:
//       "Built a tool to search for Hiring Managers and Recruiters by using Rails, Postgres, Firebase and boolean queries. Over 25000 people have used it so far, with 5000+ queries being saved and shared, and search results",
//     tags: [
//       {
//         name: "Ruby On Rails",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "javascript",
//         color: "green-text-gradient",
//       },
//       {
//         name: "bootstrap",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: equirole,
//     source_code_link: "https://equirole.com/",
//   },
//   {
//     name: "ViewExchange",
//     description:
//       "US-based social media platform where users can search for and discuss issues at the state, county, and global levels. Users can create new issues, share their opinions on existing topics, and engage with the community to exchange views and ideas.",
//     tags: [
//       {
//         name: "Ruby On Rails",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "javascript",
//         color: "green-text-gradient",
//       },
//       {
//         name: "postgresql",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: viewexchange,
//     source_code_link: "https://www.viewexchange.com/",
//   },
//   {
//     name: "CM Fusion",
//     description:
//       "Web-based application designed to manage construction sites and entire projects. It allows users to hire engineers and other staff, handle payments, and track invoices, facilitating efficient project management and coordination.",
//     tags: [
//       {
//         name: "Ruby On Rails",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "javascript",
//         color: "green-text-gradient",
//       },
//       {
//         name: "bootstrap",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: cmfusion,
//     source_code_link: "https://www.cmfusion.com/",
//   },
//   {
//     name: "AnswerThePublic",
//     description:
//       "A platform designed for SEO purposes, allowing users to search for keywords and access data such as CPC and other relevant metrics. The platform supports keyword searches for various platforms including TikTok, Google, Bing, and Amazon.",
//     tags: [
//       {
//         name: "Ruby On Rails",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "Stimulus",
//         color: "green-text-gradient",
//       },
//       {
//         name: "Action Cable",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: atp,
//     source_code_link: "https://answerthepublic.com/",
//   },
// ];

export { services, technologies, experiences, testimonials, projects };
