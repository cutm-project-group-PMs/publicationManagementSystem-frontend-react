import React from 'react'
import AuthorSignup from './AuthorSignup'
import StudentSignup from './StudentSignup';
import './signup.css';
const Signup = () => {
  return (
    <div className="signup-container">
    <div className="signup-form">
      <AuthorSignup />
    </div>
    <div className="signup-form">
      <StudentSignup />
    </div>
  </div>
  )
}

export default Signup
