import React from 'react';

function ProtectedContent() {
  const token = localStorage.getItem('token');

  if (!token) {
    return <p>🔒 Et ole kirjautunut. Tämä sisältö on suojattu.</p>;
  }

  return (
    <div>
      <h2>✅ Tervetuloa, kirjautunut käyttäjä!</h2>
      <p>Tämä sisältö näkyy vain, jos JWT-token on tallennettu.</p>
    </div>
  );
}

export default ProtectedContent;