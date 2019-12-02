import React from 'react';
import './Nav.css';
import serviceWorker from './serviceWorker.png';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 360,
      backgroundColor: '#91cde0',
      fontSize: '30px',
      color: 'white',
      fontWeight: 'bold',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


function ListItemLink(props : any) {
  return <ListItem button component="a" {...props} />;
}


const Nav: React.FC = () => {
    const classes = useStyles();

  return (
    <div id='main'>
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar className='Nav'>
            <img id ='logo' src={serviceWorker}/>
            <Typography id='title'>
              Control Panel
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar/>
        <div className={classes.root}>
          <List component="nav" aria-label="main mailbox folders" className="listText">
            <ListItem button>
              <ListItemText primary="Profiles"/>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Users"/>
            </ListItem>
          </List>
      </div>
      <div id='content'>
        <div id='buttons'>
          <Button variant="contained" className='tabs'>New</Button>
          <Button variant="contained" className='tabs'>Accepted</Button>
          <Button variant="contained" className='tabs'>Under Checking</Button>
        </div>
        <div id='profiles'>
          <table >
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Show profile</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Maria Anders</td>
                <td><Button variant="contained" className='tabs'>Show</Button></td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Christina Berglund</td>
                <td><Button variant="contained" className='tabs'>Show</Button></td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Francisco Chang</td>
                <td><Button variant="contained" className='tabs'>Show</Button></td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Roland Mendel</td>
                <td><Button variant="contained" className='tabs'>Show</Button></td>
                </tr>
              <tr>
                <td>5.</td>
                <td>Helen Bennett</td>
                <td><Button variant="contained" className='tabs'>Show</Button></td> 
                </tr>
              <tr>
                <td>6.</td>
                <td>Philip Cramer</td>
                <td><Button variant="contained" className='tabs'>Show</Button></td>
                </tr>
              <tr>
                <td>7.</td>
                <td>Yoshi Tannamuri</td>
                <td><Button variant="contained" className='tabs'>Show</Button></td>
                </tr>
              <tr>
                <td>8.</td>
                <td>Giovanni Rovelli</td>
                <td><Button variant="contained" className='tabs'>Show</Button></td>
                </tr>
              <tr>
                <td>9.</td>
                <td>Simon Crowther</td>
                <td><Button variant="contained" className='tabs'>Show</Button></td> 
                </tr>
              <tr>
                <td>10.</td>
                <td>Marie Bertrand</td>
                <td><Button variant="contained" className='tabs'>Show</Button></td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
        </div>
        
    </div>
  );
}

export default Nav;


