import PropTypes from "prop-types";
import "../css/App.css";
import React, { Component } from "react";
import Handy from "../assets/Handy-white.png";
import gpLogo from "../assets/gpLogo.png";
// import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Container,
  Header,
  Menu,
  Segment,
  Visibility
} from "semantic-ui-react";
// import React, { Component } from "react";
import { Card, Divider, Grid, Image, List, Icon } from "semantic-ui-react";
import manImg from "../assets/ma.png";
import provider from "../assets/provider.png";
import customer from "../assets/customer.jpg";
import Electricalmaintanance from "../assets/elc.png";
import cleaning from "../assets/cleaning.png";
import Plumming from "../assets/plumber.png";
import homea from "../assets/homea.png";
import MovingServices1 from "../assets/ca.png";
import ac from "../assets/ac.png";
import satellite from "../assets/satellite.png";
import more from "../assets/more.png";

class HomepageLayout extends React.Component {
  state = { activeItem: "home" };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    const { fixed } = this.state;
    return (
      <div>
        <Segment inverted vertical textAlign="center">
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Container as="nav" id="header">
              <Header inverted as="h1">
                <Image src={Handy} size="massive" />
              </Header>
              <Menu borderless compact inverted fixed={fixed ? "top" : null}>
                <Menu.Item
                  as="a"
                  name="home"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                  href={"#home"}
                >
                  Home
                </Menu.Item>
                <Menu.Item
                  as="a"
                  name="about"
                  active={activeItem === "about"}
                  onClick={this.handleItemClick}
                  href={"#about"}
                >
                  About
                </Menu.Item>
                <Menu.Item
                  as="a"
                  href={"#features"}
                  name="features"
                  active={activeItem === "features"}
                  onClick={this.handleItemClick}
                >
                  Features
                </Menu.Item>
                <Menu.Item
                  as="a"
                  href={"#services"}
                  name="services"
                  active={activeItem === "services"}
                  onClick={this.handleItemClick}
                >
                  Services
                </Menu.Item>

                <Menu.Item
                  as="a"
                  name="contact"
                  active={activeItem === "contact"}
                  onClick={this.handleItemClick}
                  href={"#contact"}
                >
                  Contact
                </Menu.Item>
              </Menu>
            </Container>
          </Visibility>
          <Container className="content" id="home">
            <Header inverted as="h1">
              You Will Find What You Need Here
            </Header>
            <p>A handfull set of service providers just btween your hands.</p>
            <Button
              size="huge"
              style={{ padding: "8em 0em" }}
              style={{ color: "#f2f2f2", backgroundColor: "#078CA9" }}
            >
              <Image src={gpLogo} size="tiny" as={"logo"} id="logo" />
              Get it On Google Play
            </Button>
          </Container>
        </Segment>

        <Segment
          style={{ padding: "8em 0em" }}
          vertical
          className="providsSeg"
          id={"about"}
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
                  service providers can define all their details related to
                  their crafts and promote their skills online to be seen by
                  local customers and even for remote customers depending on
                  their needs.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image size="large" src={manImg} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Header as="h2" style={{ margin: "2em 2em 2em 15em  " }}>
          <Icon name="handshake" />
          Join Us as a service provider or customer
        </Header>
        <Segment id={"features"}>
          <Grid columns={2}>
            <Divider vertical>Or</Divider>
            <Grid.Row>
              <Grid.Column>
                <Card style={{ margin: "0 0 0 33em" }}>
                  <Image src={provider} wrapped />
                  <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                      <span className="date">Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>Photographers</Card.Description>
                    <Card.Description>
                      YOU live the moment and WE capture it{" "}
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column verticalAlign="middle">
                <Card style={{ margin: "0 0 0 10em" }}>
                  <Image src={customer} wrapped />
                  <Card.Content>
                    <Card.Header>Elliot Baker</Card.Header>
                    <Card.Meta>
                      <span className="date">Joined in 2019</span>
                    </Card.Meta>
                    <Card.Description>CEO of services co.</Card.Description>
                    <Card.Description>
                      we alwyas looking for profishinel{" "}
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          {/* </Container> */}
        </Segment>
        <Segment>
          <Divider
            id={"services"}
            as="h4"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
            Our Services
          </Divider>
          <Grid
            container
          // stackable
          // verticalAlign="middle"
          // style={{ margin: "1em 1em 1em 51em" }}
          >
            <Grid.Row centered>
              <Card.Group itemsPerRow={4}>
                <Card
                  color="blue"
                  image={satellite}
                  size="small"
                  header="Satellite"
                  description="Satellite Dish, Installation, Satellite Maintenance "
                />

                <Card
                  color="blue"
                  image={Electricalmaintanance}
                  header=" Electrical works"
                  description="Electrician, Electrical Wiring"
                />

                <Card
                  color="blue"
                  image={cleaning}
                  header="Cleaning services"
                  description="Maids Cleaning, House Cleaning, Home Cleaning Services"
                />

                <Card
                  color="blue"
                  image={Plumming}
                  header=" Plumming works"
                  description="Plumming,Repair, Plumber, Household Sewage Systems"
                />
              </Card.Group>
            </Grid.Row>

            <Grid.Row centered>
              <Card.Group itemsPerRow={4}>
                <Card
                  color="blue"
                  image={homea}
                  header="Home appliances"
                  description="washing machine repair, fridge repair, microwave repair"
                />

                <Card
                  color="blue"
                  image={ac}
                  header=" AC services "
                  description="AC Technician, AC Maintenance, AC Repair "
                />
                <Card
                  borderless
                  color="blue"
                  image={MovingServices1}
                  header=" General maintenance"
                  description="Handymen, General maintenance, Furniture Installation"
                />

                <Card
                  borderless
                  color="blue"
                  image={more}
                  header="And More "
                  description="more Services"
                />
              </Card.Group>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment inverted id="contact" verticalAlign="middle">
          <Grid inverted style={{ margin: "1em 1em 1em 24em" }}>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as="a">Contact Us</List.Item>
                  <List.Item as="a">Github Organization</List.Item>
                  <List.Item as="a">Gazebo Plans</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={5}>
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
            <Grid.Row>
              <Segment vertical as="footer">
                Thesis project RBK
                <a href="http://rbk.org/apply/public/index.php">
                  {" "}
                  programing bootcamp
                </a>
                , by{" "}
                <a href="https://github.com/semantic-ui-forest">DMMZ team</a>.
              </Segment>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}
// HomepageHeading.propTypes = {
//   mobile: PropTypes.bool
// };

export default HomepageLayout;
