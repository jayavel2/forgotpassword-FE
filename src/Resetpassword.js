import react from "react";
import { useState, useContext, useParams } from 'react';
import UserContext from './UserContext'

export default function Forgotpassword(props) {
    let [password, setpassword] = useState('')
    const token = props.match.params.id;

    console.log(props.match.params.token)
    let UserSubmit = async (e) => {
        e.preventDefault()
        let data = await fetch("https://forgotpasswordlink.herokuapp.com/auth/newpassword", {
            method: "POST",
            body: JSON.stringify({
                password, token
            }),
            headers: {
                "content-type": "application/json"
            }
        }).then(res => {
            return res.json();

        }).then((message) => {
            console.log(message)
            let mesg = JSON.stringify(message)
            alert(mesg)
        }).catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
        });
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <h1>Reset password</h1>
                <div className="col-md-8 m-4">

                    <form onSubmit={UserSubmit}>

                        <div class="form-group m-2">
                            <label for="exampleInputPassword1">Enter new Password</label>
                            <input type="password" class="form-control" value={password} onChange={(e) => setpassword(e.target.value)}></input>
                        </div>


                        <br />
                        <button type="submit" class="btn btn-primary">Submit</button>

                    </form>
                    
                </div>
            </div>

        </div>
    );
}