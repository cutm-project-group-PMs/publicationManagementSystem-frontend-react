import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentSignup = () => {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSignup = () => {
    axios.post('http://localhost:8043/api/students/signup', student)
      .then(response => {
       alert("student added successfully");
       // redirect to another page(login page);
       navigate('/Studentlogin');
      })
      .catch(error => {
        console.error('Error signing up:', error);
        alert('Failed to signup. Check the console for details.'+ error);
      });
  };

  return (
    <div className="signup-container">
    <div className="signup-form">
      <h2>Student Signup</h2>
      <label>First Name:</label>
      <input type="text" value={student.firstName} onChange={(e) => setStudent({ ...student, firstName: e.target.value })} />
      <br />
      <label>Last Name:</label>
      <input type="text" value={student.lastName} onChange={(e) => setStudent({ ...student, lastName: e.target.value })} />
      <br />
      <label>Email:</label>
      <input type="text" value={student.email} onChange={(e) => setStudent({ ...student, email: e.target.value })} />
      <br />
      <label>Password:</label>
      <input type="password" value={student.password} onChange={(e) => setStudent({ ...student, password: e.target.value })} />
      <br />
      <button onClick={handleSignup}>Signup</button>
    </div>
    </div>
  );
};

export default StudentSignup;
