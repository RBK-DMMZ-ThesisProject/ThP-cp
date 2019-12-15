import React, { useState, useEffect } from "react";
import "../css/main.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";

function getModalStyle() {
    const top = 20;
    const left = 20;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
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



const Users = () => {
    const [admins, setAdmins] = useState([]);
    const [value, setValue] = useState(0);
    const [adminName, setAdminName] = React.useState("");
    const [mobileNO, setMobileNO] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [openAddUser, setopenAddUser] = useState(false);
    const handleAddUserClose = () => {
        setopenAddUser(false);
      };
      const openAddUserModal = () => {
        setopenAddUser(true);
      };
    const changeUserSate = (event, id) => {
        var st = event.target.checked ? 1 : 0;
        var updatedAdmins = [...admins];
    
        updatedAdmins[parseInt(event.target.id)].state = st;
        setAdmins(updatedAdmins);
        axios
          .post("admins/setAdminState", {
            state: st,
            id: id
          })
          .then(response => {
            console.log("state changed");
          })
          .catch(err => console.log(err));
      };
    const addUser = () => {
        // update state database
        axios.post('admins/addAdmin', {
          userName: adminName,
          mobileNO: mobileNO,
          email: email
        })
          .then((response) => {
            //console.log(response);
            axios
              .get(
                "admins/getAdmins"
              )
              .then(({ data }) => {
                setAdmins(data);
              });
            handleAddUserClose();
          },
            error => {
              console.log(error);
            }
          );
      };
    const onAdminNameChange = e => {
        setAdminName(e.target.value);
      };
      const onMobileNOChange = e => {
        setMobileNO(e.target.value);
      };
      const onEmailChange = e => {
        setEmail(e.target.value);
      };
    useEffect(() => {
        axios.get("admins/getAdmins").then(({ data }) => {
          setAdmins(data);
        });
      }, []);
    return (
        <div>
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
            {admins.map((admin, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{admin.userName}</td>
                <td>
                  <Switch
                    id={index + ""}
                    checked={!!admin.state}
                    onChange={event => changeUserSate(event, admin._id)}
                    value={admin.state}
                    inputProps={{ "aria-label": "Change State" }}
                    color="primary"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button id="addAdmin" onClick={openAddUserModal}>
          ADD
        </Button>
      </div>
      <div id="dilog">
      <Dialog
      open={openAddUser}
      onClose={handleAddUserClose}
      aria-labelledby="Add Admin"
    >
      <DialogTitle id="form-dialog-title">Add Admin</DialogTitle>
      <DialogContent style={{ width: 500 }}>
        <form autoComplete="off">
          <TextField
            margin="dense"
            fullWidth
            id="adminName"
            label="User Name:"
            onChange={onAdminNameChange}
            value={adminName}
          />
          <br />
          <TextField
            margin="dense"
            fullWidth
            id="mobileNO"
            label="Mobile No.:"
            onChange={onMobileNOChange}
            value={mobileNO}
          />
          <br />
          <TextField
            id="email"
            label="Email"
            margin="dense"
            type="email"
            fullWidth
            onChange={onEmailChange}
            value={email}
            helperText="please enter a correct email"
          />
          <br />
          <br />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAddUserClose} color="primary">
          Cancel
        </Button>
        <Button onClick={addUser} color="primary">
          Add User
        </Button>
      </DialogActions>
    </Dialog>
    </div>
    </div>
    )
  };

  export default Users;