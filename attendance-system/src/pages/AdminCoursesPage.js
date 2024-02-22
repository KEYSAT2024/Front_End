import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function AdminCoursesPage() {
  return (
    <>
      <TopBar />
      <Navbar className='navbar'>
        <Link to='/admin-dashboard' className='nav-link'>
          Admin Dashboard
        </Link>
        <Link to='/courses' className='nav-link'>
          Courses
        </Link>
        <Link to='#' className='nav-link'>
          Instructors <br /> & Students
        </Link>
      </Navbar>

      <div className='main-content'>
        <h2>Add / Remove Courses</h2>
      </div>
    </>
  );
}

export default AdminCoursesPage;
