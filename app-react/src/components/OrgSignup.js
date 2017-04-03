import React from 'react'
// import { browserHistory } from 'react-router'
import './css/signup.css'

class OrgSignup extends React.Component {
    render() {
        return <div> 
        <div className="org-signup-form">

            <div className="row">
                <form className="form-horizontal">
                <div className="form-group">
                    <label for="org_name" className="col-sm-2 control-label">Organization Name</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="org_name" placeholder="Organization Name" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="org_password" className="col-sm-2 control-label">Password</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="org_password" placeholder="Password" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="org_email" className="col-sm-2 control-label">Contact Email</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control" id="org_email" placeholder="Email" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="org_phone" className="col-sm-2 control-label">Contact Number</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="org_phone" placeholder="(XXX) XXX-XXXX" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="org_street" className="col-sm-2 control-label">Address</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="org_street" placeholder="123 Appletree Dr., Suite 500" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="org_city" className="col-sm-2 control-label">City</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="org_city" placeholder="Indianapolis" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="org_state" className="col-sm-2 control-label">State</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="org_state" placeholder="Indiana" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="zip" className="col-sm-2 control-label">Zip Code</label>
                    <div className="col-sm-10">
                    <input type="number" className="form-control" id="zip" placeholder="46225" />
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
        </div>
    }
}

export default OrgSignup 