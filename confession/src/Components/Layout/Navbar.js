import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignedIn: false,
        };
    }

    handleSignin = e => {
        this.state.isSignedIn = true;
    };

    handleLogout = e => {
        this.state.isSignedIn = false;
    };

    render() {
        return (
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <div className="leftnav">
                        <Link to='/Home' className="brand-logo"> Confession </Link>
                    </div>

                    <ul className="right">
                        {
                            !this.state.isSignedIn &&
                                <li>
                                    <NavLink to='/SignIn' onClick={this.handleLogin}>
                                        Professional  Login
                                    </NavLink>
                                </li>
                        }
                        {
                            this.state.isSignedIn &&
                                <div>
                                    <li>
                                        <NavLink to='/Dashboard'>Dashboard</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/About'>About</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/Home'>Analyze</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/Logout' onClick={this.handleLogout}>
                                            Logout
                                        </NavLink>
                                    </li>
                                    {/*<li><NavLink to='/Logout' className='btn btn-floating pink lighten-1'>NN </NavLink></li>*/}
                                </div>
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;


