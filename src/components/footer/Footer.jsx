import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import FooterModal from './footerModal/Modal.jsx';
import './footer.css';

const Footer = () => {
    return (
        <Navbar bg='dark' variant='dark' expand='lg' fixed='bottom'>
            <Container>
                <FooterModal />
                <div className="social-icons-container">
                    <Navbar.Text className="follow-text">Follow us on:</Navbar.Text>
                    <Nav className="social-icons">
                        <Nav.Link href="#" className='social-icon'><FaFacebook /></Nav.Link>
                        <Nav.Link href="#" className='social-icon'><FaInstagram /></Nav.Link>
                        <Nav.Link href="#" className='social-icon'><FaLinkedin /></Nav.Link>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    );
}

export default Footer;