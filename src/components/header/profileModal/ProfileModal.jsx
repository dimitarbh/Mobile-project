import React from "react";
import { Modal, Button, Form, Spinner } from "react-bootstrap";

const ProfileModal = ({
  show,
  handleClose,
  currentEmail,
  currentPassword,
  handleEditProfile,
  handleSubmit,
  handleCancelEdit,
  handleProfilePictureChange,
  isEditMode,
  error,
  profilePicture,
  setEmail,
  setPassword,
  profile,
  isLoading
}) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Update Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isLoading ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <>
            <Form onSubmit={handleSubmit}>
              <div className="text-center mb-3">
                <img
                  src={profilePicture || "https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg"}
                  alt="Profile"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <Form.Group controlId="formBasicProfilePicture">
                <Form.Label>Change Profile Picture</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={currentEmail}
                  onChange={(e) => setEmail(e.target.value)}
                  readOnly={!isEditMode}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={currentPassword}
                  onChange={(e) => setPassword(e.target.value)}
                  readOnly={!isEditMode}
                />
              </Form.Group>
              {error && <p style={{ color: "red" }}>{error}</p>}
              {isEditMode ? (
                <div className="d-flex justify-content-around align-items-center">
                  <Button variant="primary" type="submit">
                    Update Profile
                  </Button>
                  <Button variant="secondary" onClick={handleCancelEdit}>
                    Cancel
                  </Button>
                </div>
              ) : (
                <div className="text-center">
                  <Button variant="primary" onClick={handleEditProfile}>
                    Edit Profile
                  </Button>
                </div>
              )}
            </Form>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ProfileModal;
