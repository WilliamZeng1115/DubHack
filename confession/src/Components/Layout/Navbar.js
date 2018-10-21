import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    handleLogout = e => {
        console.log("handle logout");
        localStorage.removeItem('dubhack');
    };

    render() {
        let isSignedIn = localStorage.getItem('dubhack') === 'william';
        return (
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <div className="leftnav">
                        <Link to='/Home' className="brand-logo logotext"> TalkItOut </Link>
                    </div>

                    <ul className="right">
                        {
                            !isSignedIn &&
                            <div>
                                <li>
                                <NavLink to='/Dashboard'>Dashboard</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/About'>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/SignIn'>
                                        Professional  Login
                                    </NavLink>
                                </li>
                            </div>

                        }
                        {
                            isSignedIn &&
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
                                        <NavLink to='/Home' onClick={this.handleLogout}>
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


