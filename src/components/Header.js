import React from "react";
import "../styles/Header.scss";
import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { Link } from "gatsby";

const toggleNav = () => {
    const navList = document.getElementById("js-navList");
    navList.classList.toggle("is-shown");
}

function Header() {
    return(
        <div className="Header" id="js-navList">
            <Link to="/Home/" className="Header__Home" aria-label="Home">Javi Sanchez Planelles</Link>
            <div className="Header__Mobile" onClick={toggleNav}>
                <button className="Header__Mobile__Burger" aria-label="Open menu">
                    <FaBars />
                </button>
                <button className="Header__Mobile__Close" aria-label="Close menu">
                    <IoIosClose />
                </button>
            </div>
            <ul className="Header__List">
                <Link to="/About/">About</Link>
                <Link to="/Contact/">Get in touch</Link>
            </ul>
        </div>
    )
}

export default Header;