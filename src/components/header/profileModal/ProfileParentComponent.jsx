import React, { useEffect, useState } from "react";
import ProfileModal from "./ProfileModal";
import { Modal, Button, Form, Spinner } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { profile as profileAction } from "../../redux/slices/authSlice.js";

const ProfileParentComponent = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [currentEmail, setCurrentEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [error, setError] = useState("");
  const [profilePicture, setProfilePicture] = useState(
    "https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg"
  );

  const dispatch = useDispatch();
  const { profile, isLoading, error: profileError } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(profileAction())
  }, [dispatch]);

  const handleCloseProfileModal = () => {
    setShowProfileModal(false);
  };

  const handleEditProfile = () => {
    setIsEditMode(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentEmail || !currentPassword) {
      setError("Please enter all fields");
      return;
    }
    updateProfile();
  };

  const handleCancelEdit = () => {
    setCurrentEmail(currentEmail);
    setCurrentPassword(currentPassword);
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
    console.log("Email:", currentEmail);
    console.log("Password:", currentPassword);
    console.log("Profile Picture:", profilePicture);
    setIsEditMode(false);
  };

  return (
    <>
      <ProfileModal
        show={showProfileModal}
        handleClose={handleCloseProfileModal}
        currentEmail={currentEmail}
        currentPassword={currentPassword}
        handleEditProfile={handleEditProfile}
        handleSubmit={handleSubmit}
        handleCancelEdit={handleCancelEdit}
        handleProfilePictureChange={handleProfilePictureChange}
        isEditMode={isEditMode}
        error={error}
        profilePicture={profilePicture}
        setEmail={setCurrentEmail}
        setPassword={setCurrentPassword}
        profile={profile}
        isLoading={isLoading}
      />
    </>
  );
};

export default ProfileParentComponent;
