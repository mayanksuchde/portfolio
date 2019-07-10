import React, { Component } from 'react';
import Project from './Project';
import projArr from './projectDetails';
export default class ProjectList extends Component {

  render() {
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
