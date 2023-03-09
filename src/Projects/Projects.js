import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Project from './Project';
import ProjectMobile from './ProjectMobile';
import projArr from './projectDetails';
import './Projects.scss';
function Projects() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return ( 
    <div className="projects page">
        <h2>Projects</h2>
        {
          isMobile?
            (<ProjectMobile list={projArr} />)
            :
              <ul>
                {projArr.map((p,i)=><li key={i}><Project details={p} /></li>)}
              </ul>   
        }
    </div> );
}

export default Projects;