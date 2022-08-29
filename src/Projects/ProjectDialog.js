import React,{ useState } from 'react';
import {Dialog,Button, IconButton, Slide} from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import StackIcon from './StackIcon';
import {FullscreenRounded,WebRounded,Close} from '@mui/icons-material';
import {ReactComponent as GitIcon} from '../assets/othertools/github.svg';
import './Projects.scss'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function ProjectDialog({details}) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return ( 
        <div>
            <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
                <FullscreenRounded />
            </IconButton>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                className='Dialog'
            >
                <h2 className='title' >{details.name}</h2>
                <IconButton className='close-button' onClick={handleClose}>
                    <Close />
                </IconButton>
                <div className='container'>
                    <div className='mainContent'>
                    {/* SnapShots */}
                    <Carousel
                    className='Carousel'
                        autoPlay={true}
                        infiniteLoop={true}
                        showIndicators={false}
                        showThumbs={false}
                        swipeable={true} >
                        {details.screenshot.map((pic,i)=>(
                        <div key={pic}>
                            <img  className='image' src={pic} alt="Screenshot"/>  
                        </div>
                        ))}
                    </Carousel>
                    <div className='description'>
                        {details.description}
                    </div>
                    {/* <p className={classes.desc}>{details.description}</p> */}
                    </div>
                    <div className='stack-container'>
                        <h3>Tech Stack</h3>
                        <div className='icons'>
                            {details.stack.map((icon,i)=>(
                                <StackIcon key={i} icon={icon}/>
                            ))}
                        </div>
                        <div className='buttons'>
                        <Button variant="contained" color="primary" target="_blank" href={details.gitLink} className='button'>
                            Git Repo
                            <GitIcon />
                        </Button>
                        {(details.liveDemo!=="")?<Button variant="contained" color="secondary" target="_blank" href={details.liveDemo} className='button'>
                            Live demo
                            <WebRounded />
                        </Button> : ""}
                        
                        </div>
                    </div>
                    
                    

                </div>
            </Dialog>
        </div> 
    );
}

export default ProjectDialog;