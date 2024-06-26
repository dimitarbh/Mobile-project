import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login as loginAction } from '../../redux/slices/authSlice.js'; 
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginComponent = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.auth);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submission attempted");
    if (!email || !password) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    dispatch(loginAction({ email, password }))
      .then((authToken) => {
        localStorage.setItem('token', authToken);
        // console.log('Token stored in localStorage:', authToken);
        setSuccessMessage('Logged in successfully');
        console.log('Logged in successfully');
        onSuccess(); 
        setTimeout(() => {
          navigate('/');
          handleClose();
        }, 2000);
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          setErrorMessage('Invalid email or password. Please try again.');
        } else {
          setErrorMessage('Login failed. Please try again.');
        }
      });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>Log in</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleFormSubmit}>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>} 
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" id="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" disabled={isLoading} onClick={handleFormSubmit}>Login</Button>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginComponent;
