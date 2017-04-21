import React from 'react'
import { browserHistory } from 'react-router'
import './css/signup.css'



class Signup extends React.Component {
    constructor(props) {
        super(props)
        // this.onboard = this.onboard.bind(this)
        this.signup = this.signup.bind(this)

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            phone: '',
            zip: '',
            img_url: ''
        }
    }

    signup() {
        fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                 user: {
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    email: this.state.email,
                    password: this.state.password,
                    phone: this.state.phone,
                    zip: this.state.zip,
                    img_url: this.state.img_url

                }
            })
        })

        .then(function(response) {
            return response.json();
        }) 
        .then(function(response) {

            if (response.user.token) {
                sessionStorage.setItem('token', response.user.token);
                sessionStorage.setItem('user', JSON.stringify(response.user));
                browserHistory.push('/causes') 
            }
            else {
                alert('There was an error. Please view your console.');
                console.log(response)
            }
        })
    }

    render() {
        return <div className="container-fluid signup-back">
        <div className="row">
            <div className="col-sm-6 col-sm-offset-3 signup-form">
            <div className="signup-card">
                <div className="signup-text">
                    <h1>Sign up to start making an impact.</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident possimus earum velit culpa officia neque, aperiam similique ipsam debitis modi! Voluptatibus beatae nam sequiadipisicing elit.</h5>
                </div>
                <br/><br/>

                <div className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="first_name" className="col-sm-2 control-label">First Name*</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="first_name" placeholder="First Name" onChange={(e) => this.setState({first_name: e.target.value})} required />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="last_name" className="col-sm-2 control-label">Last Name*</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="last_name" placeholder="Last Name" onChange={(e) => this.setState({last_name: e.target.value})} required />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="col-sm-2 control-label">Password*</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e) => this.setState({password: e.target.value})} required />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="col-sm-2 control-label">Email*</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control" id="email" placeholder="Email" onChange={(e) => this.setState({email: e.target.value})} required />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="phone" className="col-sm-2 control-label">Mobile Number*</label>
                    <div className="col-sm-10">
                    <input type="tel" className="form-control" id="phone" placeholder="(XXX) XXX-XXXX" onChange={(e) => this.setState({phone: e.target.value})} required />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="zip" className="col-sm-2 control-label">Zip Code*</label>
                    <div className="col-sm-10">
                    <input type="number" className="form-control" id="zip" placeholder="90210" onChange={(e) => this.setState({zip: e.target.value})} required />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="img_url" className="col-sm-2 control-label">Image URL</label>
                    <div className="col-sm-10">
                    <input type="url" className="form-control" id="img_url" placeholder="Paste profile picture URL" onChange={(e) => this.setState({img_url: e.target.value})} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                    <div className="checkbox">
                        <label>
                        <input type="checkbox" required /> Agree to Terms of Service.*
                        </label>
                    </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                    <button type="button" className="btn btn-default" onClick={() => this.signup()}>Sign up</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
    }
}

export default Signup 

