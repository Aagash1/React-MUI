import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Dashboard from './pages/Dashboard';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
