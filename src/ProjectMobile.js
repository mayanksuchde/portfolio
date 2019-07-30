import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import {WebRounded} from '@material-ui/icons/';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import StackList from './StackList'
import Button from '@material-ui/core/Button';
import {ReactComponent as GitIcon} from './assets/othertools/github.svg';
import './Styles/Project.scss';

const ExpansionPanel = withStyles({
    root: {
      width:"90%",
      
      margin:"auto",
      borderRadius:'5px',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiExpansionPanel);
  
  const ExpansionPanelSummary = withStyles({
    root: {
    backgroundImage:"linear-gradient(to right,#B256D5, #4E4EA2)" ,
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      height:56,
      minHeight: 26,
      '&$expanded': {
        minHeight: 26,
      
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiExpansionPanelSummary);
  
  const ExpansionPanelDetails = withStyles(theme => ({
    root: {
      backgroundImage:"linear-gradient(to right,#757ab8, #919db6)" ,
      padding: theme.spacing(2),
      maxHeight:"60vh",
      overflow:"scroll",
      display:"flex",
      flexDirection:"column"
    },
  }))(MuiExpansionPanelDetails);
  
  const useStyles = makeStyles(theme => ({
    buttons:{
        display:"flex",
        flexDirection:"row",
        height:"48px",
        alignItems:"center",
        fontSize:"10px",
        margin:"8px 4px",
        justifyContent:"space-around",
        "& svg":{
            height:"36px",
            width:"36px"
        }
    }
  }));
export default function ProjectMobile({list}) {
    const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
      <div className="ProjectMobile">
        {list.map((proj,index)=>
            <ExpansionPanel key={index} square expanded={expanded === `panel${index+1}`} onChange={handleChange(`panel${index+1}`)}>
                 <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                    <h3>{proj.name}</h3>
                    
                 </ExpansionPanelSummary>
                 <ExpansionPanelDetails>
                    
                   <p>{proj.description}</p>
                    {/* 1 button for github and one for live code.(if live code is not empty only then ...) */}
                    <StackList stack={proj.stack} />
                    <div className={classes.buttons}>
                      <Button variant="contained" color="primary" >
                        Git Repo
                        <GitIcon />
                      </Button>
                      <Button variant="contained" color="secondary" >
                        Live demo
                        <WebRounded />
                      </Button>
                    </div>
                    
                 </ExpansionPanelDetails>
            </ExpansionPanel>     
            )}  
      </div>
   
  );
}