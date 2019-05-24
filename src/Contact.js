import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <h2>Get In Touch</h2>
          <div className="content">

          <form action="">
            <label htmlFor="name">Name:
              <input type="text" name="name" id=""/>
            </label>
            <label htmlFor="email">Email:
              <input type="text" name="email" id=""/>
            </label>
            <label htmlFor="message">Message:
              <textarea name="message" placeholder="enter your message">
              </textarea>
            </label> 
            <input type="submit" value="Send"/>
          </form>
          <div>
            Do something here
          </div>
        </div>
      </div>
    )
  }
}
