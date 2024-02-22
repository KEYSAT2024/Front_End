import React from 'react';
import Navbar from '../components/Navbar';

function AdminDashboardPage() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='main-content'>
        <h2>Admin Dashboard</h2>
        <p>Welcome, Admin!</p>
      </div>
    </div>
  );
}

export default AdminDashboardPage;
