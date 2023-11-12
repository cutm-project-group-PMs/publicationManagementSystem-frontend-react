import React from 'react'
import AuthorLogin from './AuthorLogin'
import StudentLogin from './StudentLogin'

const Logini = () => {
  return (
    
  <div className="signup-container">
    {/* <div className="signup-form">
    <AuthorLogin />
    </div> */}
    <div className="signup-form">
    <StudentLogin/>
    </div>
  </div>
  )
}

export default Logini
