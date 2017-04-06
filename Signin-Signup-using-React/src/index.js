import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Components/Login'
import './index.css';
import Signup from "./Components/Signup"
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(


  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/Login" component={Login} />
    <Route path="/Signup" component={Signup} />

  </Router>


  ,
  document.getElementById('root')
);
