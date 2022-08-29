import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import { styled } from "@mui/material/styles";
import './Projects.scss'

// const useStyles = makeStyles((theme)=>({
//     container:{
//         width:"40%",
//         margin:"10px",
//         display:"flex",
//         flexDirection:"column",
//         justifyContent:"flex-start",
//         alignItems:"center",
//         [theme.breakpoints.down('sm')]: {
//             margin:0,
//           },
//     },
//     icon:{
//         height:"60px",
//         margin:"0",
//         maxWidth:"100px",
//         [theme.breakpoints.down('sm')]: {
//             height:"35px",
//           },
        
//     },
//     name:{
//         display:"block",
//         textAlign:"center"
//     }
//   }))
function StackIcon({icon}){
    //const classes = useStyles();
    return(
        <div className='icon-container'>
            <img src={icon.icon} alt="icon" className='icon' />
            <span className='icon-name'>{icon.name}</span>
        </div>
    )
};

export default StackIcon;
