import React from "react";
import "../styles/Header.scss";
import { Link } from "gatsby";

function Header() {
    return(
        <div className="Header">
            <Link to="/App/" className="Header__Home">Javi Sanchez Planelles</Link>
            <ul className="Header__List">
                <Link to="/About/">About</Link>
                <Link to="/Contact/">Get in touch</ Link>
            </ul>
        </div>
    )
}

export default Header;