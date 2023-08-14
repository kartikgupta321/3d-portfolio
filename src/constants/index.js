import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    postgres,
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
    qdrant,
    carrent,
    jobit,
    tripguide,
    threejs,
    niit,scholarsHome,ddha,
    toDoList,
    chatApp,
    exerciseTracker,
    java,
    python,
    cpp,
    gcp
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
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Data Science and NLP developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    name: "Java",
    icon: java,
    },
    {
    name: "Python",
    icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "cpp",
      icon: cpp,
    },
    {
      name: "Postgres",
      icon: postgres,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "GCP",
      icon: gcp,
    },
  ];
  
  const experiences = [
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Data Science and NLP developer",
      company_name: "Nirant Kasliwal",
      icon: qdrant,
      iconBg: "#383E56",
      date: "June 2023 - Mid July 2023",
      points: [
        "Developing ipynb files demonstrating the uses of Qdrant vector db & vector similarity search engine.",
        "Working with datasets and models from HuggingFace, LLms like ChatGPT, Falcon and langchain framework.",
        "Topics include different type of question answering, langchain retrieval qa, video search, etc.",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:"NIIT University",
      name: "B.tech CSE 8.37 CGPA",
      designation: "Neemrana, Rajasthan",
      company: "September 2020 - 4th year",
      image: niit,
    },
    {
      testimonial:
        "Scholars Home",
      name: "Class 12th 77.25%",
      designation: "Dehradun, India",
      company: "July 2018 - March 2019",
      image: scholarsHome,
    },
    {
      testimonial:
        "Dehradun Hills Academy",
      name: "Class 10th 9.2 CGPA",
      designation: "Dehradun, India",
      company: "July 2016 - March 2017",
      image: ddha,
    },
  ];
  
  const projects = [
    {
      name: "Chat application",
      description:
        "Users can sign up and log in, enabling them to view and communicate with other users. Socket IO facilitates instant message updates. A custom PostgreSQL schema is designed to efficiently organize user data and messages.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postgres",
          color: "green-text-gradient",
        },
        {
          name: "Socket.IO",
          color: "pink-text-gradient",
        },
      ],
      image: chatApp,
      source_code_link: "https://github.com/kartikgupta321/PERN-chat-app",
    },
    {
      name: "Exercise Tracker",
      description:
        "Exercise logging project with React frontend, Node.js backend using Express and Mongoose. Frontend on Netlify, backend on Render, data managed via MongoDB Atlas.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: exerciseTracker,
      source_code_link: "https://github.com/kartikgupta321/mern-exercise-tracker",
    },
    {
      name: "To Do List",
      description:
        "A React to-do app that stores tasks in local storage for persistence, ensuring tasks are retained even after tab or system closure. Hosted on Netlify for easy access.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "netlify",
          color: "green-text-gradient",
        },
        // {
        //   name: "css",
        //   color: "pink-text-gradient",
        // },
      ],
      image: toDoList,
      source_code_link: "https://github.com/kartikgupta321/todos-list",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };