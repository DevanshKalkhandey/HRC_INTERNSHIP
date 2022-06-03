import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    outlineStyle: 'solid', 
    outlineColor: '#356680',
    outlineWidth: 'thin',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '250px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    height: "70%"
  },
  searchIcon: {
    padding: theme.spacing(0.75, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'inline',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    //width: '12ch',
    [theme.breakpoints.up('md')]: {
      width: '22ch',
      '&:focus':{
        width: '26ch'
      },
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  
  return (
          <div className={classes.search} style={{color:'#FFFFFF', backgroundColor:"#2A3E4C", marginTop:"6px"}}>
              <div style={{color:'#FFFFFF'}}  className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase style={{color:'#FFFFFF'}} 
              placeholder="Search by Invoice Number"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            
            
          </div>
  );
}
