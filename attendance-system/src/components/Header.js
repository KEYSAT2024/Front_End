import React from "react";
import KEYSAT_Transparent from "../images/KEYSAT_red_transparent_temp.png";
import { useAuth } from "../auth/auth";

function Header() {
  const auth = useAuth();
  const handleLogout = (event) => {
    auth.logout();
  };
  return (
    <header className="header">
      <img src={KEYSAT_Transparent} alt="KEYSAT" className="header-logo" />
      <button onClick={handleLogout} className="sign-out">
        Sign Out
      </button>
    </header>
  );
}

export default Header;
