import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends Component {

  constructor(props) {
    super(props)

    axios
      .get('/product/list')
      .then((res) => {
        console.log(res)
      })

  axios
      .get('/product/list/5')
      .then((res) => {
        console.log(res)
      })
  }

  render() {
    return (
      <div classname="App">
        <header classname="App-header">
          <img src={logo} classname="App-logo" alt="logo" />
          <h1 classname="App-title">Welcome To React</h1>
        </header>
        <p classname="App-intro">
          to get started, edit <code>src/app.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
