import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { request } from 'http';

class App extends Component {

  componentDidMount(){
    axios.get('/api/dog', request)
  }

  render() {
    return (
      <div className="App">


      </div>
    );
  }
}

export default App;
