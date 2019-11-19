import React from 'react';
import SignupForm from './components/Signupform.js'
import LoginForm from './components/Loginform.js'
import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
    </div>
  );
}

export default App;
