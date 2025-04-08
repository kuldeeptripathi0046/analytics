import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import our layout components
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/performance" element={<div>Performance Analytics coming soon</div>} />
              <Route path="/attendance" element={<div>Attendance Analytics coming soon</div>} />
              <Route path="/turnover" element={<div>Turnover Analysis coming soon</div>} />
              <Route path="/working-hours" element={<div>Working Hours Analytics coming soon</div>} />
              <Route path="/engagement" element={<div>Engagement Analytics coming soon</div>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
