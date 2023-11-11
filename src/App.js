// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AuthorSignup from './Register/AuthorSignup';
import AuthorLogin from './Register/AuthorLogin';
import BookManagement from './component/BookManagement';
import Check from './component/check';

const App = () => {
  const [loggedInAuthor, setLoggedInAuthor] = useState(null);

  const handleLogin = (author) => {
    setLoggedInAuthor(author);
  };

  const handleLogout = () => {
    setLoggedInAuthor(null);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            {loggedInAuthor ? (
              <>
                <li><Link to="/books">My Books</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </>
            ) : (
              <>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/login">Login</Link></li>
              </>
            )}
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/signup" element={<AuthorSignup />} />
          <Route path="/login" element={<AuthorLogin onLogin={handleLogin} />} />
          {loggedInAuthor && (
            <Route path="/books" element={<BookManagement authorEmail={loggedInAuthor.email} />} />
          )}
          <Route path="/check" element={<Check/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;








// // App.jsx
// import React, { useState } from 'react';
// import AuthorSignupForm from '../src/Register/AuthorSignupForm';
// import AuthorLoginForm from '../src/Register/AuthorLoginForm';
// import BookList from './component/Booklist';
// import AddBookForm from '../src/component/AddBookFrom';
// import StudentSignupForm from './Register/StudentSignupForm';

// const App = () => {
//     const [loggedInAuthor, setLoggedInAuthor] = useState(null);

//     const handleLogin = (author) => {
//         setLoggedInAuthor(author);
//     };

//     const handleLogout = () => {
//         setLoggedInAuthor(null);
//     };

//     return (
//         <div>
//             <h1>Publication Management System</h1>
//             {!loggedInAuthor ? (
//                 <div>
//                     <h2>Signup</h2>
//                     <AuthorSignupForm />
//                     <StudentSignupForm/>
//                     <h2>Login</h2>
//                     <AuthorLoginForm onLogin={handleLogin} />
//                 </div>
//             ) : (
//                 <div>
//                     <p>Welcome, {loggedInAuthor.email}!</p>
//                     <button onClick={handleLogout}>Logout</button>
//                     <BookList authorEmail={loggedInAuthor.email} />
//                     <h2>Add a Book</h2>
//                     <AddBookForm authorEmail={loggedInAuthor.email} onBookAdded={() => window.location.reload()} />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default App;
