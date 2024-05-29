import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import LoginComponent from './logIn/LoginComponent';
import RegisterComponent from './register/RegisterParentComponent';
import ProfileModal from './profileModal/ProfileModal';
import Navigation from "../navigation/navigation.jsx";
import { Route, Routes, useNavigate } from "react-router-dom";

const Header = ({ onSignOut }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleShowProfileModal = () => {
    setShowProfileModal(true);
  }

  const handleCloseProfileModal = () => {
    setShowProfileModal(false);
  }

  const handleSignOut = () => {
    onSignOut();
    localStorage.removeItem('token');
    setShowProfileModal(false);
    setIsLoggedIn(false);
    navigate('/login'); 
  };

  const handleLoginSuccess = () => {
    setShowProfileModal(false);
    setIsLoggedIn(true);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Smartphone Arena</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />  
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Routes>
                <Route path="/" element={<Navigation />} />
                <Route path="/news" element={<Navigation />} />
                <Route path="/reviews" element={<Navigation />} />
                <Route path="/deals" element={<Navigation />} />
                <Route path="/contact" element={<Navigation />} />
              </Routes>
            </Nav>
            <Nav>
              {isLoggedIn ? (
                <>
                  <Nav.Link onClick={handleShowProfileModal}>Profile</Nav.Link>
                  <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
                </>
              ) : (
                <>
                  <div style={{ marginRight: '10px' }}>
                    <LoginComponent onSuccess={handleLoginSuccess} />
                  </div>
                  <RegisterComponent />
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ProfileModal show={showProfileModal} handleClose={handleCloseProfileModal} />
    </>
  );
}

export default Header;
