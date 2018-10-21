import React, { Component } from 'react'

class Home extends Component {

    render() {
        return (
            <div>
                <h2>Make a confession!</h2>

                <input type="post" name="post"/>
                <div className = "align-right">
                    <button type = "submit" > Submit </button>
                </div>
            </div>
        )
    }
}

export default Home;