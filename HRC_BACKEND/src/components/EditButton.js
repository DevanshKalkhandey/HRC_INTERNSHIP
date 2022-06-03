import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import CloseIcon from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';

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


export default function EditButton() {
    const [open, setOpen] = React.useState(false);

    const classes=useStyle();
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div className={classes.root}>
          <Button variant="outlined" color="#97A1A9" className={classes.button2} startIcon={<EditIcon />}onClick={handleClickOpen}>
          <font color='white'>Edit</font>
          </Button>
            
            
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
                
                <DialogTitle id="form-dialog-title" style={{backgroundColor:"#2A3E4C"}}><font color='white'>Edit Invoice</font>
                <Button aria-label="close" onClick={handleClose} endIcon={<CloseIcon />} className={classes.button}> </Button>
                </DialogTitle>
               
            
            <DialogContent style={{backgroundColor:"#2A3E4C"}}>
            <Grid container spacing={1}>
            <Grid item xs={5}>
              <InputLabel className={classes.margin} display="inline-block" ><font color= '#97A1A9'>Invoice amount</font></InputLabel>
              </Grid>
              <Grid item xs={7}>
              <TextField  className={classes.margin} type="no"  variant="outlined" display="inline-block"/>
              </Grid>
              <Grid item xs={5}>
             <InputLabel className={classes.margin}  ><font color='#97A1A9'>Notes</font></InputLabel>
             </Grid>
             <Grid item xs={7}>
            <TextField id="notes"   className={classes.margin} multiline rows={4} variant="outlined"/>
            </Grid>
            </Grid>

            </DialogContent>
            <DialogActions style={{backgroundColor:"#2A3E4C"}}>
              <div className="ButtonHeader">
              <Button onClick={handleClose} style={{color:"#14AFF1",marginRight:"333px"}} className={classes.button3}>
                Cancel
              </Button>
              <div className="right">
              <Button variant="outlined" color="#2C404E" className={classes.colour}  color="#FFFFFF" style={{color:"#FFFFFF",
          borderBlockColor:"#14AFF1",
          borderColor:"#14AFF1"}} onClick={handleClose} color="primary">
                Reset
              </Button>
              <Button variant="contained" className={classes.blue}>
               Save
              </Button>
              </div>
              </div>
            </DialogActions>
          </Dialog> 
          
        </div>
      );
    }