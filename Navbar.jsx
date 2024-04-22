import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const handleLogin = () => {
    if (isAuthenticated) {
      // If already authenticated, logout
      logout();
    } else {
      // If not authenticated, trigger Auth0 login
      loginWithRedirect();
    }
  };

  return (
    <BootstrapNavbar bg="primary" variant="dark" expand="md" fixed="top">
      <Container>
      <BootstrapNavbar.Brand as={Link} to="/">
        <img
          src="logo1.jpg" // Replace with the actual path to your logo image
          alt="Logo"
          style={{
            marginRight: '10px', // Adjust the margin as needed
            maxWidth: '50px',   // Set the maximum width as per your requirement
            height: '30px'      // Maintain aspect ratio
          }}
        />
        Annapurna
      </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavbarToggle} />
        <BootstrapNavbar.Collapse id="basic-navbar-nav" expanded={expanded.toString()}>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/Home" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>About</Nav.Link>
            <Nav.Link as={Link} to="/Donate" onClick={() => setExpanded(false)}>Donate</Nav.Link>
            <Nav.Link as={Link} to="/FoodDonors" onClick={() => setExpanded(false)}>Food Donors</Nav.Link>
            <Nav.Link as={Link} to="/Volunteers" onClick={() => setExpanded(false)}>Volunteers</Nav.Link>
            <Nav.Link as={Link} to="/Login" onClick={() => setExpanded(false)}>Login</Nav.Link>
            <Nav.Link as={Link} to="/Signup" onClick={() => setExpanded(false)}>Signup</Nav.Link>
            <Nav.Link onClick={handleLogin}>{isAuthenticated ? 'Logout' : 'Login'}</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
