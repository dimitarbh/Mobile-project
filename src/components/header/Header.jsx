import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import LoginComponent from './logIn/LoginComponent';
import RegisterComponent from './register/RegisterParentComponent'; // Import the RegisterComponent
import ProfileModal from './profileModal/ProfileModal';

const Header = ({ isLoggedIn, onSignOut }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false); // Add state for register modal
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleShowRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };

  const handleShowProfileModal = () => {
    setShowProfileModal(true);
  }

  const handleCloseProfileModal = () => {
    setShowProfileModal(false);
  }

  const handleSignOut = () => {
    onSignOut();
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Smartphone Arena</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />  
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#news">News</Nav.Link>
              <Nav.Link href="#reviews">Reviews</Nav.Link>
              <Nav.Link href="#deals">Deals</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
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
                    <LoginComponent show={showLoginModal} handleClose={handleCloseLoginModal} />
                  </div>
                    <RegisterComponent show={showRegisterModal} handleClose={handleCloseRegisterModal} />
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
