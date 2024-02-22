import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function AdminDashboardPage() {
  return (
    <div>
      <Navbar>
        <Link to='/admin-dashboard' className='nav-link'>
          Admin Dashboard
        </Link>
        <Link to='/courses' className='nav-link'>
          Courses
        </Link>
      </Navbar>
      <div className='main-content'>
        <h2>Admin Dashboard</h2>
        <p>Welcome, Admin!</p>
      </div>
    </div>
  );
}

export default AdminDashboardPage;
