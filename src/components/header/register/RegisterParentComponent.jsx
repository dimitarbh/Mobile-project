import React, { useState } from 'react';
import RegisterModal from './RegisterModal';

import { useDispatch, useSelector } from 'react-redux';
import { register as registerAction } from '../../redux/slices/authSlice.js';
import { useNavigate } from 'react-router-dom';


const RegisterParentComponent = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error: authError } = useSelector(state => state.auth);


  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    dispatch(registerAction({ email, password }));

    navigate.push('/');

    try {
      const response = await fetch('smartphonearena-be-production.up.railway.app/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Registration successful');
        handleCloseRegisterModal();
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('An error occurred during registration');
    }
  };

  return (
    <>
      <RegisterModal
        show={showRegisterModal}
        handleClose={handleCloseRegisterModal}
        handleSubmit={handleSubmit}
        setEmail={setEmail}
        setPassword={setPassword}
        setConfirmPassword={setConfirmPassword}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        error={error || authError} 
        isLoading={isLoading}
      />
    </>
  );
};

export default RegisterParentComponent;
