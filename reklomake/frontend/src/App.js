import React from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

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