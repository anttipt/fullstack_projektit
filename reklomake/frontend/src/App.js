import React from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import ProtectedContent from './ProtectedContent'; // 🔐 tuo komponentti

function App() {
  return (
    <div>
      <h1>Rekisteröinti ja kirjautuminen</h1>
      <RegisterForm />
      <LoginForm />
      <ProtectedContent /> {/* 🔐 näytetään suojattu sisältö */}
    </div>
  );
}

export default App;