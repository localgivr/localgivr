import React from 'react'
import { browserHistory } from 'react-router'
import { Jumbotron, Button } from 'react-bootstrap'
import './css/homepage.css'

class Homepage extends React.Component {

    constructor(props) {
        super(props)

        this.signup = this.signup.bind(this)
    }

    signup() {
        browserHistory.push('/signup')
    }


    render() {
        return <div>
            <Jumbotron className="jumbotron">
                <h1>Hello, world!</h1>
                <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p><Button bsSize="large" className="signup-button" onClick={this.signup}>Sign Up</Button></p>
            </Jumbotron>

            <div className="home-header text-center">
                    <h1>Enticing Text:</h1> <br/>

            </div>
        </div>
    }
}
export default Homepage;
