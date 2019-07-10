import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    container:{
        width:"40%",
        margin:"10px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center"
    },
    icon:{
        height:"60px",
        margin:"0",
        maxWidth:"100px",
        
    },
    name:{
        display:"block",
        textAlign:"center"
    }
  })
function StackIcon({icon}){
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <img src={icon.icon} alt="icon" className={classes.icon} />
            <span className={classes.name}>{icon.name}</span>
        </div>
    )
};

export default StackIcon;
