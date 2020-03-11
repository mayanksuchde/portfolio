import React, { Component } from 'react'
import SkillSection from './SkillSection';
import {frontEnd,backEnd,otherTools} from './skillslist';// should be in the same foldeer a  this file...
import './Skills.scss';
export default class Skills extends Component {

  render() {
   
    return (
      <div className='skills-container'>
        <h2>Skills</h2>
            <div className='skills'>
                <SkillSection header="Front-End" stack={frontEnd} />
                <SkillSection header="Back-End and Databases" stack={backEnd} />
                <SkillSection header="Other Tools" stack={otherTools} />
            </div>
      </div>
    )
  }
}
