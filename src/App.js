import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import About from './components/about'; 
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'; 
import { Container, MuiThemeProvider } from '@material-ui/core';
import Theme from './theme'; 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}))
function App() {
  const classes = useStyles(); 
  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={Theme}>
        <CssBaseline/>
        <Navbar/> 
        <Container fixed>
          <About/>
          <hr className='solid'/>
        </Container>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
