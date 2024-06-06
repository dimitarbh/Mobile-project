import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Spinner } from 'react-bootstrap';

const ProfileModal = ({
  show,
  handleClose,
  isLoading,
  error,
  profile,
  defaultProfilePicture = "https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg"
}) => {
  const [profilePicture, setProfilePicture] = useState(defaultProfilePicture);

  useEffect(() => {
    const savedProfilePicture = localStorage.getItem('profilePicture');
    if (savedProfilePicture) {
      setProfilePicture(savedProfilePicture);
    }
  }, []);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('profilePicture', profilePicture);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isLoading ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <Form onSubmit={handleFormSubmit}>
            <div className="text-center mb-3">
              <img
                src={profilePicture}
                alt="Profile"
                style={{ width: '150px', height: '150px', borderRadius: '50%' }}
              />
            </div>
            <Form.Group controlId="formProfilePicture">
              <Form.Label>Change Profile Picture</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handleProfilePictureChange} />
            </Form.Group>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="d-flex justify-content-around align-items-center mt-3">
              <Button variant="primary" type="submit" onClick={handleClose}>
                Save Changes
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ProfileModal;
