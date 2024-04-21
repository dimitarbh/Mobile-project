import React, { useCallback, useState, useEffect } from 'react';
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
    if(isLoggedIn === null) {
      const token = localStorage.getItem('token');
      if(token) {
        setIsLoggedIn(true)
      }
    }
  }, [isLoggedIn]);

  const handleShowProfileModal = () => {
    setShowProfileModal(true);
    console.log("Show Profile Modal");
  }

  const handleCloseProfileModal = () => {
    setShowProfileModal(false);
    console.log("Close Profile Modal");
  }

  const handleSignOut = () => {
    onSignOut();
    localStorage.removeItem('token');
    setShowProfileModal(false);
    setIsLoggedIn(false);
    navigate('/'); 
    console.log("Sign Out");
  };

  console.log("Is Logged In:", isLoggedIn);

  const handleLoginSuccess = useCallback(() => {
    setShowProfileModal(false);
    setIsLoggedIn(true);
    console.log("Logged in successfully")
  },[]);



  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Smartphone Arena</Navbar.Brand>
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
