export const handleCloseRegisterModal = (setShowRegisterModal) => {
  setShowRegisterModal(false);
};

export const handleConfirmPasswordChange = (
  e,
  setPassword,
  setConfirmPassword,
  setError,
  password
) => {
  const confirmPasswordValue = e.target.value;
  setConfirmPassword(confirmPasswordValue);
  if (password !== confirmPasswordValue) {
    setError("Passwords do not match");
  } else {
    setError("");
  }
};

export const handleRegister = async (
  e,
  email,
  password,
  confirmPassword,
  setError,
  dispatch,
  navigate,
  registerAction
) => {
  e.preventDefault();
  if (!email || !password || !confirmPassword) {
    setError("Please fill in all fields");
    return;
  }
  if (password !== confirmPassword) {
    setError("Passwords do not match");
    return;
  }

  if (password.length < 8) {
    setError("Password must be at least 8 characters long");
    return;
  }
  if (!/[A-Z]/.test(password)) {
    setError("Password must contain at least one uppercase letter");
    return;
  }
  if (!/\d/.test(password)) {
    setError("Password must contain at least one digit");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    setError("Please enter a valid email address");
    return;
  }

  dispatch(registerAction({ email, password }));
  navigate("/");
};
