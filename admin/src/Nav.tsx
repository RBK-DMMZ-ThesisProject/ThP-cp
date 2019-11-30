import React from 'react';
import './Nav.css';
import serviceWorker from './serviceWorker.png';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

const Nav: React.FC = () => {
    const classes = useStyles();

  return (
      <div>
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className='Nav'>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <img id ='logo' src={serviceWorker}/>
          <Typography id='title'>
            Control Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
        <h2>DALIA</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
        <h2>HELLOOO</h2>
    </div>
  );
}

export default Nav;
