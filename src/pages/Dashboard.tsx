import React from 'react';
import PerformanceChart from '../components/charts/PerformanceChart';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-page">
      <h2>Employee Analytics Dashboard</h2>
      <p>Welcome to the employee analytics dashboard. Here you can view key metrics about employee performance, attendance, turnover, working hours, and engagement.</p>
      
      <div className="dashboard-grid">
        <div className="chart-container">
          <h3 className="chart-title">Performance Overview</h3>
          <PerformanceChart />
        </div>
        
        <div className="chart-container">
          <h3 className="chart-title">Attendance Summary</h3>
          <div className="placeholder-chart">
            Attendance chart will be added here
          </div>
        </div>
        
        <div className="chart-container">
          <h3 className="chart-title">Turnover Rates</h3>
          <div className="placeholder-chart">
            Turnover chart will be added here
          </div>
        </div>
        
        <div className="chart-container">
          <h3 className="chart-title">Working Hours</h3>
          <div className="placeholder-chart">
            Working hours chart will be added here
          </div>
        </div>
        
        <div className="chart-container">
          <h3 className="chart-title">Engagement Levels</h3>
          <div className="placeholder-chart">
            Engagement chart will be added here
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 