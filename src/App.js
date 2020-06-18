import React, { Component } from 'react';
import ShoppingApp from "./components/ShoppingCart/ShoppingApp.jsx"
import Nav from './components/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MemeGenerator from './components/meme/MemeGenerator'

import './App.css';


class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Nav />
          <Route path="/Meme" component={MemeGenerator} />
          <Route path="/Shop" component={ShoppingApp} />
        </Router>
      </>
    );
  }

}

export default App;
