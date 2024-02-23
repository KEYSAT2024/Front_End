import React from "react";
import KEYSAT_Red from "../images/KEYSAT_red.png";

function Header() {
    return (
        <header className="header">
            <img src={KEYSAT_Red} alt="KEYSAT" />
            <button>Sign Out</button>
        </header>
    );
}

export default Header;