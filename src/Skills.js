import React, { Component } from 'react'
import SkillSection from './SkillSection';

export default class Skills extends Component {

  render() {
    let frontend=[
                {
                    name:'React JS',
                    img:''},
            ];
    return (
      <div className='skills'>
        <h2>Skills</h2>
        <SkillSection header="Front-End" stack="" />
      </div>
    )
  }
}
