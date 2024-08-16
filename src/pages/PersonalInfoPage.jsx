import { useEffect, useState } from 'react';
import axios from 'axios';
import './PersonalInfoPage.css';

const PersonalInfoPage = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        currentPassword: '',
        newPassword: '',
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get('https://epic-event-backend.onrender.com/auth/user-info', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then(response => {
            setUser({
                ...user,
                username: response.data.username,
                email: response.data.email
            });
        })
        .catch(error => {
            console.error('There was an error fetching the user data!', error);
        });
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (window.confirm('Are you sure you want to save the changes?')) {
            setLoading(true);
            axios.post('https://epic-event-backend.onrender.com/auth/update-user-info', user, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            .then(response => {
                setLoading(false);
                alert('User info updated successfully');
                setUser({
                    ...user,
                    currentPassword: '',
                    newPassword: '',
                });
                setTimeout(() => {
                    window.history.back(); // Redirect back to the previous page
                }, 3000);
            })
            .catch(error => {
                setLoading(false);
                console.error('There was an error updating the user data!', error);
            });
        }
    };

    return (
        <div className='personalInfo'>
            <h4>Personal Information</h4>
            <div className="profile-section">
                <div className="profile-icon">
                    <img 
                        src='https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg' 
                        alt="Profile Icon" 
                        className="profile-image"
                    />
                </div>
                <div className="profile-details">
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
            </div>
            <div className="fields">
                {loading && <div className="loading">Saving...</div>}
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    
                    <input
                        type="text"
                        name="newUsername"
                        placeholder="New Username"
                        className="inputfield"
                        onChange={handleChange}
                    />
                   
                    <input
                        type="password"
                        name="currentPassword"
                        placeholder="Current Password"
                        className="inputfield"
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="newPassword"
                        placeholder="New Password"
                        className="inputfield"
                        onChange={handleChange}
                    />
                    <button type="submit" className="submit">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PersonalInfoPage;
