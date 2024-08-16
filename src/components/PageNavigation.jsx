import React from 'react';
import { Navbar, Container, Nav, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function PageNavigation() {
  const navigate = useNavigate();
  const token = localStorage.getItem('access_token'); // Check if token is present

  const handleRedirect = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token'); // Remove token from local storage
    navigate('/login');
  };

  return (
    <div className="Page-Navigation">
      <Navbar bg="myBlueBackground" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            {/* Conditionally render links based on authentication status */}
            {!token ? (
              <Nav.Link href="/about-us">About Us</Nav.Link>
            ) : (
              <>
                <Nav.Link href="/events">Events</Nav.Link>
              </>
            )}
          </Nav>

          <DropdownButton
            as={ButtonGroup}
            id="profile-dropdown"
            variant="outline-warning"
            title={<i className="bi bi-person-circle"></i>}
          >
            {token ? (
              <>
                <Dropdown.Item onClick={() => handleRedirect('/PersonalInfoPage')}>Personal Info</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </>
            ) : (
              <>
                <Dropdown.Item onClick={() => handleRedirect('/login')}>Login</Dropdown.Item>
                <Dropdown.Item onClick={() => handleRedirect('/signup')}>Sign Up</Dropdown.Item>
              </>
            )}
          </DropdownButton>
        </Container>
      </Navbar>
    </div>
  );
}

export default PageNavigation;
