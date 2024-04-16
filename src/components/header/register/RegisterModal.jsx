import React from "react";
import { Modal, Button, Form, Spinner } from "react-bootstrap";

const RegisterModal = ({
  show,
  handleClose,
  handleSubmit,
  setEmail,
  setPassword,
  setConfirmPassword,
  email,
  password,
  confirmPassword,
  error,
  isLoading,
}) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div
            className="d-flex justify-content-around align-items-center"
            style={{ marginTop: "10px" }}
          >
            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? (
                <Spinner animation="border" size="sm" />
              ) : (
                "Register"
              )}
            </Button>
            <Button
              variant="secondary"
              onClick={handleClose}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Close"}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterModal;
