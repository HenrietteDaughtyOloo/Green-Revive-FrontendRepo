'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import React from 'react';


ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Active Users', 'Inactive user'],
  datasets: [
    {
      label: 'Active Users, Inactive Users',
      data: [23,5],
      backgroundColor: [
        '#FF8228',
        '#40B93C',
      ],
      hoverOffset: 4,
    },
  ],
};

const PieChart = () => (
  <div style={{ maxWidth: '600px', margin: '0 auto' }}>
    <Pie data={data} />
  </div>
);

export default PieChart;