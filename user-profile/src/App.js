// App.js
import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Profile from './components/Profile';
import './components/styles.css';
// Create a Material-UI theme for consistent styling
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Profile />
    </ThemeProvider>
  );
}

export default App;
