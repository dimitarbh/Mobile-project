import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ProfileModal = ({ show, handleClose, currentEmail, currentPassword }) => {
  const defaultProfilePictureUrl =
    "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";
  const [profilePicture, setProfilePicture] = useState(
    defaultProfilePictureUrl
  );
  const [email, setEmail] = useState(currentEmail || "");
  const [password, setPassword] = useState(currentPassword || "");
  const [isEditMode, setIsEditMode] = useState(false);
  const [error, setError] = useState("");

  const handleEditProfile = () => {
    setIsEditMode(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter all fields");
      return;
    }
    updateProfile();
  };

  const handleCancelEdit = () => {
    setEmail(currentEmail);
    setPassword(currentPassword);
    setIsEditMode(false);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const updateProfile = () => {
    console.log("Updating profile...");
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Profile Picture:", profilePicture);
    setIsEditMode(false);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Update Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <div className="text-center mb-3">
            <img
              src={profilePicture}
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
              value={isEditMode ? email : currentEmail}
              onChange={(e) => setEmail(e.target.value)}
              readOnly={!isEditMode}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={isEditMode ? password : currentPassword}
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
      </Modal.Body>
    </Modal>
  );
};

export default ProfileModal;
