import {
    mobile,
    backend,
    web,
    javascript,
    postgres,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    qdrant,
    genpact,
    threejs,
    niit,scholarsHome,ddha,
    toDoList,
    chatApp,
    exerciseTracker,
    java,
    python,
    cpp,
    gcp,
    aws,
    azure,
    angular,
    fastapi,
    amazonTracker
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "DevOps Engineer",
      icon: backend,
    },
  ];
  
  const technologies = [
    // {
    // name: "Java",
    // icon: java,
    // },
    {
    name: "Python",
    icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "cpp",
    //   icon: cpp,
    // },
    {
      name: "Microsoft Azure",
      icon: azure,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "FastAPI",
      icon: fastapi,
    },
    {
      name: "Postgres",
      icon: postgres,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
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
    {
      title: "Software Developer",
      company_name: "Genpact",
      icon: genpact,
      iconBg: "#383E56",
      date: "July 2024 - Present",
      points: [
        "Worked on RAG application that allows enterprises to query SOPs, retrieving answers along with relevant pages, images or tables.",
        // "Making complex websites with heavy animations to showcase the wide variety of generative AI solutions provided by the company.",
        // "Updating the Azure RAG application's code according to client's requirement and deploying it  through their VDI's.",
        "Developed multiple Angular-based frontend applications with elegant designs and animations.",

        "Led the development and deployment of a loan eligibility application. Implemented a CI/CD pipeline with GitHub Actions to automate deployments to Azure Kubernetes."
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Genpact",
      icon: genpact,
      iconBg: "#383E56",
      date: "Jan 2024 - July 2024",
      points: [
        "Migrated a RAG system from Azure to AWS, enabling organizations to query PDFs and retrieve relevant answers with document snapshots.",
        "Developed a document search and keyword highlighter tool, allowing users to query files and highlight keywords in the results.",
      ],
    },
    {
      title: "Freelancing",
      company_name: "Nirant Kasliwal",
      icon: qdrant,
      iconBg: "#383E56",
      date: "June 2023 - July 2023, Dec 2023 - Jan 2024",
      points: [
        "Developing Jupyter files demonstrating the use of Qdrant vector db & vector similarity search engine.",
        "Translating and transliterating Hugging-Face datasets from English to Hindi using GCP translation api and AI4BHARAT model. Using Remote GPU’s to speed up the process.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:"NIIT University",
      name: "B.tech CSE 8.24 CGPA",
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
      name: "Amazon Scraper and Price tracker",
      description:
        "Scrapes Amazon product details from user-provided URLs and tracks selected items for price drops or restocks, notifying users via a daily cron job.",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: amazonTracker,
      source_code_link: "https://github.com/kartikgupta321/web-price-scraper",
    },
    {
      name: "Chat application",
      description:
        // "Users can sign up and log in, enabling them to view and communicate with other users. Socket IO facilitates instant message updates. A custom PostgreSQL schema is designed to efficiently organize user data and messages.",
        "Users can sign up and log in to connect and communicate with others seamlessly. Real-time messaging is powered by Socket.IO, ensuring instant message updates.",
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
        // "Exercise logging project with React frontend, Node.js backend using Express and Mongoose. Frontend on Netlify, backend on Render, data managed via MongoDB Atlas.",
        "An exercise logging app with a React frontend (Netlify) and a Node.js backend (Express, Render), using MongoDB Atlas for data management.",
      tags: [
        {
          name: "mern",
          color: "blue-text-gradient",
        },
        {
          name: "render",
          color: "green-text-gradient",
        },
      ],
      image: exerciseTracker,
      source_code_link: "https://github.com/kartikgupta321/mern-exercise-tracker",
    },
    // {
    //   name: "To Do List",
    //   description:
    //     "A React to-do app that stores tasks in local storage for persistence, ensuring tasks are retained even after tab or system closure. Hosted on Netlify for easy access.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "netlify",
    //       color: "green-text-gradient",
    //     },
    //   ],
    //   image: toDoList,
    //   source_code_link: "https://github.com/kartikgupta321/todos-list",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };