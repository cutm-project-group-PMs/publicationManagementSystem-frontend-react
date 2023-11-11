// StudentLoginForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const StudentLoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
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
            const response = await axios.post('http://localhost:8099/api/students/login', formData, {
                withCredentials: true, // Ensure credentials (cookies) are sent with the request
            });

            if (response.data) {
                console.log('Login successful:', response.data);
                // Redirect or perform other actions on successful login
                setMessage('Login successful');
            }
        } catch (error) {
            console.error('Login failed:', error);
            setMessage('Login failed');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Student Login</h2>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </label>
                <button type="submit">Login</button>
            </form>

            {message && <p style={{ color: 'green' }}>{message}</p>}
        </div>
    );
};

export default StudentLoginForm;
