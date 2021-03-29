import React, { Component } from 'react';
import MainPage from './pages/Main';
import LoginPage from './pages/Login';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import classes from './App.css';

class App extends Component {

  render() {
    return (
      <>
      <Router>
        <Route path='/' exact component={LoginPage}/>
        <Route path='/main' component={MainPage}/>
      </Router>
      </>
    )
  }
}

export default App;