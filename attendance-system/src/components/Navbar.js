import React from 'react';
import keyin_logo from '../../src/images/Keyin_logo.png';

function Navbar({ children }) {
  return (
    <nav className='navbar'>
      {children}
      <hr />
      <img src={keyin_logo} alt='keyin logo' />
    </nav>
  );
}

export default Navbar;

// background: #00B388;
