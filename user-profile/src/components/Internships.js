// Internships.js
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const Internships = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding="20px">
      <Typography variant="h5" gutterBottom>Internships</Typography>
      <Card sx={{ maxWidth: 600, height: 150, marginBottom: 2 }}> {/* Set uniform card height */}
        <CardContent>
          <Typography variant="h6">Android App Development</Typography>
          <Typography>Jul 2023 - Aug 2023</Typography>
          <Typography>Kongu Engineering College</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Internships;
