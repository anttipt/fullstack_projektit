import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json(); // 🔧 nyt data on määritelty

      if (data.token) {
        localStorage.setItem('token', data.token); // 🔐 tallennetaan token
        setToken(data.token);
        setMessage('Kirjautuminen onnistui!');
      } else {
        setMessage(data.error || 'Kirjautuminen epäonnistui');
      }
    } catch (err) {
      setMessage('Virhe kirjautumisessa');
    }
  };

  return (
    <div>
      <h2>Kirjaudu</h2>
      <form onSubmit={handleLogin}> {/* 🔧 nyt handleLogin on määritelty */}
        <input
          placeholder="Sähköposti"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          placeholder="Salasana"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Kirjaudu</button>
      </form>
      <p>{message}</p>
      {token && <p>Token: {token}</p>}
    </div>
  );
}

export default LoginForm;