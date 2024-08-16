import React from 'react';
import "../Home.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function HomeBanner() {
  // Retrieve token and user name from localStorage
  const token = localStorage.getItem('access_token');
  const userName = localStorage.getItem('user_name'); // Assuming user_name is stored in localStorage

  return (
    <div>
      <div className="home-banner">
        <div>
          <h3>One Stop</h3>
        </div>
        <div>
          <p>
            <em>Event Planner</em>
          </p>
        </div>
        <div>
          <h2>Every Event Is Toptear</h2>
        </div>
        <div className="mb-2">
          {/* Conditionally render the "About Us" button only if the user is not authenticated */}
          {!token && (
            <Button
              variant="outline-info"
              size="lg"
              style={{ marginRight: "45vh" }}
            >
              <Link to="/about-us" style={{ textDecoration: 'none', color: 'inherit' }}>
                About Us
              </Link>
            </Button>
          )}
          {/* Conditionally render the "Get Started" button */}
          {!token && (
            <Button variant="outline-success" size="lg">
              <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
                Get Started
              </Link>
            </Button>
          )}
        </div>
        {/* Display welcome message if the user is authenticated */}
        {token && userName && (
          <div className="welcome-message">
            <h4>Welcome, {userName}!</h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeBanner;
