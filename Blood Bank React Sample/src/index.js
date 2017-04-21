import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Components/Login'
import './index.css';
import { Router, Route, browserHistory } from 'react-router'
import Doner from './Components/Doner';
import * as firebase from "firebase"
import Signup from "./Components/Signup"
import DonorList from "./Components/DonorList"
// import Data from "./List"


// Initialize Firebase
const config = {
  apiKey: "AIzaSyCTjf_PRPYJL10bSsIFH3UdkHVPk2QbIwU",
  authDomain: "bloodbank-876e1.firebaseapp.com",
  databaseURL: "https://bloodbank-876e1.firebaseio.com",
  storageBucket: "bloodbank-876e1.appspot.com",
  messagingSenderId: "560849097238"
};
firebase.initializeApp(config);

ReactDOM.render(



  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>


    <Route path="/Login" component={Login} />
    <Route path="/Signup" component={Signup} />
    <Route path="/Donor" component={Doner} />
    <Route path="/DonorList" component={DonorList}/>



  </Router>


  ,
  document.getElementById('root')
);
