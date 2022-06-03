import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import RemoveIcon from '@material-ui/icons/Remove';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    button:{
       float:'right' 
    },
    button2:{
        margin:theme.spacing.unit,
        color:"#97A1A9",
        borderBlockColor:"#97A1A9",
        borderColor:"#97A1A9"
    },
    margin: {
      margin: theme.spacing(1),
      //display:'inline-block',
    },
    required:{
      margin: theme.spacing(1),
      display:'inline-block',
      
  },
  blue:{
    margin: theme.spacing(1),
    color:"#FFFFFF",
    backgroundColor:"#14AFF1",
},
colour:{
  borderColor:"#14AFF1"
},
root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

    
}));


export default function DeleteButton() {
    const [open, setOpen] = React.useState(false);

    const classes=useStyle();
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div>
        <Button variant="outlined" color="#97A1A9" className={classes.button2} startIcon={<RemoveIcon />}onClick={handleClickOpen}>
          <font color='white'>Delete</font>
        </Button>
        <Dialog 
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open} 
        >
          <DialogTitle  style={{background: '#2A3F4D'}} id="customized-dialog-title" onClose={handleClose} >

          <font color='white'>Delete record(s)?</font>
          </DialogTitle>
          <DialogContent style={{background: '#2A3F4D'}}>
            <Typography gutterBottom>
             <font color='white'> You will lose your record(s) after this action. We can't recover them once you delete.</font>
            </Typography>
            <Typography gutterBottom>
            <font color='white'><p> Are you sure you want to<font color='#FF5E5E'> permanently delete</font> them? </p></font>
            </Typography>
          </DialogContent>
          <DialogActions style={{background: '#2A3F4D'}}>
          <Button onClick={handleClose} color="primary" variant="outlined">
          <font color='white'> Cancel </font>
            </Button>
            <Button onClick={handleClose} color="primary" variant="contained">
              Delete 
            </Button>
          </DialogActions>
        </Dialog>
        </div>
    )
}
