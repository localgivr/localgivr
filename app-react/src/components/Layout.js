import React from 'react';
//import { browserHistory } from 'react-router'
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
// import React, { Component } from 'react';
import './css/layout.css'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.signin=this.signin.bind(this)
      this.state = {
        email: '',
        password: ''
            }
  }

  signin() {
    fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        user: { 
          email: this.state.email,
          password: this.state.password
        }
      })
    })

      .then(function(response) {
        return response.json();
          })
      .then(function(response) {
        console.log(response);
      
        if (response.user.token) {
          sessionStorage.setItem('user', JSON.stringify(response));
          location.href = './give';
                }
        else {
            alert('There was an error. Please view your console.');
            console.log(response);
        }
  })
  }

  render() {
    return <div>
    <header>
      <div className="row nav">
      <div className="col-sm-6">
        <h3>local<strong>givr.</strong></h3>
      </div>
        <div className="col-sm-6">
        <Form inline>
    <FormGroup controlId="signin">
      <ControlLabel>Email</ControlLabel>
      <FormControl type="text" placeholder="Email" />
    </FormGroup>
    <FormGroup controlId="signinPass">
      <ControlLabel>Password</ControlLabel>
      <FormControl type="password" placeholder="password" />
    </FormGroup>
    </Form>
          <ul className="list-inline pull-right">
            <li>
              <button type="button" className="btn btn-default signUp">Sign Up</button>
            </li>
            <li>
              <button type="button" className="btn btn-default logIn" onClick={this.signin}>Log In</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
    
    <main>
      <div className="container">
        {this.props.children}
      </div>
    </main>

    <footer>
      <h6 className="text-center">Very useful footer info.</h6>
    </footer>
    
    </div>
  }
}

export default Layout;
