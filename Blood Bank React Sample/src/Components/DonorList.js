import React, { Component } from 'react';
import * as firebase from "firebase"
class DonorList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            appData: []
        }
    }
    componentWillMount() {
        let arrdata = []
        console.log("fsdfsd")
        var database = firebase.database()
        database.ref('/UserInfo/').on('value', (sabih) => {
            let data = sabih.val();
            //   let keys = Object.keys(data);
            // console.log(data, "data")
            for (var a in data) {
                arrdata.push(data[a].newUser);
                console.log("sabih", data[a])
                // arrdata.push(data)
                // console.log(arrdata)
                this.setState({
                    appData: arrdata
                })
            }
            console.log("app data mai gya array", this.state.appData)
        });
    }
    render() {
        return (
            <div>
                {this.state.appData.map((m, v) => {
                    return (
                        <div key={v}>
                            <label>User Name : </label>
                            <span>{m.userName} </span>  <br />
                            <label>Address : </label>
                            <span>{m.Address} </span><br />
                            <label>Blood Group : </label>
                            <span>{m.BloodGroup} </span><br />
                            <label>Contact Number : </label>
                            <span>{m.ContactNumber} </span><br />
                            <label>Date of Birth : </label>
                            <span>{m.DateOfBirth} </span><br />
                            <br /><br />
                        </div>
                    )
                })}
            </div>
        );
    }
}
export default DonorList
