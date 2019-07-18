import React from 'react';  
import './Styles/Project.scss';
import {FullscreenRounded,LayersRounded} from '@material-ui/icons/';
import { IconButton } from '@material-ui/core';
import ProjectDialog from './ProjectDialog';
import GitIcon from './GitIcon';


export default function Project({details}){
    
    return (
        <div className='project'>
            
            <h3>{details.name}</h3>
            <img src={details.screenshot[0]} alt={details.name}/>
            <div className="project__content">
                <p>{details.shortDesc} </p>
                <IconButton target="_blank" href={details.gitLink} >
                    <GitIcon />
                </IconButton>
                <LayersRounded />
                <ProjectDialog details={details} />

            </div>
        </div>  
    );
}