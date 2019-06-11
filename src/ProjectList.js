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
        description:"It is a mini version of twitter where a User can start posting messages upto 280 characters",
        stack:[],
        gitLink:"#",
        liveDemo:"",
        screenshot:warbImg
      },
      {
        name:"plan-react-app",
        description:"It is a mini version of twitter where a User can start posting messages upto 280 characters",
        stack:[],
        gitLink:"https://github.com/mayanksuchde/plan-react-app",
        liveDemo:"",
        screenshot:planImg
      },
      {
        name:"RGB game",
        description:"It is a mini version of twitter where a User can start posting messages upto 280 characters",
        stack:[],
        gitLink:"#",
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
