import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: 'Jan', sales: 30 },
  { name: 'Feb', sales: 45 },
  { name: 'Mar', sales: 28 },
];

const Chart = () => (
  <BarChart width={500} height={300} data={data}>
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="sales" fill="#1976d2" />
  </BarChart>
);

export default Chart;
