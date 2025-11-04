import React from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import './App.css';

function App() {
  return (
    <div>
      <h1>Rekisteröinti ja kirjautuminen</h1>
      <RegisterForm />
      <LoginForm />
    </div>
  );
}

export default App;