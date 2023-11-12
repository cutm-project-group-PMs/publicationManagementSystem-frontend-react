import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AllBook from '../component/AllBook';

const StudentLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post('http://localhost:8043/api/students/login', null, {
      params: {
        email: email,
        password: password
      }
    })
      .then(response => {
        console.log('User logged in successfully:', response.data);
        alert("yes he is present")
        navigate('/allBooks');
      })
      .catch(error => {
        console.error('Error logging in:', error);
        alert("user  name not present");
      });
  };

  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <h2>Student Login</h2>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-group">
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
      <AllBook />
    </>
  );
};

export default StudentLogin;









//==== this code is working properly=======
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// // import './u_Login.css';

// const StudentLogin = () => {                                          // const LoginForm = ({History}) => { 
//     const navigate = useNavigate();

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
            
//     const handleLogin = () => {
//         axios.post('http://localhost:8043/api/students/login', null, {
//             params: {
//                 email: email,
//                 password: password
//             }
//         })
//             .then(response => {
//                 console.log('User logged in successfully:', response.data);
//                 alert("yes he is present")
//                 navigate('/allBooks');

//             })
//             .catch(error => {
//                 console.error('Error logging in:', error);
//                 alert("user  name not present");
//                 // navigate('/check');
//             });
//     };

//     return (
//         <>
//         <div class="login-container">
//         <div class="login-form">
//         <h2>Student Login</h2>
//         <div >
//             <label for="email">Email:</label>
//             <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div class="form-group">
//             <label for="pwd">Password:</label>
//             <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <div class="form-group">
//         <button onClick={handleLogin}>Login</button>
//         </div>
//         </div>
//     </div>
//         </>
//     );
// };

// export default StudentLogin;



