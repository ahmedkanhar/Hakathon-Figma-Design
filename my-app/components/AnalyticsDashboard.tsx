"use client"
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(
  CategoryScale, // For X-Axis
  LinearScale,   // For Y-Axis
  PointElement,  // For Points in Line Chart
  LineElement,   // For Line Charts
  BarElement,    // For Bar Charts
  Title,         // For Title
  Tooltip,       // For Tooltip
  Legend         // For Legend
);

const AnalyticsDashboard = () => {
  // Placeholder data for KPIs
  const [sales, setSales] = useState(12500);
  const [userTraffic, setUserTraffic] = useState(3500);
  const [popularProducts, setPopularProducts] = useState(['Product A', 'Product B', 'Product C']);

  // Placeholder chart data for Sales Trend
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales Over Time',
        data: [5000, 7000, 8000, 6000, 9500, 12000],
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  // Placeholder chart data for User Traffic
  const trafficData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'User Traffic Over Time',
        data: [1000, 1500, 1800, 1300, 2000, 2500],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Placeholder chart data for Popular Products (Bar Chart)
  const popularProductsData = {
    labels: popularProducts,
    datasets: [
      {
        label: 'Product Popularity',
        data: [40, 35, 25],
        backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(75, 192, 192, 0.6)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sales KPI */}
        <div className="p-4 bg-white shadow rounded-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Sales</h3>
          <p className="text-2xl font-bold text-gray-900">${sales}</p>
        </div>

        {/* User Traffic KPI */}
        <div className="p-4 bg-white shadow rounded-md">
          <h3 className="text-lg font-semibold text-gray-700">User Traffic</h3>
          <p className="text-2xl font-bold text-gray-900">{userTraffic} Visitors</p>
        </div>

        {/* Popular Products KPI */}
        <div className="p-4 bg-white shadow rounded-md">
          <h3 className="text-lg font-semibold text-gray-700">Popular Products</h3>
          <ul className="list-disc pl-5">
            {popularProducts.map((product, index) => (
              <li key={index} className="text-gray-800">{product}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Charts Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-700">Analytics Overview</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sales Trend Line Chart */}
          <div className="p-4 bg-white shadow rounded-md">
            <h4 className="text-lg font-semibold text-gray-700">Sales Trend</h4>
            <Line data={salesData} />
          </div>

          {/* User Traffic Line Chart */}
          <div className="p-4 bg-white shadow rounded-md">
            <h4 className="text-lg font-semibold text-gray-700">User Traffic Trend</h4>
            <Line data={trafficData} />
          </div>

          {/* Popular Products Bar Chart */}
          <div className="p-4 bg-white shadow rounded-md col-span-2">
            <h4 className="text-lg font-semibold text-gray-700">Popular Products</h4>
            <Bar data={popularProductsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
