import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {FullscreenRounded} from '@material-ui/icons/';
const styles = theme => ({
  root: {
    margin: 0

  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  Dialog:{
    width:"60vh",
    height:"80vh",
    backgroundColor:"inherit"
  }
});

// const DialogTitle = withStyles(styles)(props => {
//   const { children, classes, onClose } = props;
//   return (
//     <MuiDialogTitle disableTypography className={classes.root}>
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });


// const DialogContent = withStyles(theme => ({
//   root: {
//     padding: theme.spacing(2),
//   },
// }))(MuiDialogContent);

// const DialogActions = withStyles(theme => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);

class SingleProject extends React.Component {
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
        <IconButton variant="outlined" color="primary" onClick={this.handleClickOpen}>
            <FullscreenRounded />
        </IconButton>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          fullWidth={true}
          maxWidth="80"
          open={this.state.open}
          PaperProps={{
            style: {
              backgroundColor: '#aaabb885',
              boxShadow: 'none',
            },
          }}
        >
            <div className={classes.Dialog}>
                <h2>{details.name}</h2>
                <p>{details.description}</p>
                Stack
                githublink
                liveDemoLink if possible
                SnapShots

            </div>
            
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(SingleProject);
