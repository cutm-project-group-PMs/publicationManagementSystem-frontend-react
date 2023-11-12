// App.js
import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import AuthorSignup from './Register/AuthorSignup';
import AuthorLogin from './Register/AuthorLogin';
import StudentSignup from './Register/StudentSignup';
import Signup from './Register/Signup';
import StudentLogin from './Register/StudentLogin';
import BookManagement from './component/BookManagement';
import Check from './component/check';
import Home from './header/Home';
import About from './header/About';
import './Appcss.css';
import AllBook from './component/AllBook';

const App = () => {
  const [loggedInAuthor, setLoggedInAuthor] = useState(null);
  const [loggedInStudent, setLoggedInStudent] = useState(null);
  const navigate = useNavigate();

  const handleAuthorLogin = (author) => {
    setLoggedInAuthor(author);
  };

  const handleAuthorLogout = () => {
    setLoggedInAuthor(null);
    // Redirect to home after logout
    navigate("/");
  };

  const handleStudentLogin = (student) => {
    setLoggedInStudent(student);
  };

  const handleStudentLogout = () => {
    setLoggedInStudent(null);
    // Redirect to home after logout
    navigate("/");
  };

  const isAuthorLoggedIn = loggedInAuthor !== null;
  const isStudentLoggedIn = loggedInStudent !== null;

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          {isAuthorLoggedIn && (
            <>
              <li><Link to="/bookm">My Books</Link></li>
              <li><button onClick={handleAuthorLogout}>Logout</button></li>
            </>
          )}
          {isStudentLoggedIn && (
            <>
              <li><Link to="/allBooks">All Books</Link></li>
              <li><button onClick={handleStudentLogout}>Logout</button></li>
            </>
          )}
          {!isAuthorLoggedIn && !isStudentLoggedIn && (
            <>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/Authorlogin">AuthorLogin</Link></li>
              <li><Link to="/Studentlogin">StudentLogin</Link></li>
            </>
          )}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Authorsignup" element={<AuthorSignup />} />
        <Route path="/Studentsignup" element={<StudentSignup />} />
        <Route path="/Studentlogin" element={<StudentLogin onLogin={handleStudentLogin} />} />
        <Route path="/allBooks" element={<AllBook />} />
        <Route path="/Authorlogin" element={<AuthorLogin onLogin={handleAuthorLogin} />} />
        {isAuthorLoggedIn && (
          <Route path="/bookm" element={<BookManagement authorEmail={loggedInAuthor.email} />} />
        )}
        <Route path="/check" element={<Check />} />
      </Routes>
    </div>
  );
};

export default App;














//=================================code is correct but for check purpose /* Ramaditya */
// // App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import AuthorSignup from './Register/AuthorSignup';
// import AuthorLogin from './Register/AuthorLogin';
// import StudentSignup from './Register/StudentSignup';
// import Signup from './Register/Signup';
// import StudentLogin from './Register/StudentLogin';
// import BookManagement from './component/BookManagement';
// import Check from './component/check';
// import Home from './header/Home';
// import About from './header/About';
// import './Appcss.css';
// import AllBook from './component/AllBook';




// const App = () => {

//   const [loggedInAuthor, setLoggedInAuthor] = useState(null);
//   const [loggedInStudent, setLoggedInStudent] = useState(null);
   

//   const handleAuthorLogin = (author) => {
//     setLoggedInAuthor(author);
//   };

//   const handleAuthorLogout = () => {
//     setLoggedInAuthor(null);
//   };

//   const handleStudentLogin = (student) => {
//     setLoggedInStudent(student);
//   };

//   const handleStudentLogout = () => {
//     setLoggedInStudent(null);
    
//   };

//   const isAuthorLoggedIn = loggedInAuthor !== null;
//   const isStudentLoggedIn = loggedInStudent !== null;

//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             {isAuthorLoggedIn && (
//               <>
//                 <li><Link to="/bookm">My Books</Link></li>
//                 <li><button onClick={handleAuthorLogout}>Logout</button></li>
//               </>
//             )}
//             {isStudentLoggedIn && (
//               <>
//                 <li><Link to="/allBooks">All Books</Link></li>
//                 <li><button onClick={handleStudentLogout}>Logout</button></li>
//               </>
//             )}
//             {!isAuthorLoggedIn && !isStudentLoggedIn && (
//               <>
//                 <li><Link to="/signup">Signup</Link></li>
//                 <li><Link to="/Authorlogin">AuthorLogin</Link></li>
//                 <li><Link to="/Studentlogin">StudentLogin</Link></li>
//               </>
//             )}
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/Authorsignup" element={<AuthorSignup />} />
//           <Route path="/Studentsignup" element={<StudentSignup />} />
//           <Route path="/Studentlogin" element={<StudentLogin onLogin={handleStudentLogin}/>} />
//           <Route path="/allBooks" element={<AllBook />} />
//           <Route path="/Authorlogin" element={<AuthorLogin onLogin={handleAuthorLogin} />} />
//           {isAuthorLoggedIn && (
//             <Route path="/bookm" element={<BookManagement authorEmail={loggedInAuthor.email} />} />
//           )}
//           <Route path="/check" element={<Check />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;




