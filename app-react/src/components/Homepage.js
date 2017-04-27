import React from 'react'
import { browserHistory } from 'react-router'
import { Jumbotron, Button } from 'react-bootstrap'
import './css/homepage.css'

class Homepage extends React.Component {

    constructor(props) {
        super(props)

        this.signup = this.signup.bind(this)
        this.orgSignup = this.orgSignup.bind(this)
    }

    signup() {
        browserHistory.push('/signup')
    }

    orgSignup() {
        browserHistory.push('/organization-signup')
    }


    render() {
        return <div>
        <div className="container-fluid home-header"><p>  </p></div>
        <div className="container-fluid home-background">
            <h2 id="home-banner">Micro-philanthropy without the friction.</h2><br/>
            <p>Give back to your community without breaking the bank.</p> 
            <p>Recieve text notifications when organizations in your area have a giving opportunity.</p> 
            <p>Donate small-scale money or supplies.</p> 
            <p>Feel good.</p>
        </div>
        <div className="container-fluid home-background-light">
            <div className="container home-card text-center">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Give.</h2>
                        <p id="home-info">Giving back to your community has never been easier. With Localgivr, find needs in your area that don't break the bank. If you find a cause or organization you love, update your user preferences and we will send you curated text messages weekly with opportunities near by.</p>
                        <Button bsSize="large" className="signup-button" onClick={this.signup}>Sign Up</Button>
                    </div> 
                    <div className="col-sm-6">
                        <h2>Request Support.</h2>
                        <p id="home-info">Connect with members of your community who care about your cause. Localgivr allows you to bypass any extra work - for you or the user. Post need requests and have them pushed to users on their phone. Meeting needs has never been easier.</p>
                        <Button bsSize="large" className="signup-button" onClick={this.orgSignup}>Org. Sign Up</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    }
}
export default Homepage;
