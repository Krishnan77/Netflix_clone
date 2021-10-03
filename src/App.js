import React from 'react';

import './App.css';
import HomeScreen from './HomeScreen';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';

function App() {
  const user =null;
  return (
    <div className="App">
  
    <Router>
      {user ? (
        <LoginScreen />
      ) : (
        <Switch>
          <Route path="/profile" >
            <ProfileScreen/>    
            </Route>   
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>

      )}
   
         
      
    </Router>
     
     </div>

        );
}

export default App;
