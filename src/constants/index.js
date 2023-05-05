import 
  {
    frontend,
    backend, 
    shopifyTheme, 
    customStore,
    html,
    sass,
    threejs,
    js,
    d3,
    react,
    redux,
    tailwind,
    warbImg,
    portfolio1,
    portfolio2,
    portfolio3,
    reactColors,
    reactColors2,
    reactColors3,
    reactColors4,
    planImg,
    rgbImg,
    nodejs,
    express,
    mongo,
    graphql,
    postgres,
    python,
    socket,
    shopify,
    sketch,
    adobexd,
    blender,
    git,
    jira,
    slack,
    vscode,
    aws,
  } from '../assets';
// import {
//     mobile,
//     backend,
//     creator,
//     web,
//     javascript,
//     typescript,
//     html,
//     css,
//     reactjs,
//     redux,
//     tailwind,
//     nodejs,
//     mongodb,
//     git,
//     figma,
//     docker,
//     meta,
//     starbucks,
//     tesla,
//     shopify,
//     carrent,
//     jobit,
//     tripguide,
//     threejs,
//   } from "../assets";
  
  // export const navLinks = [
  //   {
  //     id: "about",
  //     title: "About",
  //   },
  //   {
  //     id: "work",
  //     title: "Work",
  //   },
  //   {
  //     id: "contact",
  //     title: "Contact",
  //   },
  // ];

  const services = [
    {
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Shopify Theme Expert",
      icon: shopifyTheme,
    },
    {
      title: "Custom Store",
      icon: customStore,
    },
  ];
const skills=[
  {
    name:'Frontend',
    stack:[
      {
        name:'HTML',
        icon:html
      },
      {
        name:'Sass',
        icon:sass
      },
      {
        name:'Javascript',
        icon:js
      },
      {
        name:'Three.js',
        icon:threejs
      },
      {
        name:'React',
        icon:react
      },
      {
        name:'Redux',
        icon:redux
      },
      {
        name:'Tailwind CSS',
        icon:tailwind
      },
      {
        name:'d3.js',
        icon:d3
      }
    ]
  },
  {
    name:'Backend and Database',
    stack:[
      {
        name:'Node JS',
        icon:nodejs
      },
      {
        name:'Express',
        icon:express
      },
      {
        name:'Python',
        icon:python
      },
      {
        name:'Postgres',
        icon:postgres
      },
      {
        name:'MongoDB',
        icon:mongo
      },
      {
        name:'Socket.io',
        icon:socket
      },
      {
        name:'GraphQL',
        icon:graphql
      },
      {
        name:'Shopify',
        icon:shopify
      },
    ]
  },
  {
    name:'Other Tools',
    stack:[
      {
        name:'Git',
        icon:git
      },
      {
        name:'JIRA',
        icon:jira
      },
      {
        name:'VS Code',
        icon:vscode
      },
      {
        name:'Slack',
        icon:slack
      },
      {
        name:'Adobe XD',
        icon:adobexd
      },
      {
        name:'Blender',
        icon:blender
      },
      {
        name:'Sketch',
        icon:sketch
      },
      {
        name:'AWS',
        icon:aws
      },
    ]
  }
];
  // const technologies = [
  //   {
  //     name: "HTML 5",
  //     icon: html,
  //   },
  //   {
  //     name: "CSS 3",
  //     icon: css,
  //   },
  //   {
  //     name: "JavaScript",
  //     icon: javascript,
  //   },
  //   {
  //     name: "TypeScript",
  //     icon: typescript,
  //   },
  //   {
  //     name: "React JS",
  //     icon: reactjs,
  //   },
  //   {
  //     name: "Redux Toolkit",
  //     icon: redux,
  //   },
  //   {
  //     name: "Tailwind CSS",
  //     icon: tailwind,
  //   },
  //   {
  //     name: "Node JS",
  //     icon: nodejs,
  //   },
  //   {
  //     name: "MongoDB",
  //     icon: mongodb,
  //   },
  //   {
  //     name: "Three JS",
  //     icon: threejs,
  //   },
  //   {
  //     name: "git",
  //     icon: git,
  //   },
  //   {
  //     name: "figma",
  //     icon: figma,
  //   },
  //   {
  //     name: "docker",
  //     icon: docker,
  //   },
  // ];
  
  // const experiences = [
  //   {
  //     title: "React.js Developer",
  //     company_name: "Starbucks",
  //     icon: starbucks,
  //     iconBg: "#383E56",
  //     date: "March 2020 - April 2021",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "React Native Developer",
  //     company_name: "Tesla",
  //     icon: tesla,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2021 - Feb 2022",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Web Developer",
  //     company_name: "Shopify",
  //     icon: shopify,
  //     iconBg: "#383E56",
  //     date: "Jan 2022 - Jan 2023",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2023 - Present",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  // ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name:"Portfolio",
      shortDesc:"Website showcasing some of my work",
      description:"This Portfolio worked as sort of my digital canvas so I have added and removed many npm libraries to make this site beautiful and responsive.\nThe beautiful Parallax background was created using a react animation library called React Spring. Material UI is another major library which allowed me to reuse their predefined components which reduced the production time. The Node mailer library helped me with developing the mailing system, where any message sent from the form on portfolio is directly sent my email address.\n   - Front-end - React and Material UI\n   - Backend - Node.js, Express and nodemailer \n   - Deploy - AWS Amplify and Route 53",
      // stack:[{name:"React",icon:reactSVG},{name:"Node.js",icon:nodeSVG},{name:"Express",icon:expressSVG},{name:"AWS amplify",icon:amplifySVG}],
      gitLink:"https://github.com/mayanksuchde/portfolio",
      liveDemo:"",
      screenshots:[portfolio1,portfolio2,portfolio3]
    },
    {
      name:"plan-react-app",
      shortDesc:"Component Hierarchy Planner",
      description:"Plan react app is a tool for React developers to plan their component hierarchy before they even begin coding In this app a user can start creating a Tree for React Components. This helps with the planning process and allow the user to manage the entire state of the app.\n User is given with the main App Component node where you can start adding props, state and its child components from the tool box. User can also drag and drop state and props from parent to its child component in the toolbox. If user wants to grow his app they can select a particular node on the tree and start adding children.\n   - Front End - React and D3.js\n   - Back End - Node,Mongo and Express",
      // stack:[{name:"React",icon:reactSVG},{name:"D3.js",icon:d3SVG},{name:"Node.js",icon:nodeSVG},{name:"SCSS",icon:ScssSVG}],
      gitLink:"https://github.com/mayanksuchde/plan-react-app",
      liveDemo:"",
      screenshots: [planImg,rgbImg,warbImg]
    },
    {
      name:"Colors App",
      shortDesc:"Clone of Material UI Colors",
      description:"This is a great tool for designers and developers to explore different colors for their projects. You can see list of predefined palettes and one-click on a single color to copies the color value to your clipboard. You can even select between HEX RGB and RGBA. You can also create your own palette and select and save a set of color which will be can be saved and can later be used for reference.",
      // stack:[{name:"React",icon:reactSVG},{name:"Material UI",icon:materialSVG}],
      gitLink:"https://github.com/mayanksuchde/colors-app",
      liveDemo:"https://master.d34pf6efnij2f2.amplifyapp.com/",
      screenshots:[reactColors,reactColors2,reactColors3,reactColors4]
    }
  ];
  
  // export { services, technologies, experiences, testimonials, projects };
  export { services, skills, projects };