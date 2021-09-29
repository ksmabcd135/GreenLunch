import React, { Component } from 'react';
import MainPage from './pages/Main';
import LoginPage from './pages/Login';
import { BrowserRouter as Router } from 'react-router-dom';
import PublicRouter from './components/router/PublicRouter';
import PrivateRouter from './components/router/PrivateRouter';
class App extends Component {

  render() {
    return (
      <>
        <Router>
          <PublicRouter path="/" component={LoginPage} />
          <PrivateRouter path="/main" component={MainPage} />                
        </Router>
      </>
    )
  }
}

export default App;