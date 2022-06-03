import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function PredictButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined">
      <font color='white'>View Correspondence</font>
      </Button>
     
    </div>
  );
}