// Profile.js
import React from 'react';
import { Container } from '@mui/material';
import ProfileHeader from './ProfileHeader';
import PersonalDetails from './PersonalDetails';
import Education from './Education';
import Skills from './Skills';
import Achievements from './Achievements';
import Internships from './Internships';

const Profile = () => {
  return (
    <Container maxWidth="lg" style={{ padding: '20px' }}>
      <ProfileHeader />
      <PersonalDetails />
      <Education />
      <Skills />
      <Internships />
      <Achievements />
    </Container>
  );
};

export default Profile;
