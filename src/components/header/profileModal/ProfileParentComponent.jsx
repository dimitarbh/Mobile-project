import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileModal from './ProfileModal'; 
import { profile as profileAction } from '../../redux/slices/authSlice.js';

const ProfileParentComponent = () => {
  const [showProfileModal, setShowProfileModal] = useState(true);
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const { profile, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("Fetching profile...");
    dispatch(profileAction());
  }, [dispatch]);

  return (
    <>
      {profile && (  
        <ProfileModal
          show={showProfileModal}
          handleClose={() => setShowProfileModal(false)}
          isLoading={isLoading}
          profile={profile}
          error={error}
        />
      )}
    </>
  );
};

export default ProfileParentComponent;
