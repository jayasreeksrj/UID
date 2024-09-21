// PersonalDetails.js
import React from 'react';
import { Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const PersonalDetails = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h5" gutterBottom>Personal Details</Typography>
      <List>
        <ListItem>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="81, M.P.N Nagar, Chennimalai - 638051" />
        </ListItem>
        <ListItem>
          <ListItemIcon><EmailIcon /></ListItemIcon>
          <ListItemText primary="jayasreeks.22it@kongu.edu" />
        </ListItem>
        <ListItem>
          <ListItemIcon><PhoneIcon /></ListItemIcon>
          <ListItemText primary="9677517347" />
        </ListItem>
        <ListItem>
          <ListItemIcon><LinkedInIcon /></ListItemIcon>
          <ListItemText primary="LinkedIn: Jayasree Sivakumar" />
        </ListItem>
      </List>
    </div>
  );
};

export default PersonalDetails;
