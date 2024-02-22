import React from 'react';
import keyin_logo from '../../src/images/Keyin_logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/admin-dashboard' className='nav-link'>
        Admin Dashboard
      </Link>
      <Link to='/courses' className='nav-link'>
        Courses
      </Link>
      <hr />
      <img src={keyin_logo} alt='keyin logo' />
    </nav>
  );
}

export default Navbar;

// background: #00B388;
