import "./../css/App.css";
import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Header,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Image,
  Visibility
} from "semantic-ui-react";
import logo from "../assets/ma.png";
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Handy"
      inverted
      style={{
        fontSize: mobile ? "1.7em" : "3.7em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.2em" : "2.7em",
        marginLeft: mobile ? "3em" : "6em"
      }}
    />
    <Header
      as="h3"
      content="A handfull set of service providers just btween your hands."
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.3em" : "0.5em",
        marginLeft: mobile ? "4em" : "13em"
      }}
    />
    <Button
      primary
      size="huge"
      style={{
        innerWidth: mobile ? "3.5em" : "16.5em",
        marginTop: mobile ? "0.3em" : "0.5em",
        marginLeft: mobile ? "4em" : "17em"
      }}
    >
      <Icon name="google play" class="googleIcon" />
      Get it On Google Play
      <Icon name="right arrow" />
    </Button>
  </Container>
);

class DesktopContainer extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const s = "./Services";
    const { children } = this.props;
    const { fixed } = this.state;
    const { activeItem } = this.state;
    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            className="heading"
            inverted
            textAlign="left"
            style={{
              minHeight: 700,
              padding: "1em 0em"
            }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="massive"
            >
              <Container>
                <Menu.Item
                  as="a"
                  href={s}
                  name="home"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                >
                  Home
                </Menu.Item>
                <Menu.Item
                  as="a"
                  name="Services"
                  active={activeItem === "Services"}
                  onClick={this.handleItemClick}
                >
                  Services
                </Menu.Item>
                <Menu.Item
                  as="a"
                  name="About us"
                  active={activeItem === "About us"}
                  onClick={this.handleItemClick}
                >
                  Features
                </Menu.Item>
                <Menu.Item position="right">
                  <Image avatar src={logo} size="mini" />
                  Handy
                </Menu.Item>
              </Container>
            </Menu>
            {/* <Container>
              <Image bordered rounded size="large" src={subImg} />
            </Container> */}
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a" href="">
            Services
          </Menu.Item>
          <Menu.Item as="a">Features</Menu.Item>
          <Image avatar src={logo} size="mini" />
          Handy
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="left"
            style={{ minHeight: 350, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Image avatar src={logo} size="mini" />
                  Handy
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}
MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};
export default ResponsiveContainer;