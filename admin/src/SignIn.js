import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import $ from "jquery";
import jwt_decode from "jwt-decode";
import serviceWorker from "./serviceWorker.png";
//const bcrypt = require("bcryptjs");
class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      password: ""
    };
  }
  loginFun() {
    //console.log("here in log");
    // event.preventDefault();
    var data = {
      email: $("#email").val(),
      password: $("#password").val()
    };
    console.log("this is data ", data);
    var that = this;
    $.ajax({
      url: "/adminLogin",
      type: "POST",
      data: data,
      datatype: "json",
      success: function(res) {
        //console.log("this is data  success", res);
        localStorage.setItem("usertoken", res);
        const decoded = jwt_decode(res);
        that.setState({
          password: decoded.password
        });
        console.log("pass", decoded.password);
      }
    });
  }
  getUser() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    console.log(decoded.email);
    if (decoded.password === this.state.password) {
      window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl", "_self");
    } else {
      alert("Wrong password or email");
    }
  }
  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" color="blue" textAlign="center">
            <Image src={serviceWorker} s /> Log-in to your account
          </Header>
          <Form size="large" onSubmit={this.loginFun.bind(this)}>
            <Segment stacked>
              <Form.Input
                id="email"
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                fluid
                id="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />

              <Button
                type="submit"
                color="blue"
                fluid
                size="large"
                onClick={this.getUser.bind(this)}
              >
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            contact with other Admins <a href="#">here</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}
export default LoginForm;
