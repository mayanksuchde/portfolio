import React, { Component } from 'react';
import { ReactComponent as GitLink } from '../assets/social/github.svg'
import { ReactComponent as LinkedIn } from '../assets/social/linkedin.svg'
import {Spring,config} from 'react-spring/renderprops'
import './Home.scss'; 
import {ArrowDownwardRounded} from '@material-ui/icons';
export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Spring
          from={{opacity:0}}
          to={{opacity:1}}
          config={config.wobbly}
          delay
        >
          {props=><h1 style={props}>Mayank Suchade</h1>}
        </Spring>
        
        <div className="subheaders">
          <h4>Full Stack developer</h4>
          <h4>Lifetime Learner</h4>
          <h4>Coffee Drinker</h4>
        </div>
        <div className="socials">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/mayanksuchde">
            <GitLink style={{ fill :"grey"}} target="_blank" href="https://github.com/mayanksuchde" />
          </a>
          <a href="https://www.linkedin.com/in/mayank-suchade/" rel="noopener noreferrer" target="_blank">
            <LinkedIn  />
          </a>
        </div>
        {/* <div className="DownDiv" href="About">
          <span>Scroll Down</span>
          <ArrowDownwardRounded fontSize='inherit' />
        </div> */}
      </div>
    )
  }
}
