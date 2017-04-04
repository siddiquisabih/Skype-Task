import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route,  browserHistory } from "react-router"
import './index.css';
import Comp1 from "./components/comp1"
import Comp2 from "./components/comp2"

ReactDOM.render(

  <Router history={browserHistory}>
    <Route path="/" component={App}>


      <Route path="comp1" component={Comp1} />
      <Route path="comp2" component={Comp2} />



    </Route>


  </Router>

  ,
  document.getElementById('root')
);
