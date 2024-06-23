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
    title: "Ruby on Rails Developer",
    icon: rails,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "API | Backend Developer",
    icon: api,
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
    title: "Ruby on Rails Developer",
    company_name: "Codility Solution",
    icon: codility,
    iconBg: "#383E56",
    date: "Apr 2022 - Aug 2023",
    points: [
      "Developing and maintaining web applications using Ruby on Rails and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Building and integrating RESTful APIs to enhance application functionality.",
      "Optimizing application performance and ensuring scalability of the web applications.",
    ],
  },
  {
    title: "React and Ruby on Rails Developer",
    company_name: "Tecaudex",
    icon: tecaudex,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Present",
    points: [
      "Leading the development and deployment of scalable web applications using React.js and Ruby on Rails.",
      "Transforming complex Figma designs into functional, responsive web pages from scratch.",
      "Implementing advanced state management solutions and optimizing component performance in React.js.",
      "Developing RESTful APIs and ensuring seamless integration with front-end components.",
      "Automating deployment processes and managing continuous integration/continuous deployment (CI/CD) pipelines.",
      "Mentoring junior developers and conducting knowledge-sharing sessions on best practices in React and Ruby on Rails.",
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

export { services, technologies, experiences, testimonials, projects };
