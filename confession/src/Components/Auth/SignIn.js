import React, { Component } from 'react'

import './SignIn.css'
class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange=(e) => {
        this.state =({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className= "conatainer">
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