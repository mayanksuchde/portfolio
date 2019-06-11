import React from 'react';  

export default function Project({details}){
    
    return (
        <div className='project'>
            <h3>{details.name}</h3>
            <img src={details.screenshot} alt={details.name}/>
            <div className="buttons">
                <p>{details.description} ...read more</p>
                <a target='_blank' rel='noreferrer noopener' href={details.gitLink} >
                    <img src='./assets/social/github.svg' alt="Link to Github repo"/>
                </a>
                
            </div>
        </div>
    );
}