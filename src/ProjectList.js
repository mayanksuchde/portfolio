import React, { Component } from 'react';
import Project from './Project';
import warbImg from './assets/projects/warbler-1.jpg';
import planImg from './assets/projects/plan-react-app.jpg';
import rgbImg from './assets/projects/rgb-game.jpg';
export default class ProjectList extends Component {

  render() {
    let projArr=[
      {
        name:"Warbler",
        shortDesc:"twitter clone",
        description:"It is a mini version of twitter where a User can start posting messages upto 280 characters",
        stack:[],
        gitLink:"https://github.com/mayanksuchde/warbler",
        liveDemo:"",
        screenshot:warbImg
      },
      {
        name:"plan-react-app",
        shortDesc:"twitter clone",
        description:"It is a mini version of twitter where a User can start posting messages upto 280 characters",
        stack:[],
        gitLink:"https://github.com/mayanksuchde/plan-react-app",
        liveDemo:"",
        screenshot: planImg
      },
      {
        name:"Colors App",
        shortDesc:"Clone of Material UI Colors",
        description:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets ",
        stack:[],
        gitLink:"https://github.com/mayanksuchde/colors-app",
        liveDemo:"",
        screenshot:rgbImg
      }
    ];
    return (
      <div className='projects_container'>
        <h2>Projects</h2>
        <ul>
          {projArr.map((p,i)=><li key={i}><Project details={p} /></li>)}
        </ul>
      </div>
    )
  }
}
