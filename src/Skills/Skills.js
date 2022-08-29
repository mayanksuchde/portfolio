import React from 'react';
import SkillSection from './SkillSection';
import {frontEnd,backEnd,otherTools} from './skillslist';
import './Skills.scss';

function Skills() {
    return ( 
        <div className='page'>
            <h2>Skills</h2>
                <div className='skills'>
                    <SkillSection header="Front-End" stack={frontEnd} />
                    <SkillSection header="Back-End and Databases" stack={backEnd} />
                    <SkillSection header="Other Tools" stack={otherTools} />
                </div>
        </div>
     );
}

export default Skills;