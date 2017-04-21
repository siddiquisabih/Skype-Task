import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'
import * as firebase from 'firebase';
class Login extends Component {
  constructor() {
    super()
    this.login = this.login.bind(this)
  }

  //login form k liye hai yai
  login() {

    const email = this.refs.email.value;
    const pass = this.refs.pass.value;
    const auth = firebase.auth();
    const signin = auth.signInWithEmailAndPassword(email, pass).then(() => {
      browserHistory.push("/Donor")
      console.log('yahoo again')
    }
    );
  }



  render() {
    return (

      <div className="App">

        <input type="email" ref="email" placeholder="Email" /><br />
        <input type="password" ref="pass" placeholder="password" /><br />
        <button onClick={this.login}>Login</button>
        <Link to="/"><button>Back</button></Link>

      </div>);


  }
}

export default Login