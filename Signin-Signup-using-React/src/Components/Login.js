import React, { Component } from 'react';
import * as firebase from 'firebase';



// Initialize Firebase
const config = {
  apiKey: "AIzaSyCTjf_PRPYJL10bSsIFH3UdkHVPk2QbIwU",
  authDomain: "bloodbank-876e1.firebaseapp.com",
  databaseURL: "https://bloodbank-876e1.firebaseio.com",
  storageBucket: "bloodbank-876e1.appspot.com",
  messagingSenderId: "560849097238"
};
firebase.initializeApp(config);



class Login extends Component {
  constructor() {
    super()
    //bind login method 
    this.login = this.login.bind(this)

  }




  //login method.. this method fire when login button is click
  login() {

    //first we get the values in variable from textBox with the help of this.refs(reference)
    const email = this.refs.email.value;
    const pass = this.refs.pass.value;

    //send id password to firebase and check id pass.. if they exist, then firebase give access to user 
    const auth = firebase.auth();
     auth.signInWithEmailAndPassword(email, pass).then(() => {
      console.log('Signin Done')

    }


    );
  }



  render() {
    return (

      <div className="App">
        <h1>Login Form</h1>


        <input type="email" ref="email" placeholder="Email" /><br />
        <input type="password" ref="pass" placeholder="password" /><br />

        <button onClick={this.login} id="btnLogin">Login</button><br />
      </div>);


  }
}

export default Login;
