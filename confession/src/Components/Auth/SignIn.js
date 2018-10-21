import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import './SignIn.css'
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isRedirect: false,
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
           isRedirect: true,
        });

    };

    render() {
        if (this.state.isRedirect) {
            return <Redirect to='/dashboard' />
        }

        return (
            <div className= "container">
                <div className="boxborder">
                <form onSubmit={this.handleSubmit} className="textbox">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                     </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="inputfield">
                        <button className="btn pink lighten-1 z-depth-0">LogIn</button>
                    </div>
                </form>
            </div>
             </div>

        )
    }
}


export default SignIn