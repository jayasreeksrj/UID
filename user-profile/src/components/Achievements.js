// Achievements.js
import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Achievements = () => {
  const githubLink = "https://github.com/jayasreeksrj/"; // Replace with your GitHub link
  
  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding="20px">
      <Typography variant="h5" gutterBottom>Achievements</Typography>
      
      <Card sx={{ maxWidth: 600, height: 250, marginBottom: 2 }}>
        <CardContent>
          <Typography variant="h6">Presented a paper on Shadow Guard</Typography>
          <Typography>Madras Institute of Technology, Chennai</Typography>
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<GitHubIcon />} 
            href={githubLink} 
            target="_blank"
            sx={{ marginTop: 2 }}
          >
            View on GitHub
          </Button>
        </CardContent>
      </Card>
      
      <Card sx={{ maxWidth: 600, height: 250 }}>
        <CardContent>
          <Typography variant="h6">Presented a paper on Virtual Reality in Construction</Typography>
          <Typography>Kongu Engineering College, secured 2nd prize</Typography>
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<GitHubIcon />} 
            href={githubLink} 
            target="_blank"
            sx={{ marginTop: 2 }}
          >
            View on GitHub
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Achievements;
