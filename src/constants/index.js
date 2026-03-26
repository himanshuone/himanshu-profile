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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
// import image from "../"

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
    title: "React",
    icon: web,
  },
  {
    title: "Express",
    icon: mobile,
  },
  {
    title: "Django",
    icon: backend,
  },
  {
    title: "Tailwind",
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
  
  {
    name: "React JS",
    icon: reactjs,
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
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Low Level Language",
    company_name: "Self Projects",
    icon: backend,
    iconBg: "#383E56",
    date: "May 2021 - 2023",
    points: [
      "Developing and maintaining experimental system-level scripts",
      "Collaborated with peers to design and develop multiple products, aligning features with specific user needs and use cases."
      ],
  },
  {
    title: "Django Developer",
    company_name: "Self and Freelancing",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Feb 2024",
    points: [
      "Created and deployed real-world projects such as portfolio websites for wedding companies and NGOs."
      ,"enhancing development skills through hands-on learning and problem-solving on these problems."],
  },
  
  {
    title: "Full Stack Developer",
    company_name: "Self Learner",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Express.js and other related technologies.",
          "Implementing responsive design and ensuring cross-browser compatibility.",
          "Created Multiple Projects solving real life problems such as N+1 Problem"
 
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as my heart, but Himanshu proved me wrong.",
    name: "Lokesh Pandit",
    designation: "CEO",
    company: "Funckyfusionmedia",
    image:
      "https://i.postimg.cc/PCs5kbTt/4BD6725D-7E0B-4EDB-BF16-1128A403819C.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their Friends' success like Himanshu does.",
    name: "Anurag Pal",
    designation: "COO",
    company: "Opposite Trend",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFJvk6JMVKRsw/profile-displayphoto-scale_200_200/B56ZlJT9_zI4AY-/0/1757871600680?e=2147483647&v=beta&t=wyjorT0Wvo4eVn3lrI_JGMyDTNupZnVeDlU5MgesIzw",
  },
  {
    testimonial:
      "After Himanshu optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Chirag Patil",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://i.postimg.cc/MXq0zRZy/IMG-1344.jpg",
  },
];

const projects = [
  {
    name: "iSeeThrough",
    description:
      "Created “ISeeThrough,” a movie discovery web application integrated with external APIs, allowing users to search, explore, and track watched movies through a personalized watch history system.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite3",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "UpYou",
    description:
"Engineered “UpYou,” a full-stack productivity web application incorporating task management, Pomodoro technique, and habit tracking to improve user productivity and consistency." ,   tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
