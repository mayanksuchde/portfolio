import React, { useContext } from 'react';
import { WindowContext } from '../context/WindowSize';
import Project from './Project';
import ProjectMobile from './ProjectMobile';
import projArr from './projectDetails';
import './Projects.scss';
function Projects() {
    const { clientHeight, clientWidth } = useContext(WindowContext);
    return ( 
    <div className="projects page">
        <h2>Projects</h2>
        {
          clientWidth<560?
            (<ProjectMobile list={projArr} />)
            :
              <ul>
                {projArr.map((p,i)=><li key={i}><Project details={p} /></li>)}
              </ul>   
        }
    </div> );
}

export default Projects;