import { Toolbar, AppBar, Grid, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'; 
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import pillReminderImg from '../pillreminder.png'; 
import fbChessImg from '../fbchess.png'; 
import lineFollowerImg from '../linefollower.png'; 

const LinkedInIcon = 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'; 
const GithubIcon = 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z';
const CodeIcon = 'M15.1,3.8c0.1,0.1,0.1,0.2,0,0.3l-4.7,16.1c0,0.1-0.1,0.2-0.2,0.2c-0.1,0.1-0.2,0.1-0.3,0l-0.8-0.2  c-0.1,0-0.2-0.1-0.2-0.2c-0.1-0.1-0.1-0.2,0-0.3l4.7-16.1c0-0.1,0.1-0.2,0.2-0.2c0.1-0.1,0.2-0.1,0.3,0l0.8,0.2  C14.9,3.7,15,3.7,15.1,3.8z M7.8,6.8c0-0.1,0-0.2-0.1-0.3L7.1,5.9C7,5.8,6.9,5.8,6.8,5.8s-0.2,0-0.3,0.1l-5.8,5.8  c-0.1,0.1-0.1,0.2-0.1,0.3s0,0.2,0.1,0.3l5.8,5.8c0.1,0.1,0.2,0.1,0.3,0.1s0.2,0,0.3-0.1l0.6-0.6c0.1-0.1,0.1-0.2,0.1-0.3  c0-0.1,0-0.2-0.1-0.3L2.8,12l4.9-4.9C7.8,7,7.8,6.9,7.8,6.8z M23.3,11.7l-5.8-5.8c-0.1-0.1-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.3,0.1  l-0.6,0.6c-0.1,0.1-0.1,0.2-0.1,0.3s0,0.2,0.1,0.3l4.9,4.9l-4.9,4.9c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.2,0.1,0.3l0.6,0.6  c0.1,0.1,0.2,0.1,0.3,0.1c0.1,0,0.2,0,0.3-0.1l5.8-5.8c0.1-0.1,0.1-0.2,0.1-0.3C23.4,11.9,23.4,11.8,23.3,11.7z'
const LinkedInPath = 'https://www.linkedin.com/in/-miteshkumar';
const GithubPath = 'https://github.com/miteshkumar77';
const fbChessPath = 'https://github.com/miteshkumar77/fbchess'; 
const PillReminderPath = 'https://github.com/miteshkumar77/pill_dispenser/tree/master/application'; 
const LineFollowerPath = 'https://github.com/miteshkumar77/LineFollower'; 
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    content: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '10px',
        gridAutoRows: 'minmax(100px, auto)'
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

const useCardStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

function PillReminderProject() {
    const classes = useCardStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Card className={classes.root}>
        <CardHeader
        
          action={
            <IconLink path={CodeIcon} href={PillReminderPath}/>
          }
          title="Pill Reminder"
          subheader="April 2020"
        />
        <CardMedia
          className={classes.media}
          image={pillReminderImg}
          title="Pill Reminder Dashboard"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            A web app to help users keep track of their medicine intake. 
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            title="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
              <Typography paragraph>
                Used GraphQL, Node.js, and MongoDB to build a backend that implements CRUD operations on 
                user inputted data. 
              </Typography>
              <Typography paragraph>
                Developed a cron job server that monitors the database and sends push notification reminders
                to the user's mobile device when applicable. 
              </Typography>
              <Typography paragraph>
                Developed a front-end using ReactJS
              </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }

  function FBChessProject() {
    const classes = useCardStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Card className={classes.root}>
        <CardHeader
        
          action={
            <IconLink path={CodeIcon} href={fbChessPath}/>
          }
          title="FB Chess"
          subheader="June 2020"
        />
        <CardMedia
          className={classes.media}
          image={fbChessImg}
          title="FB Chess Login Screen"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            A web chat app that that can be used to play online chess with friends.  
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            title="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
              <Typography paragraph>
                Used Node.js, Socket.io, and MongoDB to build a backend server that recieves
                and relays messages, handles the state of the chess game,
                and persists the chat history to the database. 
              </Typography>
              <Typography paragraph>
                Implemented a caching strategy to lower Database transactions and increase 
                responsiveness of the app. 
              </Typography>
              <Typography paragraph>
                Developed a front-end using ReactJS
              </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }



  function LineFollowerProject() {
    const classes = useCardStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Card className={classes.root}>
        <CardHeader
        
          action={
            <IconLink path={CodeIcon} href={LineFollowerPath}/>
          }
          title="Line Follower"
          subheader="January 2020"
        />
        <CardMedia
          className={classes.media}
          image={lineFollowerImg}
          title="Line Follower Car"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            An arduino controlled car that reliably follows a black tape path.  
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            title="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
              <Typography paragraph>
                Implemented and tuned several Proportional Integral Derivative control algorithms, each 
                made to control the car in specific situations such as sharp turns, and broken lines, etc.  
              </Typography>
              <Typography paragraph>
                Had the fastest and most reliable car in a course wide contest. 
              </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
export default function Projects() {

    
    
    const classes = useStyles(); 

    return (
        <div className={classes.root} >
            <Typography className={classes.title} variant="h3" align='center'>
                Projects
            </Typography>
            <div className={classes.control}>
              

                <div className={classes.content}>    
                    <div>
                        <FBChessProject />
                    </div>
                    <div>
                        <PillReminderProject /> 
                    </div>
                    <div>
                        <LineFollowerProject />
                    </div>
                </div>
            </div>
        </div>
    );
    
}

