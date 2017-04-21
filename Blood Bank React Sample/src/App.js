import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router'
import signIn from "./Components/Signup"
class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Link to="/Login" > Register Or signIn Your self</Link><br/>*/}
        {/*<Link to="/Donor">Donor</Link>*/}
        
        <Link to="/Login"><button>Login</button></Link>
        <Link to="/Signup"><button>Signup</button></Link>



     {this.props.children}

      </div>
    );
  }
}

export default App;
