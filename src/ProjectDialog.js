import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Button from '@material-ui/core/Button';
import StackIcon from './StackIcon';
import {FullscreenRounded} from '@material-ui/icons/';
import { IconButton } from '@material-ui/core';
import GitIcon from './GitIcon';
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
    color:"#241864",
    marginBottom:"0",
  },
  container:{
    width:"100%",
    height:"80vh",
    display:"flex",
    color:"#241864",
  },
  mainContent:{
    width:"80%",
    padding:"1rem",
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"flex-start"
  },
  Carousel:{
    width:"65%",
  },
  sideContent:{
    display:"flex",
    flexDirection:"column",
    width:"20%"
  },
  stackContainer:{
    width:"30%",
    margin:"auto",
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
    return (
      <div>
        <IconButton variant="outlined" color="#241864" onClick={this.handleClickOpen}>
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
                    {details.screenshot.map((pic)=>(
                      <div>
                        <img className={classes.image} src={pic} alt="Screenshot"/>
                        <p>Whatever</p>
                      </div>
                    ))}
                  </Carousel>
                  <div className={classes.stackContainer}>
                    <h3>Tech Stack</h3>
                    {details.stack.map((icon)=>(
                      <StackIcon icon={icon} className={classes.icon} />
                    ))}
                    <Button variant="contained" color="primary" className={classes.button}>
                      Github Repo
                      <GitIcon />
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button}>
                      Live demo
                      <GitIcon />
                    </Button>
                  </div>
                  <p>{details.description}</p>
                </div>
                <div className={classes.sideContent}>
                  
                  {/* githublink */}
                  <IconButton size="small"  target="_blank" href={details.gitLink} >
                      <GitIcon />
                  </IconButton>
                  {/* liveDemoLink if possible */}
                </div>
                

            </div>
            
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(ProjectDialog);
