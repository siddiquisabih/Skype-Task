import React, { Component } from 'react';
import * as firebase from 'firebase';
import './Doner.css'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
class Doner extends React.Component {
    constructor(props) {
        super(props)
        this.sendData = this.sendData.bind(this)
    }

    sendData() {
        let dName = this.refs.name.value;
        let dAddress = this.refs.address.value;
        let dCnumber = this.refs.cNumber.value;
        let dBloodGroup = this.refs.bloodGroup.value;
        let dDob = this.refs.dob.value;

        let data = firebase.database().ref().child("UserInfo");
        let newUser = {
            userName: dName,
            Address: dAddress,
            ContactNumber: dCnumber,
            BloodGroup: dBloodGroup,
            DateOfBirth: dDob
        }
        data.push({
            newUser
        }).then(() => {
            browserHistory.push("/DonorList");
        })
        console.log(dName, dAddress, dCnumber, dBloodGroup, dDob)
    }
    render() {
        return (
            <div className="donner">
                <h1>Doner Information</h1>
                <label>Full Name</label><br />
                <input type="text" placeholder="Full Name" ref="name" /><br />
                <label>Address</label><br />
                <input type="text" placeholder="Adderss" ref="address" /><br />
                <label>Contact Number</label><br />
                <input type="text" placeholder="contact Number" ref="cNumber" /><br />
                <label>Blood Group</label><br />
                <input type="text" placeholder="Blood Group" ref="bloodGroup" /><br />
                <label>Date Of Birth</label><br />
                <input type="text" placeholder="Date Of Birth" ref="dob" /><br />
                <button onClick={this.sendData} ref="sendData" to="/dataInfo"> Submit</button><br />

            </div>
        )
    }
}


export default Doner