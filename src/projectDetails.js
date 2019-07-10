import warbImg from './assets/projects/warbler-1.jpg';
import planImg from './assets/projects/plan-react-app.jpg';
import rgbImg from './assets/projects/rgb-game.jpg';
import mongoSVG from "./assets/backend/mongo.svg";
import expressSVG from "./assets/backend/express.svg";
import nodeSVG from "./assets/backend/nodejs.svg";
// import mySqlSVG from "./assets/backend/mysql.svg";
import reactSVG from './assets/frontend/react.svg'
import reduxSVG from './assets/frontend/redux.svg';
import d3SVG from "./assets/frontend/d3.svg";
import materialSVG from "./assets/frontend/material.svg";
import ScssSVG from './assets/frontend/scss.svg';

export default [
    {
        name:"Warbler",
        shortDesc:"twitter clone",
        description:"It is a mini version of twitter where a User can start posting messages upto 280 characters.Anim incididunt qui dolore qui nisi sit pariatur veniam Lorem deserunt laboris in voluptate. Cupidatat reprehenderit labore dolor mollit commodo velit nostrud sint dolor Lorem laboris officia. Sunt culpa exercitation aliqua Lorem et ipsum proident irure non tempor id minim dolore. Ipsum quis esse pariatur pariatur laboris laboris est sunt sit. Ipsum aliqua est adipisicing anim elit amet ipsum anim laborum et excepteur magna anim qui.",
        stack:[{name:"React",icon:reactSVG},{name:"Redux",icon:reduxSVG},{name:"Node.js",icon:nodeSVG},{name:"Express",icon:expressSVG},{name:"MongoDB",icon:mongoSVG}],
        gitLink:"https://github.com/mayanksuchde/warbler",
        liveDemo:"",
        screenshot:[warbImg]
      },
      {
        name:"plan-react-app",
        shortDesc:"twitter clone",
        description:"It is a mini version of twitter where a User can start posting messages upto 280 characters Qui cillum incididunt ea adipisicing voluptate sit reprehenderit. Proident sint adipisicing id voluptate aliqua fugiat adipisicing labore ea sit dolor fugiat voluptate mollit. Exercitation voluptate reprehenderit est ea nostrud eiusmod voluptate Lorem commodo cillum laborum consectetur. Elit ad esse in ullamco cupidatat amet. Aliquip ut proident laboris eu tempor. Fugiat non culpa et aliqua duis laborum amet. Velit enim deserunt cupidatat et non elit sunt eu ut aliquip ipsum proident enim.",
        stack:[{name:"React",icon:reactSVG},{name:"D3.js",icon:d3SVG},{name:"Node.js",icon:nodeSVG},{name:"SCSS",icon:ScssSVG}],
        gitLink:"https://github.com/mayanksuchde/plan-react-app",
        liveDemo:"",
        screenshot: [planImg,rgbImg,warbImg]
      },
      {
        name:"Colors App",
        shortDesc:"Clone of Material UI Colors",
        description:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets ",
        stack:[{name:"React",icon:reactSVG},{name:"Material UI",icon:materialSVG}],
        gitLink:"https://github.com/mayanksuchde/colors-app",
        liveDemo:"",
        screenshot:[rgbImg]
      }
    ]