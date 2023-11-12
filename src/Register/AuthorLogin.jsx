// AuthorLogin.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './a_login.css';

const AuthorLogin = ({ onLogin, history }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const handleLogin = () => {
    axios.post('http://localhost:8043/api/authors/login', credentials)
      .then(response => {
        onLogin(response.data);
        // Redirect to book list after login
       // history.push('/books');
       navigate('/bookm');
      })
      .catch(error =>  {
        // Handle error and navigate to signup
        alert('Error logging in:'+error);
        navigate('/signup');
      });
  };

  return (
    <div className="login-container">
    <div className="login-form">
      <h2>Author Login</h2>
      <label>Email:</label>
      <input type="text" value={credentials.email} onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} />
      <br />
      <label>Password:</label>
      <input type="password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
    </div>
  );
};

export default AuthorLogin;




