import React, { useState } from 'react';
import RegisterModal from './RegisterModal.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { register as registerAction } from '../../redux/slices/authSlice.js';
import { useNavigate } from 'react-router-dom';
import { handleCloseRegisterModal, handleConfirmPasswordChange, handleRegister } from './registerHandlers.js';

const RegisterParentComponent = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error: authError } = useSelector(state => state.auth);

  return (
    <>
      <RegisterModal
        show={showRegisterModal}
        handleClose={() => handleCloseRegisterModal(setShowRegisterModal)}
        handleSubmit={(e) => handleRegister(e, email, password, confirmPassword, setError, dispatch, navigate, registerAction)}
        setEmail={setEmail}
        setPassword={setPassword}
        setConfirmPassword={(e) => handleConfirmPasswordChange(e, setPassword, setConfirmPassword, setError, password)}
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
