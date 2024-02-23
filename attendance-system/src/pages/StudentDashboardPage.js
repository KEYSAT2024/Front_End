import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { BsPencilSquare } from "react-icons/bs";

function StudentDashboardPage() {
  return (
    <div>
      <Header></Header>
      <Navbar>
        <Link to='/student-dashboard' className='nav-link'>
          <BsPencilSquare /> Attendance
        </Link>
      </Navbar>
    </div>
  );
}

export default StudentDashboardPage;
