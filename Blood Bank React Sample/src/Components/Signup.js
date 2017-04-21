import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'
import * as firebase from 'firebase';

class Signup extends Component {
    constructor() {
        super()
        this.signup = this.signup.bind(this)
    }



    signup() {

        const email = this.refs.email.value;
        const pass = this.refs.pass.value;
        const auth = firebase.auth();
        const signin = auth.createUserWithEmailAndPassword(email, pass).then((user) => {
            let userdata = firebase.database().ref().child("hi");
            userdata.push({ email: email, password: pass });
        });
    }


    render() {
        return (

            <div className="App">
                <input type="email" ref="email" placeholder="Email" /><br />
                <input type="password" ref="pass" placeholder="password" /><br />
                <button onClick={this.signup} >Signup</button>
                        <Link to="/"><button>Back</button></Link>

            </div>
        );


    }
}
export default Signup