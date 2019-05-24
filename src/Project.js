import React from 'react';  

export default function Project({details}){
    
    return (
        <div className='project'>
            <h3>{details.name}</h3>
            <img src={details.screenshot} alt={details.name}/>
            <p>{details.description}</p>
            <a target='_blank' rel='noreferrer noopener' href={details.gitLink}>Github</a>
        </div>
    );
}