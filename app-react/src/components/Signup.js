import React from 'react'
import { browserHistory } from 'react-router'
import './css/signup.css'



class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.signup = this.signup.bind(this)
    }

    signup() {
        browserHistory.push('/give')
    }

    render() {
        return <div>
        <div className="row">
           <div className="col-sm-5">
                <img id="give-img" className="img-responsive" src="/img/giving-photo.jpg" />
            </div>

            <div className="signup-form">
            <div className="col-sm-7">
                <div className="signup-text">
                    <h1>Sign up to start making an impact.</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident possimus earum velit culpa officia neque, aperiam similique ipsam debitis modi! Voluptatibus beatae nam sequiadipisicing elit. Blanditiis natus impedit alias molestias nisi beatae reprehenderit praesentium, ipsum enim, corporis reiciendis maiores sint est explicabo. Tempora quaerat magni reprehenderit, nemo.</h5>
                </div>
                <br/><br/>

                <div className="form-horizontal">
                <div className="form-group">
                    <label for="first_name" className="col-sm-2 control-label">First Name*</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="first_name" placeholder="First Name" required />
                    </div>
                </div>
                <div className="form-group">
                    <label for="last_name" className="col-sm-2 control-label">Last Name*</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="last_name" placeholder="Last Name" required />
                    </div>
                </div>
                <div className="form-group">
                    <label for="password" className="col-sm-2 control-label">Password*</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="password" placeholder="Password" required />
                    </div>
                </div>
                <div className="form-group">
                    <label for="email" className="col-sm-2 control-label">Email*</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control" id="email" placeholder="Email" required />
                    </div>
                </div>
                <div className="form-group">
                    <label for="phone" className="col-sm-2 control-label">Mobile Number*</label>
                    <div className="col-sm-10">
                    <input type="tel" className="form-control" id="phone" placeholder="(XXX) XXX-XXXX" required />
                    </div>
                </div>
                <div className="form-group">
                    <label for="zip" className="col-sm-2 control-label">Zip Code*</label>
                    <div className="col-sm-10">
                    <input type="number" className="form-control" id="zip" placeholder="90210" required />
                    </div>
                </div>
                <div className="form-group">
                    <label for="img_url" className="col-sm-2 control-label">Image URL</label>
                    <div className="col-sm-10">
                    <input type="url" className="form-control" id="img_url" placeholder="Paste profile picture URL" />
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
                    <button type="button" className="btn btn-default" onClick={this.signup}>Sign up</button>
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

