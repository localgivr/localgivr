import React from 'react';
//import { browserHistory } from 'react-router'
// import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
// import React, { Component } from 'react';
import './css/layout.css'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.signin = this.signin.bind(this)
    this.signedIn = this.signedIn.bind(this)
    //this.toggleSignOut = this.toggleSignOut.bind(this)
    this.signout = this.signout.bind(this)

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
          password: this.state.password,
          token: this.state.token
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

   signedIn() {
    sessionStorage.getItem('token')
   }

  // toggleSignOut() {
    
  //   var token = sessionStorage.getItem('token')
  //   console.log(token)
  //   if (token) {
  //     // return <button type="button" className="btn btn-default logOut" onClick={this.signout}>Log Out</button> 
  //   }
  //   else {
  //     return <button type="button" className="btn btn-default logIn" onClick={this.signin}>Log In</button>
  //   }
  // }

  signout() {
    //sessionStorage.clear();
    sessionStorage.removeItem('token');
  }

  render() {
    const signedIn = this.state.signedIn
    
    return <div className="body">
    <header>
      <div className="row nav">
      <div className="col-sm-1">
        <h3>local <strong>givr.</strong></h3>
      </div>
      <div className="col-sm-5"></div>
        <div className="col-sm-6">
          <ul className="list-inline pull-right">
            <li>
                <input type="text" className="form-control" placeholder="Email" onChange={(e) => this.setState({email: e.target.value})} />
            </li>
            <li>
                <input type="password" className="form-control" placeholder="Password" onChange={(e) => this.setState({password: e.target.value})} />
            </li>
            <li>
              {/*<button type="button" className="btn btn-default logIn" onClick={this.toggleSignOut}>Log In</button>*/}
            </li>
            <li>
              {/*<button type="button" className="btn btn-default logOut" onClick={this.signout}>Log Out</button>*/}
            </li>
            <li>
              {signedIn ? (
                <button type="button" className="btn btn-default logOut" onClick={this.signout}>Log Out</button>
              ) : (
                <button type="button" className="btn btn-default logIn" onClick={this.signin}>Log In</button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
    
    <main>

        {this.props.children}

    </main>

    <footer>
      <h6 className="text-center">Very useful footer info.</h6>
      {/*<button type="button" className="btn btn-default signUp">Sign Up</button>*/}
    </footer>
    
    </div>
  }
}

export default Layout;
