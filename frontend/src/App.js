import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.testApiConnection();
  }

  async testApiConnection() {
    try {
      let response = await fetch('http://localhost:3001/users');
      
      if (!response.ok) {
        throw new Error('Error while fetching resource');
      }

      let data = await response.text();
      console.log(data);
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <code>react.js</code>
        </p>
      </div>
    );
  }
}

export default App;
