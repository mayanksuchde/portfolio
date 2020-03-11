import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Button from '@material-ui/core/Button';
import StackIcon from './StackIcon';
import {FullscreenRounded,WebRounded} from '@material-ui/icons/';
import { IconButton } from '@material-ui/core';
import {ReactComponent as GitIcon} from '../assets/othertools/github.svg';
const styles = theme => ({
  root: {
    margin: theme.spacing(3)

  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[700],
  },
  
  title:{
    marginLeft:"2%",
    marginTop:"2%",
    color:"#241864",
    marginBottom:"0",
  },
  container:{
    width:"100%",
    height:"88vh",
    display:"flex",
    color:"#241864",
  },
  mainContent:{
    padding:"1rem",
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"flex-start"
  },
  buttons:{
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
  },
  button:{
    margin:"3px"
      },
  Carousel:{
    
  },
  desc:{
    alignSelf:"flex-start",
    width:"fit-content",
    marginBottom:"16px"
  },
  stackContainer:{
    minWidth:"28%",
    postion:"relative",
    float:"left",
    margin:theme.spacing(3),
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems:"flex-start",
    height:"78%",
    border:"4px solid #25274d",
    borderRadius:"16px",

    "& h3":{
      width:"100%",
      textAlign:"center",
      margin:"12px auto"
    },
  },
  buttons:{
    "& svg":{
      height:"24px",
      padding:theme.spacing(1)
    }
  },
  icon: {
    margin: theme.spacing(3),
  },

});

class ProjectDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
      const {details,classes}=this.props;
      let description = details.description.split('\n').map((item, i) => {
        return <p  key={i}>{item}</p>;
    });
    return (
      <div>
        <IconButton variant="outlined" color="primary" onClick={this.handleClickOpen}>
            <FullscreenRounded />
        </IconButton>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          fullWidth={true}
          maxWidth="lg"
          open={this.state.open}
          PaperProps={{
            style: {
              backgroundImage:"linear-gradient(to bottom right,#757ab8, #919db6)" ,
              boxShadow: 'none',
            },
          }}
        >
            <h2 className={classes.title} >{details.name}</h2>
            <div className={classes.container}>
                <div className={classes.mainContent}>
                  {/* SnapShots */}
                  <Carousel
                  className={classes.Carousel}
                    autoPlay={true}
                    infiniteLoop={true}
                    showIndicators={false}
                    showThumbs={false}
                    swipeable={true} >
                    {details.screenshot.map((pic,i)=>(
                      <div key={pic}>
                        <img  className={classes.image} src={pic} alt="Screenshot"/>  
                      </div>
                    ))}
                  </Carousel>
                  <div className={classes.desc}>
                    {description}
                  </div>
                  {/* <p className={classes.desc}>{details.description}</p> */}
                </div>
                <div className={classes.stackContainer}>
                    <h3>Tech Stack</h3>
                    {details.stack.map((icon,i)=>(
                      <StackIcon key={i} icon={icon} className={classes.icon} />
                    ))}
                    <div className={classes.buttons}>
                      <Button variant="contained" color="primary" target="_blank" href={details.gitLink} className={classes.button}>
                        Git Repo
                        <GitIcon />
                      </Button>
                      {(details.liveDemo!=="")?<Button variant="contained" color="secondary" target="_blank" href={details.liveDemo} className={classes.button}>
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
}

export default withStyles(styles)(ProjectDialog);
