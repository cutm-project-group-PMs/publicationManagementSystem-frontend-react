// AuthorSignup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './a_signup.css'; // Import the CSS file

const AuthorSignup = () => {
  const [author, setAuthor] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSignup = () => {
    axios.post('http://localhost:8043/api/authors/signup', author)
      .then(response => {
        console.log('Author signed up:', response.data);
        navigate('/login');
      })
      .catch(error => alert("User already exists with this email: " + error));
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Author Signup</h2>
        <label>First Name:</label>
        <input type="text" value={author.firstName} onChange={(e) => setAuthor({ ...author, firstName: e.target.value })} />
        <br />
        <label>Last Name:</label>
        <input type="text" value={author.lastName} onChange={(e) => setAuthor({ ...author, lastName: e.target.value })} />
        <br />
        <label>Email:</label>
        <input type="text" value={author.email} onChange={(e) => setAuthor({ ...author, email: e.target.value })} />
        <br />
        <label>Password:</label>
        <input type="password" value={author.password} onChange={(e) => setAuthor({ ...author, password: e.target.value })} />
        <br />
        <button onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
};

export default AuthorSignup;











// // AuthorSignup.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './a_signup.css';

// const AuthorSignup = () => {
//   const [author, setAuthor] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//   });
//   const navigate = useNavigate();

//   const handleSignup = () => {
//     axios.post('http://localhost:8043/api/authors/signup', author)
//       .then(response => {
//         console.log('Author signed up:', response.data);
//         // Redirect to login after signup
//         //history.push('/login');
//         navigate('/login');
//       })
//       .catch(error => alert("User already exist on this email : "+ error));
//       //console.error('Error signing up:', error)
//      // navigate('/check');   
//   };

//   return (
//     <div className="signup-container">
//     <div className="signup-form">
//       <h2>Author Signup</h2>
//       <label>First Name:</label>
//       <input type="text" value={author.firstName} onChange={(e) => setAuthor({ ...author, firstName: e.target.value })} />
//       <br />
//       <label>Last Name:</label>
//       <input type="text" value={author.lastName} onChange={(e) => setAuthor({ ...author, lastName: e.target.value })} />
//       <br />
//       <label>Email:</label>
//       <input type="text" value={author.email} onChange={(e) => setAuthor({ ...author, email: e.target.value })} />
//       <br />
//       <label>Password:</label>
//       <input type="password" value={author.password} onChange={(e) => setAuthor({ ...author, password: e.target.value })} />
//       <br />
//       <button onClick={handleSignup}>Signup</button>
//     </div>
//     </div>
//   );
// };

// export default AuthorSignup;
