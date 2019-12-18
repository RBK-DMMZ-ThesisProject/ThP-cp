import React from "react";
import "./css/App.css";
import SignIn from "./components/SignIn";
import Main from "./components/Main";
import HomepageLayout from "./components/Services";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <Main /> */}
        {/* <Nav/> */}
        {/* <Profile /> */}
        <Switch>
          <Route path="/admin" exact component={SignIn} />
          <Route path="/profiles" exact component={SignIn} />
          <Route path="/users" exact component={SignIn} />
          <Route path="/" component={HomepageLayout} />
        </Switch>
      </div>
    </Router>
    // <div className="App">
    //   <Main />
    //   {/* <Nav/> */}
    //   {/* <Profile /> */}
    //   {/* <SignIn/> */}
    //   {/* <Users /> */}
    // </div>
  );
};

export default App;
