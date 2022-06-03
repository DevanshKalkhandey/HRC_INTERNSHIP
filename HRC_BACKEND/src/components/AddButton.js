import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import { Fragment, useState } from "react";
import Grid from '@material-ui/core/Grid';
import './AddButton.css';
import MaterialUIPickers from  './datePicker';


const useStyle = makeStyles((theme) => ({
    button:{
      float:'right'
    },
    button3:{
      marginRight:'700px'
    },
    button2:{
      margin:theme.spacing.unit,
      color:"#97A1A9",
      borderBlockColor:"#97A1A9",
      borderColor:"#97A1A9"
  },
    margin: {
      margin: theme.spacing(1),
      color:"#97A1A9",
    },
    TextField:{
      border: "1px solid #356680",
      borderRadius: "10px",
      opacity: "1",
      backgroundColor:"#283A46",
      borderColor:"#356680",
    },
  
  blue:{
    margin: theme.spacing(1),
    color:"#FFFFFF",
    backgroundColor:"#14AFF1",
  },
  colour:{
   borderColor:"#14AFF1"
  },
    
    
}));
export default function AddButton() {
    const [open, setOpen] = React.useState(false);
    const [selectedDate, handleDateChange] = useState(new Date());
   
    const classes=useStyle();
    const handleClickOpen = () => {
      setOpen(true);
    };
    
  
    const handleClose = () => {
      setOpen(false);
    };

    const DialogContent = withStyles(theme => ({
      root: {
        backgroundColor:"#2A3E4C",
        borderTop: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit * 2,
      },
    }))(MuiDialogContent);
    
    const DialogActions = withStyles(theme => ({
      root: {
        backgroundColor:"#2A3E4C",
        borderTop: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit,
      },
    }))(MuiDialogActions);
    return (
        <div >
          <Button variant="outlined" color="#97A1A9" className={classes.button2} startIcon={<AddIcon />}onClick={handleClickOpen}>
          <font color='white'>Add</font>
          </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth
                maxWidth="md">
                <DialogTitle id="form-dialog-title" style={{backgroundColor:"#2A3E4C"}}><font color='white'>Add Invoice</font>
                <Button aria-label="close" onClick={handleClose} endIcon={<CloseIcon />} className={classes.button}> </Button>
            </DialogTitle>
            
            <DialogContent>
      <form>

      <Grid container spacing={2}>
      <Grid item xs>
      <Grid container spacing={1}>
         <Grid item xs={6}>
          <InputLabel className={classes.margin} required ><font color='white'>Customer name</font></InputLabel> 
        </Grid>
        <Grid item xs={6}>
          <TextField  className={classes.margin}  type="name"  variant="outlined" />
        </Grid>

        <Grid item xs={6}>
          <InputLabel className={classes.margin}  required ><font color='white'>Customer No</font></InputLabel>
        </Grid>
        <Grid item xs={6}>
         <TextField  className={classes.margin}  type="name"  variant="outlined" />
        </Grid>
      
      <Grid item xs={6}>
          <InputLabel className={classes.margin} required ><font color='white'>Invoice No </font></InputLabel> 
        </Grid>
        <Grid item xs={6}>
         <TextField  className={classes.margin}  type="name"  variant="outlined" />
        </Grid>

        <Grid item xs={6}>
          <InputLabel className={classes.margin}  required ><font color='white'>Invoice Amount</font></InputLabel>
        </Grid>
        <Grid item xs={6}>
          <TextField  className={classes.margin}  type="name"  variant="outlined" />
        </Grid>
      </Grid>
    
      </Grid>
      <Grid item xs>

    <Grid container spacing={1}>
      <Grid item xs={6}>
         <InputLabel className={classes.margin}  required > <font color='white'> Due Date </font> </InputLabel>
        </Grid>
        <Grid item xs={6}>
        <MaterialUIPickers/>
        </Grid>

        <Grid item xs={6}>
          <InputLabel className={classes.margin}  required ><font color='white'>Notes</font></InputLabel>
        </Grid>
        <Grid item xs={6}>
          <TextField
          id="outlined-multiline-static"
          multiline
          rows={8}
          variant="outlined"
        />
        </Grid>
      </Grid> 
      </Grid>
      </Grid>
       </form>

            </DialogContent>
            <DialogActions>
              <div className="ButtonHeader">
              <Button onClick={handleClose} style={{color:"#14AFF1"}} className={classes.button3}>
                Cancel
              </Button>
              <div className="right">
              <Button variant="outlined" color="#2C404E" className={classes.colour}  color="#FFFFFF" style={{color:"#FFFFFF",
          borderBlockColor:"#14AFF1",
          borderColor:"#14AFF1"}} onClick={handleClose} color="primary">
                Clear
              </Button>
              <Button variant="contained" className={classes.blue}>
               Add
              </Button>
              </div>
              </div>
            </DialogActions>
          </Dialog>
        </div>
      );
    }