import React, { Component } from 'react'

class Home extends Component {

    render() {
        return (
            <div>
                <h2>Make a confession!</h2>
                Your Location:<br />
                <input type="location" names="location" placeholder={"City"}/>
                <p></p>
                <input type="post" name="post" placeholder={"Type in your message..."}/>
                <p>
                <div className = "align-right">
                    <button type = "submit" > Submit </button>
                </div>
                </p>
            </div>
        )
    }
}

export default Home;