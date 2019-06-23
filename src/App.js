import React, { Component } from 'react';
import './App.css';

import Weather from './components/Weather/Weather'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
      return (
        <Weather></Weather>
      )
    
    }
}

export default App;
