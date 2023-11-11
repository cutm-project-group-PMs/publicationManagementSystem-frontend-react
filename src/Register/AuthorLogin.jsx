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




// // AuthorLoginForm.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const AuthorLoginForm = () => {
//     const [loginData, setLoginData] = useState({
//         email: '',
//         password: '',
//     });

//     const handleChange = (e) => {
//         setLoginData({
//             ...loginData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8099/api/authors/login', loginData);
//             console.log(response.data);
//             alert("login hela")

//             // Handle successful login
//         } catch (error) {
//             console.error('Error logging in:', error);
//             // Handle login error
//             alert("login hela naji hoo")

//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Email:
//                 <input type="email" name="email" value={loginData.email} onChange={handleChange} />
//             </label>
//             <br />
//             <label>
//                 Password:
//                 <input type="password" name="password" value={loginData.password} onChange={handleChange} />
//             </label>
//             <br />
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default AuthorLoginForm;
