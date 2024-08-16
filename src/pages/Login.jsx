import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ((!username && !email) || !password) {
            setError('Please provide a username or email, and password.');
            return;
        }

        try {
            const response = await fetch('https://epic-event-backend.onrender.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                const { access_token } = data;

                // Store the token in local storage
                localStorage.setItem('access_token', access_token);

                setSuccessMessage('Login successful! Redirecting...');
                
                // Redirect to the events page after a short delay
                setTimeout(() => {
                    navigate('/events');
                }, 2000);
            } else if (response.status === 401) {
                setError('Invalid username, email, or password. Please try again.');
            } else if (response.status === 404) {
                setError('User not found. Please sign up first.');
            } else {
                const errorText = await response.text();
                setError(`An error occurred: ${errorText}`);
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f8f9fa'
        }}>
            <div style={{
                maxWidth: '400px',
                width: '100%',
                padding: '20px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                textAlign: 'center'
            }}>
                <h2 style={{ marginBottom: '20px', fontFamily: 'Arial, sans-serif', color: '#007bff' }}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '4px',
                                border: '1px solid #ced4da',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '4px',
                                border: '1px solid #ced4da',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '4px',
                                border: '1px solid #ced4da',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: 'none',
                            borderRadius: '4px',
                            background: 'linear-gradient(to right, #4CAF50, #00BFFF)',
                            color: 'white',
                            fontSize: '16px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s, transform 0.3s',
                            transform: 'scale(1)',
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Login
                    </button>
                    {error && <div style={{ marginTop: '15px', color: 'red' }}>{error}</div>}
                    {successMessage && <div style={{ marginTop: '15px', color: 'green' }}>{successMessage}</div>}
                    <div style={{ marginTop: '15px' }}>
                        Don't have an account? <a href="/signup" style={{ color: '#007bff' }}>Sign Up</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
