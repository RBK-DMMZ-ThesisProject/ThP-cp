import React, { useState, useEffect } from "react";
import './Profile.css';
import serviceWorker from './serviceWorker.png';
import { makeStyles } from '@material-ui/core/styles';
import WorkImg from './WorkImg.jpg';
import Button from '@material-ui/core/Button';
import Revise from './Revise';
import Modal from '@material-ui/core/Modal';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 360,
    backgroundColor: '#c0e2ed',
    fontSize: '30px',
    color: '#63b8d4',
    fontWeight: 'bold',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    position: 'absolute',
    width: 1800,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function getModalStyle() {
  const top = 20;
  const left = 20;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

//Profile modal (when you click on show button from profiles list)
const Profile: React.FC = (id) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState([]);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    axios
    .get(
      "profil"
      //, {
        // params: {
        //   id: id
        // }
      //}
    )
    .then(( profile : any ) => {
      setProfile(profile);
    });
  } , []);


  return (
    <div id='main'>
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
                  <td><img id ='serviceWorkerImg' src={serviceWorker} alt=""/></td>
                </tr>
              </tbody>
            </table>
            <div className="vl"></div>
            <div id="Sample">
              <h2>Work Samples:</h2>
              <img id ='workImg' src={WorkImg} alt=""/>
              <div id="footerButtons">
                <Button variant="contained" id="acceptBtn">Accept</Button><span></span>
                <Button type="button" variant="contained" onClick={handleOpen} id="modalBtn">
                      Revise
                    </Button>
                    <Modal
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                      open={open}
                      onClose={handleClose}
                      >
                        <div style={modalStyle} className={classes.paper}>
                          <Revise />
                        </div>
                      </Modal>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Profile;