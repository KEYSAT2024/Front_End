import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TopBar from '../components/TopBar';

function AdminDashboardPage() {
  return (
    <div>
      <TopBar />
      <Navbar className='navbar'>
        <Link to='/admin-dashboard' className='nav-link'>
          Admin Dashboard
        </Link>
        <Link to='/courses' className='nav-link'>
          Courses
        </Link>
        {/* Need to make the admin Instructors & Students page for the Link below*/}
        <Link to='#' className='nav-link'>
          Instructors <br /> & Students
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
