import React from 'react';
import Layout from '../components/Layout';
import Chart from '../components/Chart';
import { Typography, Paper } from '@mui/material';

const Dashboard = () => {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Chart />
      </Paper>
    </Layout>
  );
};

export default Dashboard;
