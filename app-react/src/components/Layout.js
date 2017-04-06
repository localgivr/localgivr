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
    console.log(this.state)
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
          sessionStorage.setItem('token', JSON.stringify(response.user.token));
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
        
          <ul className="list-inline pull-right">
            <li>
                <input type="text" className="form-control" placeholder="Email" onChange={(e) => this.setState({email: e.target.value})} />
            </li>
            <li>
                <input type="password" className="form-control" placeholder="Password" onChange={(e) => this.setState({password: e.target.value})} />
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
      <button type="button" className="btn btn-default signUp">Sign Up</button>
    </footer>
    
    </div>
  }
}

export default Layout;
