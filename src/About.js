import React, { Component } from 'react';



export default class About extends Component {
  render() {
    return (
      <div className='about'>
        <h2>About</h2>
        <div className='about__content'>
            <p>I am a Full Stack Developer based in Toronto who is passionate about creative problem solving and creating beautiful and interactive web applications.My experience in solving customer queries and my drive to keep learning new technologies empowers me to create digital products that are user-friendly and responsive across all devices.</p>
            <div className='about__content__imgdiv'>
                <img src='./profile_pic.jpg' alt="Profile"/>
            </div>
        </div> 
      </div>
    )
  }
}
