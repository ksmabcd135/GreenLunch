import React, { Component } from 'react';
import LoginForm from './Login/LoginForm';
import PersonInput from './Person/Person';
class App extends Component {

  render() {
    return (
      <div>
        <LoginForm></LoginForm>
        <PersonInput/>
      </div>
    )
  }
}

export default App;