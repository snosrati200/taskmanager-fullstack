import React, { useState } from 'react';
import { register } from '../api/authApi';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');

        // Validation based on our README rules
        if (username.length < 3 || username.length > 100) {
            setError('Username must be between 3 and 100 characters.');
            return;
        }

        try {
            // This calls your authApi.js
            await register(username, password);
            alert('Registration successful!');
            navigate('/login');
        } catch (err) {
            // Capture backend error or generic message
            setError(err.response?.data?.message || 'Registration failed.');
        }
    };

    return (
        <div className="page-container">
            <form onSubmit={handleRegister}>
                <h2>Register</h2>
                
                {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>

            <div className="register-link" style={{ textAlign: 'center', marginTop: '15px' }}>
                <p> Already have an account? 
                    <button
                        type="button"
                        onClick={() => navigate('/login')}
                        style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
                    >
                        Login here
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Register;