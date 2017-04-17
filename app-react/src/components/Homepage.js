import React from 'react'
import { browserHistory } from 'react-router'
import { Jumbotron, Button } from 'react-bootstrap'
import './css/homepage.css'

class Homepage extends React.Component {

    constructor(props) {
        super(props)

        this.signup = this.signup.bind(this)

        this.getStuff = this.getStuff.bind(this)
        this.addAttr = this.addAttr.bind(this)
        this.state = {
          user: {},
          test: "hello"
        }
    }

    getStuff() {
      var token = "FKvqzBN4mDawVZauadSHynVm"
      fetch('/api/users/profile?token=' + token)
      .then(res => res.json())
      .then(res => {this.setState({user: res.user})})

    }

    addAttr(key, value) {
      this.setState({
        [key]: value
      })
    }

    componentDidMount() {
        this.getStuff()
    }

    signup() {
        browserHistory.push('/signup')
    }


    render() {
      console.log(this.state)
      // this.addAttr("test", "pass?") //this is bad - lots of looping errors
      const {user} = this.state

        return <div>
            <Jumbotron className="jumbotron">
                <h1>Hello, world!</h1>
                <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p><Button bsSize="large" className="signup-button" onClick={this.signup}>Sign Up</Button></p>
            </Jumbotron>

            <div className="home-header text-center">
                    <h1>Enticing Text:</h1> <br/>
                    <h2>{user.first_name} {user.last_name}</h2>

            </div>
        </div>
    }
}
export default Homepage;
