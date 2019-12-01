import React from 'react';
import './Profile.css';
import serviceWorker from './serviceWorker.png';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import WorkImg from './WorkImg.jpg';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
  }));


const Profile: React.FC = () => {
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
            <Toolbar />
        </div>
        <div>
          <h1 id='name'>Zinah Al Nabahin</h1>
          <hr></hr>
          <div id="information">
            <table>
              <tbody>
                <tr>
                  <td className="Keys">Title:</td>
                  <td className="values">Professional Hard Working Carpenter</td>

                </tr>
                <tr>
                  <td className="Keys">Category:</td>
                  <td className="values">Carpentering</td>
                </tr>
                <tr>
                  <td className="Keys">Age:</td>
                  <td className="values">32 years</td>
                </tr>
                <tr>
                  <td className="Keys">Mobile No:</td>
                  <td className="values">16549999</td>
                </tr>
                <tr>
                  <td className="Keys">Email: </td>
                  <td className="values">Zinah@hotmail.com</td>
                </tr>
                <tr>
                  <td className="Keys">Description:</td>
                  <td className="values">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</td>
                </tr>
                <tr>
                  <td className="Keys">Image:</td>
                  <td><img id ='serviceWorkerImg' src={serviceWorker}/></td>
                </tr>
              </tbody>
            </table>
            <div className="vl"></div>
            <div id="Sample">
              <h2>Work Samples:</h2>
              <img id ='workImg' src={WorkImg}/>
              <div id="footerButtons">
                <Button variant="contained">Accept</Button>
                <Button variant="contained">Revise</Button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Profile;