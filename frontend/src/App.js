import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import Home from './components/Home';

class App extends Component {
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/login" component={Login} ></Route>
        <Route exact path="/reset-password" component={ResetPassword} ></Route>
      </Switch>
    ) 
  }
}

export default App;
