import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const correctPassword = 'pass123';

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      navigate('/links'); 
    } else {
      alert ('Incorrect Password!');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '20px' }}>
        <label htmlFor="username" style={{ fontWeight: 'bold' }}>Username</label>
        <input
          id="username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange}
          style={{ borderRadius: '20px', padding: '10px', border: '1px solid #ccc' }}
        />
        
        <label htmlFor="password" style={{ fontWeight: 'bold' }}>Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          style={{ borderRadius: '20px', padding: '10px', border: '1px solid #ccc' }}
        />
        
        <button type="submit" style={{ backgroundColor: 'blue', color: 'white', borderRadius: '20px', padding: '10px', border: 'none', cursor: 'pointer' }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
