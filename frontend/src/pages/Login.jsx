import React from 'react';
import { useForm } from 'react-hook-form';
/* Link is required to navigate between pages */
import { useNavigate, Link } from 'react-router-dom'; 
import { login } from '../api/authApi';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await login(data.username, data.password);
            localStorage.setItem('token', response.token);
            toast.success('Login successful!');
            setTimeout(() => navigate('/tasks'), 1500);
        } catch (err) {
            toast.error('Invalid username or password.');
        }
    };

    return (
        <div className="page-container">
            <Toaster position="top-center" reverseOrder={false} />
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    {...register("username", { required: true })} 
                    placeholder="Username" 
                    disabled={isSubmitting}
                />
                <input 
                    type="password" 
                    {...register("password", { required: true })} 
                    placeholder="Password" 
                    disabled={isSubmitting}
                />
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Logging in...' : 'Login'}
                </button>
            </form>

            {/* The link to the register page */}
            <p style={{ marginTop: '20px', textAlign: 'center' }}>
                Don't have an account? <Link to="/register" style={{ color: '#007bff', fontWeight: 'bold' }}>Register here</Link>
            </p>
        </div>
    );
};

export default Login;