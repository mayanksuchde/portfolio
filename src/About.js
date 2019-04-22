import React, { Component } from 'react';



export default class About extends Component {
  render() {
    return (
      <div className='about'>
        <h2>About</h2>
        <div className='about__content'>
            <p>I am a MERN stack developer based in Toronto. I create dynamic and responsive Single Page Applications (SPA). I love learning about new and interesting JS libraries and frameworks. Along with coding, my passion lies in exploring different cuisines of the world.</p>
            <div className='about__content__imgdiv'>
                <img src='./profile_pic.jpg' alt="Profile"/>
            </div>
        </div> 
      </div>
    )
  }
}
