import React, { Component } from 'react';

import './About.scss';


export default class About extends Component {
   componentDidMount(){
        
}

  render() {
    return (
      <div className='about'>
        <h2>About</h2>
        <div className='about__content'>
            <p>I am a Full Stack Developer based in Toronto who is passionate about creative problem solving and creating beautiful and interactive web applications.My experience in solving customer queries and my drive to keep learning new technologies empowers me to create digital products that are user-friendly and responsive across all devices.</p>
            <div id="pie" className='about__content__imgdiv'>
                {/* <div id="pie"></div> */}
                <img src='./profile_pic.jpg' alt="Profile"/>
            </div>
        </div> 
      </div>
    )
  }
}
