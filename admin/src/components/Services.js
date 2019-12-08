import PropTypes from "prop-types";
import "../css/App.css";
import React, { Component } from "react";
import {
  Card,
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Icon,
  Segment
} from "semantic-ui-react";
import ResponsiveContainer from "./Home";
import manImg from "../assets/ma.png";
const HomepageLayout = () => (
  <ResponsiveContainer>
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
              like (plumbers, carpenters, babysitters, electricians, painters
              ..etc ) with customers
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
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge">Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Instead of focusing on content creation and hard work, we have learned
          how to master the art of doing nothing by providing massive amounts of
          whitespace and generic content that can seem massive, monolithic and
          worth your attention.
        </p>
        <Button as="a" size="large">
          Read More
        </Button>
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
  </ResponsiveContainer>
);
export default HomepageLayout;
