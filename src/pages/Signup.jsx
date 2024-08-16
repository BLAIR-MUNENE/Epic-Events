import './LoginsStyles.css';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('user'); // Default role is 'user'
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const userData = {
            username,
            email,
            password1: password, // Change field names to match the backend
            password2: confirmPassword, // Change field names to match the backend
            role
        };

        try {
            const response = await fetch('https://epic-event-backend.onrender.com/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                alert('Account created successfully!');
                navigate('/login'); // Redirect to login page
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message || 'An error occurred'}`);
            }
        } catch (error) {
            alert('Network error: ' + error.message);
        }
    };

    return (
        <div>
            <div className="form">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="name-fields">
                        <div className="input-span">
                            <label htmlFor="Username" className="label">Username</label>
                            <input
                                type="text"
                                id="Username"
                                name="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="input-span">
                        <label htmlFor="email" className="label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-span">
                        <label htmlFor="password" className="label">Create Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-span">
                        <label htmlFor="confirmPassword" className="label">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-span">
                        <label htmlFor="role" className="label">Role</label>
                        <select
                            id="role"
                            name="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button className="submit" type="submit">Create Account</button>
                    <div className="span">
                        Already have an account? <Link to="/login">Log in</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
