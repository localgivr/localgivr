import React from 'react';
// import { browserHistory } from 'react-router'
// import React, { Component } from 'react';
import './css/layout.css'

class Layout extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.state ={}

  // }

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
              <button type="button" className="btn btn-default">Sign Up</button>
            </li>
            <li>
              <button type="button" className="btn btn-default">Log In</button>
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
