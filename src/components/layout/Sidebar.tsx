import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/performance" className={({ isActive }) => isActive ? 'active' : ''}>
              Performance
            </NavLink>
          </li>
          <li>
            <NavLink to="/attendance" className={({ isActive }) => isActive ? 'active' : ''}>
              Attendance
            </NavLink>
          </li>
          <li>
            <NavLink to="/turnover" className={({ isActive }) => isActive ? 'active' : ''}>
              Turnover
            </NavLink>
          </li>
          <li>
            <NavLink to="/working-hours" className={({ isActive }) => isActive ? 'active' : ''}>
              Working Hours
            </NavLink>
          </li>
          <li>
            <NavLink to="/engagement" className={({ isActive }) => isActive ? 'active' : ''}>
              Engagement
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; 