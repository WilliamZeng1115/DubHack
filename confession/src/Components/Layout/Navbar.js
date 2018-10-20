import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../Logo.png'
import NavbarElement from './NavbarElements'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/Home' className="brand-logo">
                   Confession
                </Link>
                <NavbarElement />
            </div>
        </nav>
    )
};

export default Navbar;


