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
      <div className="nav">
        <ul className="list-inline pull-right">
          <li>
            <button type="button" className="btn btn-default">Sign Up</button>
          </li>
        </ul>
      
      </div>
    </header>
    
    <main>
      <div className="container">
        {this.props.children}
      </div>
    </main>

    <footer>
    <h1>Hello footer.</h1>
    </footer>
    
    </div>
  }
}

export default Layout;
