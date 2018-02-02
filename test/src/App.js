import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuantBreakdown from 'quantity-breakdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        This is our Fancy Component: 

        <QuantBreakdown 
          text="Raw Materials" 
          type="cost"
          chunks={[
            { name: 'In Cycle (Unattended)', value: 10 },
            { name: 'In Cycle (Attended)', value: 20 },
            { name: 'Idle (Unattended)', value: 30 },
            { name: 'Idle (Attended)', value: 40 },
          ]} 
          />
      </div>
    );
  }
}

export default App;
