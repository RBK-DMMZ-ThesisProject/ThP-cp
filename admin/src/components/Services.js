import PropTypes from "prop-types";
import "../css/App.css";
import React, { Component } from "react";
import logo from "../assets/logo.jpg";
// import "semantic-ui-css/semantic.min.css";

import { Button, Container, Header, Menu, Segment } from "semantic-ui-react";
// import React, { Component } from "react";
import {
  Card,
  Divider,
  Grid,
  Image,
  List,
  Icon,
  Label
} from "semantic-ui-react";
import ResponsiveContainer from "./Home";
import manImg from "../assets/ma.png";
import provider from "../assets/provider.jpeg";
import customer from "../assets/customer.jpg";

// const HomepageHeading = () => (
//   <Container text style={{ width: "20em" }}>
//     <Header as="h1" content="Handy" />
//     <Header
//       as="h2"
//       content="A handfull set of service providers just btween your hands."
//     />
//     <Button primary size="huge">
//       <Icon name="google play" class="googleIcon" />
//       Get it On Google Play
//       <Icon name="right arrow" />
//     </Button>
//
// );

const HomepageLayout = () => (
  <div>
    <Segment inverted vertical textAlign="center">
      <Container as="nav">
        <Header inverted as="h1">
          <Image avatar src={logo} size="massive" />
          Handy
        </Header>
        <Menu borderless compact inverted>
          <Menu.Item active>Home</Menu.Item>
          <Menu.Item>Feature</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
        </Menu>
      </Container>
      <Container className="content">
        <Header inverted as="h1">
          You Will Find What You Need Here
        </Header>
        <p>A handfull set of service providers just btween your hands.</p>
        <Button
          size="huge"
          primary
          style={{ color: "#f2f2f2", backgroundColor: "#078ca9" }}
        >
          <Icon name="google play" class="googleIcon" />
          Get it On Google Play <Icon name="right arrow" />
        </Button>
      </Container>
      <Segment inverted vertical as="footer">
        Cover template for <a href="http://semantic-ui.com">Semantic-UI</a>, by{" "}
        <a href="https://github.com/semantic-ui-forest">@Semantic-UI-Forest</a>.
      </Segment>
    </Segment>

    <Segment
      style={{ padding: "8em 0em" }}
      vertical
      className="providsSeg"
      id="about"
    >
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              <Icon name="suitcase" />
              We Help Companies and Companions
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Its a web and mobile platform for connecting service providers
              like (plumbers, carpenters, babysitters, electricians,
              painters..etc) with customers
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              <Icon name="sitemap" />
              What makes our platform unique
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              service providers can define all their details related to their
              crafts and promote their skills online to be seen by local
              customers and even for remote customers depending on their needs.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image size="large" src={manImg} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment verticalAlign="middle">
      <Container verticalAlign="middle">
        <Header as="h2">Join Us as a service provider or customer</Header>
        <Segment>
          <Grid columns={2}>
            <Divider vertical>Or</Divider>
            <Grid.Row width={10}>
              <Grid.Column>
                <Card>
                  <Image src={provider} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                      <span className="date">Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                      service provider profile
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column width={8} verticalAlign="middle">
                <Card
                  image={customer}
                  header="Elliot Baker"
                  meta="Joined in 2019"
                  description="you can creat your profile as customer to brows employees."
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#">Our Services</a>
        </Divider>
        <List animated verticalAlign="middle">
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={6}>
                <List.Item>
                  <Icon name="bolt" />
                  Electrical maintainace
                </List.Item>
                <List.Item>
                  <Icon name="wrench" />
                  Plumbing
                </List.Item>
                <List.Item>
                  <Icon name="gavel" />
                  Carpentering
                </List.Item>
              </Grid.Column>
              <Grid.Column width={5}>
                <List.Item>
                  <Icon name="truck" />
                  Moving Services
                </List.Item>
                <List.Item>
                  <Icon name="taxi" />
                  Driving Services
                </List.Item>
                <List.Item>
                  <Icon name="paint brush" />
                  Painting Services
                </List.Item>
              </Grid.Column>
              <Grid.Column width={5}>
                <List.Item>
                  <Icon name="tree" />
                  Gardening Services
                </List.Item>
                <List.Item>
                  <Icon name="stethoscope" />
                  Nursing Services
                </List.Item>
                <List.Item>
                  <List.Content>
                    <Icon name="smile outline" />
                    babysitting Services
                  </List.Content>
                </List.Item>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={5}>
                <List.Item>
                  <Icon name="camera retro" />
                  Photographers
                </List.Item>
                <List.Item>
                  <Icon name="utensils" />
                  Cooking Services
                </List.Item>
                <List.Item>
                  <List.Content>
                    <Icon name="cogs" />
                    Builders Services
                  </List.Content>
                </List.Item>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Button as="a" size="large">
                  I'm Still Quite Interested
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </List>
      </Container>
    </Segment>
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={5}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Religious Ceremonies</List.Item>
                <List.Item as="a">Gazebo Plans</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Support
              </Header>
              <p>
                Do you have any creative ideas ?! <br />
                Cool...
                <br />
                we still looking for more hackers to join us
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>
);

// HomepageHeading.propTypes = {
//   mobile: PropTypes.bool
// };

export default HomepageLayout;
