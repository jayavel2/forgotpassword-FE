
import { useState, useContext } from 'react';


export default function Forgotpassword() {
  
    let [email, setemail] = useState('')
  

    let UserSubmit = async (e) => {
        e.preventDefault()

        await fetch('https://forgotpasswordlink.herokuapp.com/auth/passwordreset', {
            method: "PUT",
            body: JSON.stringify({
                email
            }),
            headers: {
                "content-type": "application/json",

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
                <h1>Forgot password</h1>
                <div className="col-md-8 m-4">

                    <form onSubmit={UserSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input className='form-control' name="email" value={email} onChange={(e) => setemail(e.target.value)}></input>

                        </div>
                        <br />
                        <button type="submit" class="btn btn-primary">Submit</button>

                    </form>
                </div>
            </div>

        </div>
    );
}