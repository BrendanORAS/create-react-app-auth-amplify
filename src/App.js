import React, { Component } from 'react';
import logo from './logo.svg';
import logo2 from './safertracerlogo.PNG';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo2} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://safertracerfarrerpark.s3.amazonaws.com/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here To Register
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
