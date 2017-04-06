import React, { Component } from 'react';
import * as firebase from 'firebase';

class Signup extends Component {
    constructor() {
        super()

        //bind Signup method 
        this.Signup = this.Signup.bind(this);

    }

    //login method.. this method fire when login button is click
    Signup() {

        //first we get the values in variable from textBox with the help of this.refs(reference)
        const email = this.refs.email.value;
        const pass = this.refs.pass.value;

        //send id password to firebase and create new user.  
        const auth = firebase.auth();
        auth.createUserWithEmailAndPassword(email, pass).then((user) => {
            let child = firebase.database().ref().child("userIdAndPass");
            child.push({ email: email, password: pass });
            console.log("Signup Done")


        }

        );
    }


    render() {
        return (

            <div className="App">
                <h1>Signup Form</h1>


                <input ref="email" type="email" placeholder="Email" /><br />
                <input type="password" ref="pass" placeholder="password" /><br />
                <button onClick={this.Signup} id="btnSignup">Signup</button>
            </div>);


    }


}
export default Signup