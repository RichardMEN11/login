import React, { Component } from 'react';
import LoginForm from './Components/LoginForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Welcome at DocStation</h2>
        <p>Commodo irure sint minim elit reprehenderit magna proident mollit ut qui sit eu incididunt elit.</p>
        <LoginForm />
      </div>
    );
  }
}

export default App;
