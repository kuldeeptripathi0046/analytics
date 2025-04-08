import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Employee Analytics</h1>
      </div>
      <div className="header-right">
        <div className="user-info">
          <span>Admin User</span>
        </div>
      </div>
    </header>
  );
};

export default Header; 