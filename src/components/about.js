import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
import { Toolbar, AppBar, Grid, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'; 
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      paddingTop: theme.spacing(10),
    },
    title: {
        flexGrow: 1,
        alignSelf: 'center',
        justifyContent: 'center'
    }
  }));

export default function About() {

    
    
    const classes = useStyles(); 

    return (
        <div className={classes.root} >
            <div className={classes.control}>
                <Typography className={classes.title} variant="h1" align='center'>
                    Mitesh Kumar
                </Typography>
            </div>

            <div className={classes.control}>
                <Typography variant="h5" component="h2">
                Hi, I am a Computer Science Student at Rensselaer Polytechnic Institute. 
                </Typography>
            </div>
        </div>
    );
    
}

