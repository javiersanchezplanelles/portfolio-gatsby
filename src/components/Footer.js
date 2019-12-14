import React from 'react';
import '../styles/Footer.scss';
import { FaLinkedin } from 'react-icons/fa';
import { FaCodepen } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="Footer">
            <p>{year} &copy; Coded by Javi SP</p>
            <ul className="Footer">
                <li><a href="https://www.linkedin.com/in/javisanchezplanelles"><FaLinkedin /></a></li>
                <li><a href="https://codepen.io/javisp91"><FaCodepen /></a></li>
                <li><a href="https://github.com/javisp91"><FaGithub /></a></li> 
            </ul>
        </div>
    )
}

export default Footer;