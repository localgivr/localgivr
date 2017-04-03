import React from 'react'
// import { browserHistory } from 'react-router'
import './css/signup.css'

class Signup extends React.Component {
    render() {
        return <div className="signup-form">

            <div className="row">
                <form className="form-horizontal">
                <div className="form-group">
                    <label for="first_name" className="col-sm-2 control-label">First Name</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="first_name" placeholder="First Name" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="last_name" className="col-sm-2 control-label">Last Name</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="last_name" placeholder="Last Name" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="password" className="col-sm-2 control-label">Password</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="email" className="col-sm-2 control-label">Email</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control" id="email" placeholder="Email" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="phone" className="col-sm-2 control-label">Mobile Number</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="phone" placeholder="(XXX) XXX-XXXX" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="zip" className="col-sm-2 control-label">Zip Code</label>
                    <div className="col-sm-10">
                    <input type="number" className="form-control" id="zip" placeholder="90210" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                    <div className="checkbox">
                        <label>
                        <input type="checkbox"/> Agree to Terms of Service.
                        </label>
                    </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                    <button type="button" className="btn btn-default">Sign up</button>
                    </div>
                </div>
                </form>
            </div>

        </div>
    }
}

export default Signup 