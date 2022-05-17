import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../../../images/Logo.png"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav className="n-link">
                <Link to='/Wedding'>Wedding Cards</Link>
                <Link to='/Birthday'>Birthday Cards</Link>
                <Link to='/Feeling'>Feeling Cards</Link>
                <Link to='/Anniversary'>Anniversary Cards</Link>
            </nav>
            <div>
                <nav className="n-link">
                <Link to='/login'>Login|Signup</Link>
                </nav>
            
            </div>
        </div>
    );
};

export default Navbar;