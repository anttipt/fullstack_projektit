import React, { useState } from 'react';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3001/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });
    const data = await res.json();
    setMessage(data.message || data.error);
  };

  return (
    <div>
      <h2>Rekisteröidy</h2>
      <form onSubmit={handleRegister}>
        <input placeholder="Käyttäjänimi" value={username} onChange={e => setUsername(e.target.value)} />
        <input placeholder="Sähköposti" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="Salasana" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Rekisteröidy</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default RegisterForm;