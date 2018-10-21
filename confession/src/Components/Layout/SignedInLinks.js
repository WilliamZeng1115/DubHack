import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/Dashboard'>Dashboard</NavLink></li>
            <li><NavLink to='/About'>About</NavLink></li>
            <li><NavLink to='/Home'>Analyze</NavLink></li>
            <li><NavLink to='/Logout'> Logout</NavLink></li>
            <li><NavLink to='/Logout' className='btn btn-floating pink lighten-1'>NN </NavLink></li>
        </ul>
    )
};

export default SignedInLinks;