import React from "react";
import './Navbar.css';
import logo from '../assets/logo.png'

export function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/"><img src={logo} alt="Logo" /></a>
            </div>
            <ul className="navbar-items">
                <div className="nav-link">
                    <li><a href="/">Scan</a></li>
                    <li><a href="/about">Dictionary</a></li>
                    <li><a href="/services">About</a></li>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;
