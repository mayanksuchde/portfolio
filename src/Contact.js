import React, { Component } from 'react';
import downloadIcon from './assets/download.svg';
import resume from './assets/resume.pdf';
import axios from 'axios';

export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state={
      name: "",
      email:"",
      message:"",
      sent:false,
      buttonText:"Send Message"
    }
  }
  formSubmit=(e)=>{
    e.preventDefault();
    this.setState({
      buttonText:"...Sending"
    })

    let data = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
    }
    
    axios.post('http://localhost:8080/api/mail', data)
    .then( res => {
        this.setState({ sent: true }, this.resetForm())
    })
    .catch( () => {
      console.log('Message not sent')
    })
  }
  resetForm=()=>{
    this.setState({
      name: '',
      message: '',
      email: '',
      buttonText: 'Message Sent'
    })
  }
  render() {

    
    return (
      <div className='contact'>
        <h2>Get In Touch</h2>
          <div className="content">

          <form onSubmit={e=>this.formSubmit(e)}>
            <label htmlFor="name">Name:
              <input onChange={e=>this.setState({name:e.target.value})} type="text" name="name" value={this.state.name} id=""/>
            </label>
            <label htmlFor="email">Email:
              <input onChange={e=>this.setState({email:e.target.value})} type="text" name="email" value={this.state.email} />
            </label>
            <label htmlFor="subject">Email:
              <input onChange={e=>this.setState({subject:e.target.value})} type="text" placeholder="Subject" name="subject" value={this.state.subject} />
            </label>
            <label htmlFor="message">Message:
              <textarea onChange={e=>this.setState({message:e.target.message})} name="subject" placeholder="enter your message">
              </textarea>
            </label> 
            <input type="submit"  value={this.state.buttonText}/>
          </form>
          <div>
            <form target="_blank" action={resume} method="get">
              <button type='submit' className="resume">
                <img src={downloadIcon} alt="Download" />
                Download Resume
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
