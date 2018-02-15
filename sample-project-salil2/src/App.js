import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloComponent from './HelloComponent'
class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloComponent name="Salil"/>
       </div>
    );
  }
}

export default App;
