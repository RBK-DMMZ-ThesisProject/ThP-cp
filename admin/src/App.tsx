import React from 'react';
import logo from './logo.svg';
import Nav from './Nav';
import './App.css';
import Profile from './Profile';
import SignIn from './SignIn';
const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Nav/> */}
      {/* <Profile /> */}
      <SignIn/>
    </div>
  );
}

export default App;
