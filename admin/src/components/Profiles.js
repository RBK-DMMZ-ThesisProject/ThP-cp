import React, { useState, useEffect } from "react";
import "../css/main.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Profile from "./Profile";
import axios from "axios";
import Dialog from '@material-ui/core/Dialog';



function getModalStyle() {
    const top = 20;
    const left = 20;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
    };
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
    };
  }


  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 360,
      backgroundColor: "#c0e2ed",
      fontSize: "30px",
      color: "#63b8d4",
      fontWeight: "bold",
      "& > *": {
        margin: theme.spacing(1)
      }
    },
    paper: {
      position: "absolute",
      maxWidth: 1800,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  }));



const Profiles = () => {
    const classes = useStyles();
    const [newProfiles, setNewProfiles] = useState([]);
    const [acceptedProfiles, setAcceptedProfiles] = useState([]);
    const [underCheckProfiles, setUnderCheckProfiles] = useState([]);
    const [profile, setProfile] = useState(null);
    const [value, setValue] = useState(0);

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    

      const handleOpen = (id, state, mobile) => {
        setProfile(<Profile pid={id} closemodal={handleClose} state={state} mobile={mobile}></Profile>)
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
        axios.get("newprofils").then(({ data }) => {
          setNewProfiles(data);
        });
        axios.get("acceptedProfils").then(({ data }) => {
          setAcceptedProfiles(data);
        });
        axios.get("profils").then(({ data }) => {
          setUnderCheckProfiles(data);
        });
      };

      useEffect(() => {
        axios.get("newprofils").then(({ data }) => {
          setNewProfiles(data);
        });
        axios.get("acceptedProfils").then(({ data }) => {
          setAcceptedProfiles(data);
        });
        axios.get("profils").then(({ data }) => {
          setUnderCheckProfiles(data);
        });
      }, []);


    return (
            <div>
              <AppBar position="static" id="tabs">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="simple tabs example"
                  className="Tab"
                >
                  <Tab label="New" {...a11yProps(0)} />
                  <Tab label="Accepted" {...a11yProps(1)} />
                  <Tab label="Under Checking" {...a11yProps(2)} />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                <table id="profiles">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Name</th>
                      <th>Show profile</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newProfiles.map((newProfile, index) => {
                      return (<tr key={index}>
                        <td>{index + 1}</td>
                        <td>{newProfile.userName}</td>
                        <td>
                          <Button type="button" onClick={() => handleOpen(newProfile.id, newProfile.ProfileState, newProfile.userMobileNum)} id="modalBtn">
                            Show
            </Button>
                        </td>
                      </tr>)
                    })}
                  </tbody>
                </table>
              </TabPanel>

              <TabPanel value={value} index={1}>
                <table id="profiles">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Name</th>
                      <th>Show profile</th>
                    </tr>
                  </thead>
                  <tbody>
                    {acceptedProfiles.map((acceptedProfile, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{acceptedProfile.userName}</td>
                        <td>
                          <Button
                            type="button"
                            onClick={() =>
                              handleOpen(
                                acceptedProfile.id,
                                acceptedProfile.ProfileState
                              )
                            }
                            id="modalBtn"
                          >
                            Show
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <table id="profiles">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Name</th>
                      <th>Show profile</th>
                    </tr>
                  </thead>
                  <tbody>
                    {underCheckProfiles.map((underCheckProfile, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{underCheckProfile.userName}</td>
                        <td>
                          <Button
                            type="button"
                            onClick={() =>
                              handleOpen(
                                underCheckProfile.id,
                                underCheckProfile.ProfileState
                              )
                            }
                            id="modalBtn"
                          >
                            Show
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TabPanel>
              <div id="dilog">
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="xl"
              >
                <div>
                  {profile}
                </div>
              </Dialog>
              </div>
            </div>
    );
  };

  export default Profiles;