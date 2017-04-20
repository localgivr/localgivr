import React from 'react';
import { browserHistory } from 'react-router'
// import React, { Component } from 'react';
import './css/layout.css'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.signin = this.signin.bind(this)
    this.signedIn = this.signedIn.bind(this)
    this.signout = this.signout.bind(this)
    this.viewAll = this.viewAll.bind(this)
    this.viewHome = this.viewHome.bind(this)

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
      
        if (response.user && response.user.token) {
          sessionStorage.setItem('token', response.user.token);
          sessionStorage.setItem('user', JSON.stringify(response.user));
          location.href = './give';
                }
        else if (response.org && response.org.token) {
          sessionStorage.setItem('token', response.org.token);
          sessionStorage.setItem('user', JSON.stringify(response.org));
          location.href = './request'
        }
        else {
            alert('There was an error. Please view your console.');
        }
  })
}

   signedIn() {
    return sessionStorage.getItem('token')
   }

  signout() {
    sessionStorage.removeItem('token');
    browserHistory.push('/')
  } 

  viewAll() {
    browserHistory.push('/give')
  }

  viewHome() {
    browserHistory.push('/')
  }

  viewProfile() {
    browserHistory.push('/profile')
  }

  render() {
    const signedIn = this.signedIn()

    return <div className="body">
    <header>
      <div className="row nav">
      <div className="col-sm-1">
        <h3>local <strong>givr.</strong></h3>
      </div>
      <div className="col-sm-5"></div>
        <div className="col-sm-6">
              {signedIn ? (
                <ul className="list-inline pull-right">
                  <li>
                    <button type="button" className="btn btn-default viewAll" onClick={this.viewAll}>All Needs</button>
                  </li>
                  <li>
                    <button type="button" className="btn btn-default viewProfile" onClick={this.viewProfile}>Profile</button>
                  </li>
                  <li>
                    <button type="button" className="btn btn-default logOut" onClick={this.signout}>Log Out</button>
                  </li>
                </ul>
              ) : (
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
              )}
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
