import React, { Component } from 'react';
import {Link} from "react-router"
class App extends Component {
  render() {
    return (
      <div>
      <h1>Routing</h1>
      {this.props.children}
      <br/>
      <nav><Link to="comp1"> <button> Go to First Component</button></Link>
      
        <Link to="comp2"><button> Go to Second Component </button></Link>
        </nav>

      </div>
    );
  }
}

export default App;
