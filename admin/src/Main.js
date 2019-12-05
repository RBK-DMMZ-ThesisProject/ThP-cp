import React from "react";
import "./Nav.css";
import $ from "jquery";
import serviceWorker from "./serviceWorker.png";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import Profile from "./Profile";


//Fetching new profiles added
$.ajax({
  type: "GET",
  url: "/newprofils",
  datatype: JSON,
  success: function(data) {
    console.log(data, "NewProfiles");
  },
  error: function(request, status, error) {
    console.log(error);
  }
});


//Fetching profiles been under checking 
$.ajax({
  type: "GET",
  url: "/profils",
  datatype: JSON,
  success: function(data) {
    console.log(data, "UnderChecked Profiles");
  },
  error: function(request, status, error) {
    console.log(error);
  }
});

//Fetching accepted profiles
$.ajax({
  type: "GET",
  url: "/acceptedProfils",
  datatype: JSON,
  success: function(data) {
    console.log(data, "Accepted Profiles");
  },
  error: function(request, status, error) {
    console.log(error);
  }
});

function getModalStyle() {
  const top = 20;
  const left = 20;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}


//Tabs in the control panel 
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

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

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
    width: 1800,
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const profiles = () => {
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
        <tr>
          <td>1.</td>
          <td>Maria Anders</td>
          <td>
            <Button type="button" onClick={handleOpen} id="modalBtn">
              Show
            </Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={handleClose}
            >
              <div style={modalStyle} className={classes.paper}>
                <Profile />
              </div>
            </Modal>
          </td>
        </tr>
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
        <tr>
          <td>1.</td>
          <td>Simon Crowther</td>
          <td>
            <Button type="button" onClick={handleOpen} id="modalBtn">
              Show
            </Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={handleClose}
            >
              <div style={modalStyle} className={classes.paper}>
                <Profile />
              </div>
            </Modal>
          </td>
        </tr>
        <tr>
          <td>2.</td>
          <td>Giovanni Rovelli</td>
          <td>
            <Button type="button" onClick={handleOpen} id="modalBtn">
              Show
            </Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={handleClose}
            >
              <div style={modalStyle} className={classes.paper}>
                <Profile />
              </div>
            </Modal>
          </td>
        </tr>
        <tr>
          <td>3.</td>
          <td>Francisco Chang</td>
          <td>
            <Button type="button" onClick={handleOpen} id="modalBtn">
              Show
            </Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={handleClose}
            >
              <div style={modalStyle} className={classes.paper}>
                <Profile />
              </div>
            </Modal>
          </td>
        </tr>
        <tr>
          <td>4.</td>
          <td>Roland Mendel</td>
          <td>
            <Button type="button" onClick={handleOpen} id="modalBtn">
              Show
            </Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={handleClose}
            >
              <div style={modalStyle} className={classes.paper}>
                <Profile />
              </div>
            </Modal>
          </td>
        </tr>
        <tr>
          <td>5.</td>
          <td>Helen Bennett</td>
          <td>
            <Button type="button" onClick={handleOpen} id="modalBtn">
              Show
            </Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={handleClose}
            >
              <div style={modalStyle} className={classes.paper}>
                <Profile />
              </div>
            </Modal>
          </td>
        </tr>
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
        <tr>
          <td>1.</td>
          <td>Roland Mendel</td>
          <td>
            <Button type="button" onClick={handleOpen} id="modalBtn">
              Show
            </Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={handleClose}
            >
              <div style={modalStyle} className={classes.paper}>
                <Profile />
              </div>
            </Modal>
          </td>
        </tr>
        <tr>
          <td>2.</td>
          <td>Francisco Chang</td>
          <td>
            <Button type="button" onClick={handleOpen} id="modalBtn">
              Show
            </Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={handleClose}
            >
              <div style={modalStyle} className={classes.paper}>
                <Profile />
              </div>
            </Modal>
          </td>
        </tr>
        <tr>
          <td>3.</td>
          <td>Francisco Chang</td>
          <td>
            <Button type="button" onClick={handleOpen} id="modalBtn">
              Show
            </Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={handleClose}
            >
              <div style={modalStyle} className={classes.paper}>
                <Profile />
              </div>
            </Modal>
          </td>
        </tr>
      </tbody>
    </table>
  </TabPanel>
  </div>
  )
  }
  
  const url = window.location.href.substring(7);
  var index = url.indexOf('/');
  var listPath = url.substring(index + 1);

  const users = () => {
    return (
      <div>
        <table id="profiles">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Deactivate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>Roland Mendel</td>
            <td>
              <Button type="button" onClick={handleOpen} id="modalBtn">
                switch
              </Button>
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Francisco Chang</td>
            <td>
              <Button type="button" onClick={handleOpen} id="modalBtn">
                switch
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
      <Button id="addAdmin">ADD</Button>
    </div>
    )
  }
  if(listPath === 'profiles') {
    return (
      <div id="main">
        <div className={classes.root}>
          <AppBar position="static">
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
              <ListItemLink href="profiles">
                <h5>Profiles</h5>
                </ListItemLink>
              </ListItem>
              <ListItem button className="listItem">
              <ListItemLink href="users">
                <h5>Users</h5>
                </ListItemLink>
              </ListItem>
            </List>
          </div>
          <div id="content">
            {profiles()}
          </div>
        </div>
      </div>
    );
  } else if (listPath === 'users') {
    return (
      <div id="main">
        <div className={classes.root}>
          <AppBar position="static">
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
              <ListItemLink href="profiles">
                <h5>Profiles</h5>
                </ListItemLink>
              </ListItem>
              <ListItem button className="listItem">
              <ListItemLink href="users">
                <h5>Users</h5>
                </ListItemLink>
              </ListItem>
            </List>
          </div>
          <div id="content">
            {users()}
          </div>
        </div>
      </div>
    );

  }

};

export default Main;
