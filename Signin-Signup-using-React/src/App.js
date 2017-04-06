import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router'



class App extends Component {
  render() {
    return (
      <div className="App">

        <Link to="/Login"> <button>Signin</button></Link>
        <br />
        <Link to="/Signup"> <button>Signup</button>  </Link>


      </div>
    );
  }
}

export default App;
