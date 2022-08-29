import warbImg from '../assets/projects/warbler-1.jpg';
import portfolio1 from '../assets/projects/portfolio.png';
import portfolio2 from '../assets/projects/portfolio2.png';
import portfolio3 from '../assets/projects/portfolio3.png';
import reactColors from '../assets/projects/reactColors.png';
import reactColors2 from '../assets/projects/reactColors2.png';
import reactColors3 from '../assets/projects/reactColors3.png';
import reactColors4 from '../assets/projects/reactColors4.png';

import planImg from '../assets/projects/plan-react-app.jpg';
import rgbImg from '../assets/projects/rgb-game.jpg';
//import mongoSVG from "../assets/backend/mongo.svg";
import expressSVG from "../assets/backend/express.svg";
import nodeSVG from "../assets/backend/nodejs.svg";
import amplifySVG from '../assets/othertools/awsAmplify.svg'
// import mySqlSVG from "./assets/backend/mysql.svg";
import reactSVG from '../assets/frontend/react.svg'
//import reduxSVG from '../assets/frontend/redux.svg';
import d3SVG from "../assets/frontend/d3.svg";
import materialSVG from "../assets/frontend/material.svg";
import ScssSVG from '../assets/frontend/scss.svg';

const details=[
    {
        name:"Portfolio",
        shortDesc:"",
        description:"This Portfolio worked as sort of my digital canvas so I have added and removed many npm libraries to make this site beautiful and responsive.\nThe beautiful Parallax background was created using a react animation library called React Spring. Material UI is another major library which allowed me to reuse their predefined components which reduced the production time. The Node mailer library helped me with developing the mailing system, where any message sent from the form on portfolio is directly sent my email address.\n   - Front-end - React and Material UI\n   - Backend - Node.js, Express and nodemailer \n   - Deploy - AWS Amplify and Route 53",
        stack:[{name:"React",icon:reactSVG},{name:"Node.js",icon:nodeSVG},{name:"Express",icon:expressSVG},{name:"AWS amplify",icon:amplifySVG}],
        gitLink:"https://github.com/mayanksuchde/portfolio",
        liveDemo:"",
        screenshot:[portfolio1,portfolio2,portfolio3]
      },
      {
        name:"plan-react-app",
        shortDesc:"Component Hierarchy Planner",
        description:"Plan react app is a tool for React developers to plan their component hierarchy before they even begin coding In this app a user can start creating a Tree for React Components. This helps with the planning process and allow the user to manage the entire state of the app.\n User is given with the main App Component node where you can start adding props, state and its child components from the tool box. User can also drag and drop state and props from parent to its child component in the toolbox. If user wants to grow his app they can select a particular node on the tree and start adding children.\n   - Front End - React and D3.js\n   - Back End - Node,Mongo and Express",
        stack:[{name:"React",icon:reactSVG},{name:"D3.js",icon:d3SVG},{name:"Node.js",icon:nodeSVG},{name:"SCSS",icon:ScssSVG}],
        gitLink:"https://github.com/mayanksuchde/plan-react-app",
        liveDemo:"",
        screenshot: [planImg,rgbImg,warbImg]
      },
      {
        name:"Colors App",
        shortDesc:"Clone of Material UI Colors",
        description:"This is a great tool for designers and developers to explore different colors for their projects. You can see list of predefined palettes and one-click on a single color to copies the color value to your clipboard. You can even select between HEX RGB and RGBA. You can also create your own palette and select and save a set of color which will be can be saved and can later be used for reference.",
        stack:[{name:"React",icon:reactSVG},{name:"Material UI",icon:materialSVG}],
        gitLink:"https://github.com/mayanksuchde/colors-app",
        liveDemo:"https://master.d34pf6efnij2f2.amplifyapp.com/",
        screenshot:[reactColors,reactColors2,reactColors3,reactColors4]
      }
    ];

    export default details;