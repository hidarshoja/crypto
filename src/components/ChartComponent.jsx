// Import React and necessary libraries
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

// Define the data for the chart
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // x-axis labels
  datasets: [
    {
      label: '', // Remove dataset label
      data: [65, 59, 80, 81, 56, 55, 90], // data points
      fill: false,
      borderColor: 'rgb(75, 192, 192)', // line color
      tension: 0.1, // smoothness of the line
      pointRadius: 0, // Hide data points
    },
  ],
};

// Define options for the chart
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Hide legend
    },
    tooltip: {
      enabled: false, // Disable tooltips
    },
  },
  elements: {
    line: {
      borderWidth: 2, // Set line width
    },
    point: {
      radius: 0, // Hide data points
    },
  },
  scales: {
    x: {
      display: false, // Hide x-axis
    },
    y: {
      display: false, // Hide y-axis
    },
  },
  layout: {
    padding: 0, // Remove padding
  },
  backgroundColor: 'transparent', // Set background color to transparent
};

// Create the LineChart component
const LineChart = () => {
  return (
    <div className='chartBoxHome'>
      <Line  data={data} options={options} />
    </div>
  );
};

export default LineChart;
