import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import serviceWorker from "./serviceWorker.png";
import $ from "jquery";
import jwt_decode from "jwt-decode";
class Copyright extends React.Component {
  render() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
}
function test() {
  console.log("hi here ");
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#63B8D4"
  }
}));

export default function SignIn() {
  const classes = useStyles();
  var password = "";
  
  // function getUser() {
  //   const token = localStorage.usertoken;
  //   const decoded = jwt_decode(token);
  //   console.log(decoded.password);
  //   if (decoded.password === password) {
  //     window.open("http://localhost:3003/", "_self");
  //   } else {
  //     alert("Wrong password or email");
  //   }
  // }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={serviceWorker} height="200" />
        <Typography component="h1" variant="h5">
          Handy
        </Typography>
        <form className={classes.form} noValidate onSubmit={loginFun()}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            //onClick={getUser()}
            //onClick={test()}
          >
            Log in
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>

  );
  // function loginFun() {
  //   //event.preventDefault();
  //   var data = {
  //     email: $("#email").val(),
  //     password: $("#password").val()
  //   };
  //   var that = this;
  //   $.ajax({
  //     url: "/login",
  //     type: "POST",
  //     data: data,
  //     datatype: "json",
  //     success: function(res) {
  //       localStorage.setItem("usertoken", res);
  //       const decoded = jwt_decode(res);

  //       password = decoded.password;
  //     }
  //   });
  // }
}
