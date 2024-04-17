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

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      setError('Passwords do not match');
    } else {
      setError('');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError('Password must contain at least one uppercase letter');
      return;
    }
    if (!/\d/.test(password)) {
      setError('Password must contain at least one digit');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    dispatch(registerAction({ email, password }));
    navigate('/');
  };

  return (
    <>
      <RegisterModal
        show={showRegisterModal}
        handleClose={handleCloseRegisterModal}
        handleSubmit={handleRegister}
        setEmail={setEmail}
        setPassword={setPassword}
        setConfirmPassword={handleConfirmPasswordChange}
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
