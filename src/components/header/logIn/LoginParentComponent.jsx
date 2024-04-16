import React, { useState } from 'react';
import LoginModal from './LogInModal';

import { useDispatch, useSelector } from 'react-redux';
import { login as loginAction } from '../../redux/slices/authSlice.js';
import { useNavigate } from 'react-router-dom';

const LoginParentComponent = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error: authError } = useSelector(state => state.auth);

  const handleClose = () => {
    setShowLoginModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    dispatch(loginAction({ email, password }));
    navigate.push('/');

    try {
      const response = await fetch('smartphonearena-be-production.up.railway.app/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful');
        handleClose(); 
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login');
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <LoginModal
        show={showLoginModal}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
        email={email}
        password={password}
        error={error || authError} 
        isLoading={isLoading}
      />
    </>
  );
};

export default LoginParentComponent;
