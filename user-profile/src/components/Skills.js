import React from 'react';
import { Typography, Grid, Card, CardContent, Box, LinearProgress } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web'; // For Web Development

const skills = [
  { name: 'DBMS', icon: <StorageIcon />, level: 80 },
  { name: 'Python', icon: <CodeIcon />, level: 90 },
  { name: 'Java', icon: <CodeIcon />, level: 70 },
  { name: 'C', icon: <CodeIcon />, level: 85 },
  { name: 'C++', icon: <CodeIcon />, level: 65 },
  { name: 'Web Development', icon: <WebIcon />, level: 75 },
];

const SkillCard = ({ skill }) => (
  <Card 
    sx={{
      height: 200,
      maxWidth: 300,
      position: 'relative',
      overflow: 'hidden',
      boxShadow: 3,
      '&:hover': {
        transform: 'scale(1.05)',
        transition: 'all 0.3s ease-in-out',
      },
      padding: 2,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      background: 'linear-gradient(to right, #f5f7fa, #c3cfe2)',
    }}
    aria-label={`Skill: ${skill.name}, Proficiency Level: ${skill.level}%`}
  >
    <CardContent>
      <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
        {skill.icon}
        <Typography variant="h6" ml={1}>{skill.name}</Typography>
      </Box>
      <Typography variant="body2" color="text.secondary" textAlign="center">
        Proficiency: {skill.level}%
      </Typography>
      <LinearProgress 
        variant="determinate" 
        value={skill.level} 
        sx={{ height: 8, borderRadius: 5, mt: 1 }} 
      />
    </CardContent>
  </Card>
);

const Skills = () => (
  <Box padding="20px">
    <Typography variant="h5" gutterBottom align="center">
      Skills
    </Typography>
    <Grid container spacing={3} justifyContent="center">
      {skills.map(skill => (
        <Grid item key={skill.name} xs={12} sm={6} md={4} lg={3}>
          <SkillCard skill={skill} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Skills;
