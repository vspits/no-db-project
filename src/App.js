import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { request } from 'http';
import Header from './Components/Header';
// import Doggos from './Components/Doggos';
import Main from './Components/Main';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
