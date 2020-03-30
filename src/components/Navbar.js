import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav>
            <h1>Lauren Moor</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li>Views: <span>{props.viewNumbers}</span></li>
            </ul>
        </nav>
    )
};

export default Navbar;