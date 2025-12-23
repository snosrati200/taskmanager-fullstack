import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { register } from '../api/authApi';
import toast, { Toaster } from 'react-hot-toast'; // Modern notifications

const Register = () => {
    // React Hook Form handles state and validation internally
    const { register: registerField, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            await register(data.username, data.password);
            
            // Using a toast library is more modern than manual success boxes
            toast.success('Registration successful! Redirecting...');
            
            setTimeout(() => navigate('/login'), 2000);
        } catch (err) {
            toast.error(err.response?.data?.message || 'Registration failed.');
        }
    };

    return (
        <div className="page-container">
            <Toaster position="top-center" />
            <h2>Register</h2>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input 
                        {...registerField("username", { 
                            required: "Username is required",
                            minLength: { value: 3, message: "Min 3 characters" }
                        })} 
                        placeholder="Username" 
                    />
                    {errors.username && <p className="error-text">{errors.username.message}</p>}
                </div>

                <div>
                    <input 
                        type="password" 
                        {...registerField("password", { required: "Password is required" })} 
                        placeholder="Password" 
                    />
                    {errors.password && <p className="error-text">{errors.password.message}</p>}
                </div>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Registering...' : 'Register'}
                </button>
            </form>
        </div>
    );
};

export default Register;