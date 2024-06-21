import React from "react";
import { Link } from "react-router-dom";

import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="LeftSide">
                <img className="header-image" src="Assets/Images/HemeraLogo.png" alt="Description" />
            </div>
            <div className="RightSide">
                <Link to="/" className="link-button">Pocetna</Link>
                <Link to="/o-nama" className="link-button">O Nama</Link>
                <Link to="/usluge" className="link-button">Usluge</Link>
                <Link to="/kontakt" className="link-button">Kontakt</Link>
            </div>
        </header>
    );
}

export default Header;