import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

import NavbarElement from './NavbarElements'
import SignedInLinks from './SignedInLinks'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <div className="leftnav">
                <Link to='/Home' className="brand-logo"> Confession </Link>
                </div>
                <SignedInLinks />

                {/*<NavbarElement />*/}
            </div>
        </nav>
    )
};

export default Navbar;


