import React from 'react';
import RedLogo from '../images/KEYSAT_red.png';

function TopBar() {
  return (
    <div className='top-bar'>
      <img src={RedLogo} alt='keysat logo' />
      <button>Sign out</button>
    </div>
  );
}

export default TopBar;
