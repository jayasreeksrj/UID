// Education.js
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const Education = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding="20px">
      <Typography variant="h5" gutterBottom>Education</Typography>
      <Card sx={{ maxWidth: 600, marginBottom: 2 }}>
        <CardContent>
          <Typography variant="h6">B.Tech in Information Technology (Pursuing)</Typography>
          <Typography>Kongu Engineering College, Perundurai (Nov 2022 - Nov 2026)</Typography>
          <img src="https://example.com/kongu-college.jpg" alt="Kongu Engineering College" width="100%" />
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <Typography variant="h6">SSLC & HSC</Typography>
          <Typography>K.V.M Hr. Sec. School, Chennimalai (Jun 2010 - May 2022)</Typography>
          <img src="https://example.com/kvm-school.jpg" alt="K.V.M Hr. Sec. School" width="100%" />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Education;
