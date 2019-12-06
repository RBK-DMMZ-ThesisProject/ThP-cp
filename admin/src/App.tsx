import React from 'react';
import Main from './Main.js';
import './App.css';
import SignIn from './SignIn';
import HomepageLayout from './Services';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
const App: React.FC = () => {
  return (
    <Router>
    <div className="App">
      {/* <Main /> */}
      {/* <Nav/> */}
      {/* <Profile /> */}
      <Switch> 
        <Route path="/" exact component={HomepageLayout}/>
        <Route path="/admin" component={SignIn}/>
      
      </Switch>
    
    </div>
    </Router>
  );
};

export default App;
