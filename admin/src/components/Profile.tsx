import React, { useState, useEffect } from "react";
import './../css/profile.css';
import { makeStyles } from '@material-ui/core/styles';
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

const Profile: React.FC = (props: any) => {
  console.log(props.state, "STTAAARTTe")
  console.log('properties of a profile', props.pid)
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [revise, setRevise] = useState();
  const [profile, setProfile] = useState({ data: [{ userName: '', ServiceCategory: '', dateOfBirth: '', userMobileNum: '', email: '', ServiceDescription: '', userImg: '', userWorkImg: [''] }] });
  const handleOpen = () => {
    var id = props.pid
    setRevise(<Revise pid={id} handleClose={handleClose} />);
    setOpen(true);
  };

  const handleAccept = () => {
    console.log("mmmmmobile", props.mobile)
    axios.post('messages/smsMessages', {
      to: props.mobile,
      text: "Your profile has been accepted"
    })
      .then((response) => {
        console.log("here we kkkkkk", response);
      }, (error) => {
        console.log(error);
      });
    axios.post('updateState', {
      id: props.pid
    })
      .then((response) => {
        props.closemodal();
        // close modal
      }, (error) => {
        console.log(error);
      });

  }
  const handleClose = () => {
    props.closemodal();
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get(
        "profil",
        {
          params: {
            id: props.pid
          }
        }
      )
      .then((profile: { data: [{ userName: string, ServiceCategory: string, dateOfBirth: any, userMobileNum: string, email: string, ServiceDescription: string, userImg: string, userWorkImg: Array<string> }] }) => {
        console.log(profile)
        setProfile(profile);
      });
  }, []);

  const yearBirth = parseInt(profile.data[0].dateOfBirth.substring(0, 4));
  const currentYear = (new Date()).getFullYear();
  var age = currentYear - yearBirth;

  return (
    <div id='main'>
      <div>
        <h1 id='name'>{profile.data[0].userName}</h1>
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
                <td className="values">{profile.data[0].ServiceCategory}</td>
              </tr>
              <tr>
                <td className="Keys">Age:</td>
                <td className="values">{age}</td>
              </tr>
              <tr>
                <td className="Keys">Mobile No:</td>
                <td className="values">{profile.data[0].userMobileNum}</td>
              </tr>
              <tr>
                <td className="Keys">Email: </td>
                <td className="values">{profile.data[0].email}</td>
              </tr>
              <tr>
                <td className="Keys">Description:</td>
                <td className="values">{profile.data[0].ServiceDescription}</td>
              </tr>
              <tr>
                <td className="Keys">Image:</td>
                <td><img id='serviceWorkerImg' src={profile.data[0].userImg} alt="" /></td>
              </tr>
            </tbody>
          </table>
          <div className="vl"></div>
          <div id="Sample">
            <h2>Work Samples:</h2>
            {profile.data[0].userWorkImg.map(image => { return (<img id='workImg' src={image} alt="" />) })}
            {props.state !== 2 ? (<div id="footerButtons"><Button variant="contained" id="acceptBtn" onClick={() => handleAccept()}>Accept</Button> <span></span>
              <Button type="button" variant="contained" onClick={() => handleOpen()} id="modalBtn">
                Revise
              </Button></div>) : ''}

          </div>
        </div>
      </div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          {revise}
        </div>
      </Modal>
    </div>

  );
}

export default Profile;