import React from "react";
import Main from "./Main.js";
import "./App.css";
import SignIn from './SignIn';
import HomepageLayout from './Services';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";


const App = () => {
  return (
    <Router>
          <div className="App">
    {/* <Main /> */}
    {/* <Nav/> */}
    {/* <Profile /> */}
    <Switch> 
      <Route path="/" exact component={HomepageLayout}/>
      <Route path="/admin" exact component={SignIn}/>
      <Route path="/profiles" exact component={Main}/>
      <Route path="/users" exact component={Main}/>
    
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
