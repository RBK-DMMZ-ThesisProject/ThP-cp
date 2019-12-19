import React, { useState, useEffect } from "react";
import "../css/main.css";
// import serviceWorker from "../assets/ma.png";
import serviceWorker from "./../assets/Handy-white.png";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Profiles from "./Profiles.js";
import Users from "./Users.js";



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 360,
    backgroundColor: "lightgrey",
    fontSize: "30px",
    color: "black",
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

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

//Main page for control panel (profiles section in sidebar list)
const Main = () => {
  const classes = useStyles();
  const [content, setContent] = useState(<Profiles/>);

  //@ logout the user by deleting the tocken
  const logout = () => {
    localStorage.removeItem("handyUserToken");
  };

  const cp = () => {
    return (
      <div id="main">
        <div className={classes.root}>
          <AppBar position="static" >
            <Toolbar className="Nav">
              <img id="logo" src={serviceWorker} alt="" />
              <Typography id="title">Control Panel</Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div id="main">
          <div className={classes.root} id="list">
            <List
              component="nav"
              aria-label="main mailbox folders"
              className="listText"
            >
              <ListItem button className="listItem">
                <ListItemLink href="#" onClick={()=>setContent(<Profiles/>)}>
                  <h5>Profiles</h5>
                </ListItemLink>
              </ListItem>
              <ListItem button className="listItem">
                <ListItemLink href="#" onClick={()=>setContent(<Users/>)}>
                  <h5>Users</h5>
                </ListItemLink>
              </ListItem>
              <ListItem button className="listItem">
                <ListItemLink href="admin" onClick={logout}>
                  <h5>Logout</h5>
                </ListItemLink>
              </ListItem>
            </List>
          </div>
          <div id="content">
            {content}
        </div>
      </div>
      </div>
    );
  };
    return cp();
};

export default Main;
