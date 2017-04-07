import React from 'react'
import { browserHistory } from 'react-router'
import './css/signup.css'

class OrgSignup extends React.Component {
    constructor(props) {
        super(props)
        this.orgSignup = this.orgSignup.bind(this)

        this.state = {
            name: '',
            email: '',
            password: '',
            phone: '',
            street: '',
            city: '',
            state: '',
            zip: '',
        }
    }

    orgSignup() {
        console.log(this.state)
        fetch('/api/orgs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                phone: this.state.phone,
                street: this.state.street,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip,
            })
        })

        .then(function(response) {
            return response.json();
        }) 
        .then(function(response) {
            return console.log(response);

            if (response.user.token) {
                sessionStorage.setItem('token', JSON.stringify(response.user.token));
                browserHistory.push('/organization-profile')
            }
            else {
                alert('There was an error. Please view your console.');
                console.log(response)
            }
        })
    }


    render() {
        return <div> 
        <div className="org-signup-form">

            <div className="row">
                <div className="form-horizontal">
                <div className="form-group">
                    <label for="name" className="col-sm-2 control-label">Organization Name</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="name" placeholder="Organization Name" onChange={(e) => this.setState({name: e.target.value})} />
                    </div>
                </div>
                <div className="form-group">
                    <label for="password" className="col-sm-2 control-label">Password</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e) => this.setState({password: e.target.value})} />
                    </div>
                </div>
                <div className="form-group">
                    <label for="email" className="col-sm-2 control-label">Contact Email</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control" id="email" placeholder="Email" onChange={(e) => this.setState({email: e.target.value})} />
                    </div>
                </div>
                <div className="form-group">
                    <label for="phone" className="col-sm-2 control-label">Contact Number</label>
                    <div className="col-sm-10">
                    <input type="tel" className="form-control" id="phone" placeholder="(XXX) XXX-XXXX" onChange={(e) => this.setState({phone: e.target.value})} />
                    </div>
                </div>
                <div className="form-group">
                    <label for="street" className="col-sm-2 control-label">Address</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="street" placeholder="123 Appletree Dr., Suite 500" onChange={(e) => this.setState({street: e.target.value})} />
                    </div>
                </div>
                <div className="form-group">
                    <label for="city" className="col-sm-2 control-label">City</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="city" placeholder="Indianapolis" onChange={(e) => this.setState({city: e.target.value})} />
                    </div>
                </div>
                <div className="form-group">
                    <label for="state" className="col-sm-2 control-label">State</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="state" placeholder="Indiana" onChange={(e) => this.setState({state: e.target.value})} />
                    </div>
                </div>
                <div className="form-group">
                    <label for="zip" className="col-sm-2 control-label">Zip Code</label>
                    <div className="col-sm-10">
                    <input type="number" className="form-control" id="zip" placeholder="46225" onChange={(e) => this.setState({zip: e.target.value})} />
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
                    <button type="button" className="btn btn-default" onClick={this.orgSignup}>Sign up</button>
                    </div>
                </div>
                </div>
            </div>

        </div>
        </div>
    }
}

export default OrgSignup 