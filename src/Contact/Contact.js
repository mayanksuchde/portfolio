import React,{useState} from 'react';
import {Button, Box, TextField} from '@mui/material';
//import resume from '../assets/resume.pdf';
import { Send } from "@mui/icons-material";
import './Contact.scss';
import useInputState from '../hooks/useInputState';

function Contact() {
    const [name,handleName]=useInputState("");
    const [email,handleEmail]=useInputState("");
    const [subject,handleSubject]=useInputState("");
    const [message,handleMessage]=useInputState("");
    const [result, setResult] = useState("Send Message");

  const submitMessage = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c09e02db-c56b-4ec0-a9b7-005b56042331");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };
    return ( 
        <div className="contact page">
            <h2>Get in Touch</h2>
            <div className='container'>
            <Box
                component="form"
                className="contact-form"
                sx={{
                    '& > :not(style)': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={submitMessage}
                >
                <TextField className="input" name="name" fullWidth id="outlined-basic" label="Name" variant="outlined" value={name} onChange={handleName} />
                <TextField className="input" name="email" fullWidth id="outlined-basic" label="Email" variant="outlined" value={email} onChange={handleEmail} />
                <TextField className="input" name="subject" fullWidth id="outlined-basic" label="Subject" variant="outlined" value={subject} onChange={handleSubject} />
                <TextField 
                    className="input"
                    fullWidth
                    id="outlined-basic" 
                    label="Message" 
                    name="message"
                    variant="outlined" 
                    multiline rows={4} 
                    value={message}
                    onChange={handleMessage}
                />
                <Button type="submit" variant='contained' >
                    {result}  
                    <Send />
                </Button>
            </Box>
                {/* <div className='resume'>
                    <form target="_blank" action={resume} method="get">
                        <Button variant='contained' type="submit">
                            View Resume
                            <OpenInNewRounded />
                        </Button>
                    </form>
                </div> */}
            </div>
        </div> 
    );
}

export default Contact;