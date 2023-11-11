// StudentSignupForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const StudentSignupForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8099/api/students/signup', formData);

            if (response.data) {
                console.log('Signup successful:', response.data);
                // Clear form data
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    mobile: '',
                    password: '',
                });
                setMessage('Signup successful');
            }
        } catch (error) {
            console.error('Signup failed:', error);
            setMessage('Signup failed');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Student Signup</h2>
                <label>
                    First Name:
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Mobile:
                    <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </label>
                <button type="submit">Signup</button>
            </form>

            {message && <p style={{ color: 'green' }}>{message}</p>}
        </div>
    );
};

export default StudentSignupForm;
