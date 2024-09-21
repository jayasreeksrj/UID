// ProfileHeader.js
import React from 'react';
import { Avatar, Typography, Box } from '@mui/material';

const ProfileHeader = () => {
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center"
      style={{ backgroundImage: `url('https://example.com/background.jpg')`, padding: '50px 0' }}
    >
      <Avatar
        alt="Jayasree Sivakumar"
        src="https://example.com/profile.jpg"
        sx={{ width: 150, height: 150, marginBottom: 2 }}
      />
      <Typography variant="h4" fontWeight="bold">Jayasree Sivakumar</Typography>
      <Typography variant="subtitle1">Aspiring Full Stack Developer</Typography>
    </Box>
  );
};

export default ProfileHeader;
