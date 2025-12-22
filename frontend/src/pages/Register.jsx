import React, { useState } from 'react';
import { register } from '../api/authApi';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    /* New state for success message */
    const [successMessage, setSuccessMessage] = useState(''); 
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        if (username.length < 3 || username.length > 100) {
            setError('Username must be between 3 and 100 characters.');
            return;
        }

        try {
            /* Call the registration API */
            await register(username, password);
            
            /* Show modern success message */
            setSuccessMessage('Registration successful! Redirecting to login...');
            
            /* Wait 2 seconds so the user can actually read the message */
            setTimeout(() => {
                navigate('/login');
            }, 2500);

        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed.');
        }
    };

    return (
        <div className="page-container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                {/* Modern Success Box */}
                {successMessage && (
                    <div style={{
                        padding: '12px',
                        backgroundColor: '#d4edda',
                        color: '#155724',
                        borderRadius: '4px',
                        marginBottom: '15px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        border: '1px solid #c3e6cb'
                    }}>
                        {successMessage}
                    </div>
                )}

                {/* Error Box */}
                {error && (
                    <div style={{
                        padding: '12px',
                        backgroundColor: '#f8d7da',
                        color: '#721c24',
                        borderRadius: '4px',
                        marginBottom: '15px',
                        border: '1px solid #f5c6cb'
                    }}>
                        {error}
                    </div>
                )}

                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;