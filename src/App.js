// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AuthorSignup from './Register/AuthorSignup';
import AuthorLogin from './Register/AuthorLogin';
import BookManagement from './component/BookManagement';
import Check from './component/check';
import Home from './header/Home';
import About from './header/About';
import './Appcss.css';

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
            <li><Link to="/about">About</Link></li>
            {loggedInAuthor ? (
              <>
                <li><Link to="/bookm">My Books</Link></li>
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
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/signup" element={<AuthorSignup />} />
          <Route path="/login" element={<AuthorLogin onLogin={handleLogin} />} />
          {loggedInAuthor && (
            <Route path="/bookm" element={<BookManagement authorEmail={loggedInAuthor.email} />} />
          )}
          <Route path="/check" element={<Check/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;







