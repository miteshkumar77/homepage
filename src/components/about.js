import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
import { Toolbar, AppBar, Grid, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'; 
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import Link from '@material-ui/core/Link';

const LinkedInIcon = 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'; 
const GithubIcon = 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z';
const CodeIcon = 'M129.204085,3126.419 C129.587463,3126.032 129.587463,3125.405 129.204085,3125.018 L129.191207,3125.005 C128.807829,3124.618 128.186697,3124.618 127.803319,3125.005 L124.287534,3128.553 C123.904155,3128.94 123.904155,3129.568 124.287534,3129.955 L127.803319,3133.503 C128.186697,3133.89 128.807829,3133.89 129.191207,3133.503 L129.204085,3133.49 C129.587463,3133.103 129.587463,3132.476 129.204085,3132.089 L127.090057,3129.955 C126.706679,3129.568 126.706679,3128.94 127.090057,3128.553 L129.204085,3126.419 Z M142.712466,3128.553 L139.196681,3125.005 C138.814294,3124.618 138.192171,3124.618 137.808793,3125.005 L137.795915,3125.018 C137.412537,3125.405 137.412537,3126.032 137.795915,3126.419 L139.910934,3128.553 C140.294312,3128.94 140.294312,3129.568 139.910934,3129.955 L137.795915,3132.089 C137.412537,3132.476 137.412537,3133.103 137.795915,3133.49 L137.808793,3133.503 C138.192171,3133.89 138.814294,3133.89 139.196681,3133.503 L142.712466,3129.955 C143.095845,3129.568 143.095845,3128.94 142.712466,3128.553 L142.712466,3128.553 Z M136.809359,3124.40817 L131.74698,3135.23866 C131.582981,3135.57915 131.295245,3136 130.924037,3136 L130.904396,3136 C130.182602,3136 129.712209,3135.0197 130.031369,3134.3588 L135.064287,3123.63077 C135.228287,3123.29128 135.836165,3123.02511 135.836165,3123.02511 L135.836165,3123 C136.818198,3123 137.127538,3123.74728 136.809359,3124.40817 L136.809359,3124.40817 Z'
const LinkedInPath = 'https://www.linkedin.com/in/-miteshkumar';
const GithubPath = 'https://github.com/miteshkumar77';
const PillReminderPath = 'https://github.com/miteshkumar77/pill_dispenser/tree/master/application'; 

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



function IconLink(props) {
  return (
    <Button
      href={props.href}
    >
      <SvgIcon fontSize='large'>
        <path d={props.path}/>
      </SvgIcon>
    </Button>
  )
}

export default function About() {

    
    
    const classes = useStyles(); 

    return (
        <div className={classes.root} >
            <div className={classes.control}>
              <Typography className={classes.title} variant="h1" align='center'>
                  Mitesh Kumar
              </Typography>



              <IconLink path={GithubIcon} href={GithubPath}/>
              <IconLink path={LinkedInIcon} href={LinkedInPath}/>

              
          {/* </div>

          <div className={classes.control}> */}
              <Typography variant="h5" component="h2" align='center'>
              Hi, I am a Computer Science student at Rensselaer Polytechnic Institute. 
              </Typography>
            </div>
        </div>
    );
    
}

