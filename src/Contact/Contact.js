import React from 'react';
import {Button, Box, TextField} from '@mui/material';
import resume from '../assets/resume.pdf';
import { OpenInNewRounded, Send } from "@mui/icons-material";
import './Contact.scss';
import useInputState from '../hooks/useInputState';
import { purple, red } from '@mui/material/colors';

function Contact() {
    const [name,handleName,resetName]=useInputState("");
    const [email,handleEmail,resetEmail]=useInputState("");
    const [subject,handleSubject,resetSubject]=useInputState("");
    const [message,handleMessage,resetMessage]=useInputState("");
    const primary = purple[200];
    const handleSendMessage=(e) => {
        e.preventDefault();
        //console.log(name,message,subject,email)
        //handle submission here
    }
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
                >
                <TextField className="input" fullWidth id="outlined-basic" label="Name" variant="outlined" value={name} onChange={handleName} />
                <TextField className="input" fullWidth id="outlined-basic" label="Email" variant="outlined" value={email} onChange={handleEmail} />
                <TextField className="input" fullWidth id="outlined-basic" label="Subject" variant="outlined" value={subject} onChange={handleSubject} />
                <TextField 
                    className="input"
                    fullWidth
                    id="outlined-basic" 
                    label="Message" 
                    variant="outlined" 
                    multiline rows={4} 
                    value={message}
                    onChange={handleMessage}
                />
                <Button type="submit" variant='contained' onClick={e=>handleSendMessage(e)} >
                    Send Message  
                    <Send />
                </Button>
            </Box>
                <div className='resume'>
                    <form target="_blank" action={resume} method="get">
                        <Button variant='contained' type="submit">
                            View Resume
                            <OpenInNewRounded />
                        </Button>
                    </form>
                </div>
            </div>
        </div> 
    );
}

export default Contact;