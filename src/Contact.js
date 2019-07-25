import React, { Component } from 'react';
import {ReactComponent as DownloadIcon} from './assets/download.svg';
import resume from './assets/resume.pdf';
import {OpenInNewRounded} from '@material-ui/icons'
import axios from 'axios';
import Button from '@material-ui/core/Button';

import './Styles/Contact.scss';

export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state={
      name: "",
      email:"",
      message:"",
      subject:"",
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
        subject:this.state.subject,
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
      email: '',
      subject:'',
      message: '',
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
            <label htmlFor="subject">Subject:
              <input onChange={e=>this.setState({subject:e.target.value})} type="text" placeholder="Subject" name="subject" value={this.state.subject} />
            </label>
            <label htmlFor="message">Message:
              <textarea onChange={e=>this.setState({message:e.target.message})} name="subject" placeholder="Enter your message" value={this.state.message} >
              </textarea>
            </label> 
            <input type="submit"  value={this.state.buttonText}/>
          </form>
        <div className="ResumeForm" > 
          <form target="_blank" action={resume} method="get">
            <Button type="submit">
              View Resume
              <OpenInNewRounded />
            </Button>
          </form>
        </div>
      </div>
      </div>
    )
  }
}
