import React from "react";
import KEYSAT_Transparent from "../images/KEYSAT_red_transparent_temp.png";

function Header() {
    return (
        <header className="header">
            <img src={KEYSAT_Transparent} alt="KEYSAT" />
            <button>Sign Out</button>
        </header>
    );
}

export default Header;