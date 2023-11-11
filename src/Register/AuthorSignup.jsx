// AuthorSignup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
        // Redirect to login after signup
        //history.push('/login');
        navigate('/ckeck');
      })
      .catch(error => alert('Error signing up:'+error));
      //console.error('Error signing up:', error)
  };

  return (
    <div>
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
  );
};

export default AuthorSignup;

// // AuthorSignupForm.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const AuthorSignupForm = () => {
//     const [author, setAuthor] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//     });     

//     const handleChange = (e) => {
//         setAuthor({
//             ...author,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8099/api/authors/signup', author);
//             console.log(response.data);
//             alert("register hela")
//             // Handle successful signup
//         } catch (error) {
//             console.error('Error signing up:', error);
//             // Handle signup error
//             alert("register hela nahi ho " + error)

//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 First Name:
//                 <input type="text" name="firstName" value={author.firstName} onChange={handleChange} />
//             </label>
//             <br />
//             <label>
//                 Last Name:
//                 <input type="text" name="lastName" value={author.lastName} onChange={handleChange} />
//             </label>
//             <br />
//             <label>
//                 Email:
//                 <input type="email" name="email" value={author.email} onChange={handleChange} />
//             </label>
//             <br />
//             <label>
//                 Password:
//                 <input type="password" name="password" value={author.password} onChange={handleChange} />
//             </label>
//             <br />
//             <button type="submit">Signup</button>
//         </form>
//     );
// };

// export default AuthorSignupForm;
