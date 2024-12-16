import React from 'react';
import { Stack, Box, Typography } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <Stack direction="column" sx={{ height: '100vh' }}>
      <Box sx={{ bgcolor: '#1976d2', p: 2, color: '#fff' }}>
        <Typography variant="h6">My Demo App</Typography>
      </Box>
      <Box sx={{ flex: 1, p: 2 }}>{children}</Box>
    </Stack>
  );
};

export default Layout;
