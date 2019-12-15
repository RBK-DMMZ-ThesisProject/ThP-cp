import "./../css/App.css";
// import PropTypes from "prop-types";
// import React, { Component } from "react";
// import {
//   Button,
//   Container,
//   Header,
//   Icon,
//   Menu,
//   Responsive,
//   Segment,
//   Sidebar,
//   Image,
//   Visibility
// } from "semantic-ui-react";
// import logo from "../assets/logo.jpg";
// const getWidth = () => {
//   const isSSR = typeof window === "undefined";

//   return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
// };

// class DesktopContainer extends Component {
//   state = { activeItem: "home" };

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name });

//   hideFixedMenu = () => this.setState({ fixed: false });
//   showFixedMenu = () => this.setState({ fixed: true });

//   render() {
//     const s = "./Services";
//     const { children } = this.props;
//     const { fixed } = this.state;
//     const { activeItem } = this.state;
//     return (
//       <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
//         <Visibility
//           once={false}
//           onBottomPassed={this.showFixedMenu}
//           onBottomPassedReverse={this.hideFixedMenu}
//         >
//           <Segment
//             className="heading"
//             inverted
//             textAlign="left"
//             style={{
//               minHeight: 600
//             }}
//             vertical
//           >
//             <Image avatar src={logo} size="tiny" />
//           </Segment>
//         </Visibility>

//         {children}
//       </Responsive>
//     );
//   }
// }

// DesktopContainer.propTypes = {
//   children: PropTypes.node
// };

// class MobileContainer extends Component {
//   state = {};

//   handleSidebarHide = () => this.setState({ sidebarOpened: false });

//   handleToggle = () => this.setState({ sidebarOpened: true });

//   render() {
//     const { children } = this.props;
//     const { sidebarOpened } = this.state;

//     return (
//       <Responsive
//         as={Sidebar.Pushable}
//         getWidth={getWidth}
//         maxWidth={Responsive.onlyMobile.maxWidth}
//       >
//         <Sidebar
//           as={Menu}
//           animation="push"
//           inverted
//           onHide={this.handleSidebarHide}
//           vertical
//           visible={sidebarOpened}
//         >
//           <Menu.Item as="a" active>
//             Home
//           </Menu.Item>
//           <Menu.Item as="a" href="">
//             Services
//           </Menu.Item>
//           <Menu.Item as="a">Features</Menu.Item>
//           <Image avatar src={logo} size="mini" />
//           Handy
//         </Sidebar>

//         <Sidebar.Pusher dimmed={sidebarOpened}>
//           <Segment
//             inverted
//             textAlign="left"
//             style={{ minHeight: 350, padding: "1em 0em" }}
//             vertical
//           >
//             <Container>
//               <Menu inverted pointing secondary size="large">
//                 <Menu.Item onClick={this.handleToggle}>
//                   <Icon name="sidebar" />
//                 </Menu.Item>
//                 <Menu.Item position="right">
//                   <Image avatar src={logo} size="mini" />
//                   Handy
//                 </Menu.Item>
//               </Menu>
//             </Container>
//           </Segment>

//           {children}
//         </Sidebar.Pusher>
//       </Responsive>
//     );
//   }
// }
// MobileContainer.propTypes = {
//   children: PropTypes.node
// };

// const ResponsiveContainer = ({ children }) => (
//   <div>
//     <DesktopContainer>{children}</DesktopContainer>
//     <MobileContainer>{children}</MobileContainer>
//   </div>
// );

// ResponsiveContainer.propTypes = {
//   children: PropTypes.node
// };

// export default ResponsiveContainer;
