import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarElements = () => {
    return (
        <ul className="right">
            <li><NavLink to='/Dashboard'>Dashboard</NavLink></li>
            <li><NavLink to='/About'>About</NavLink></li>
            <li><NavLink to='/Home'>Analyze</NavLink></li>
        </ul>
    )
};

export default NavbarElements;