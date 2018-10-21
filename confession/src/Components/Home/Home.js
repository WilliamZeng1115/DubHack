import React, { Component } from 'react'
import './Home.css'

class Home extends Component {

    render() {
        return (
            <div className="home">
                <h2>Make a confession!</h2>
                Your Location:<br/>
                <input type="location" names="location" className="validate" placeholder={"City"}/>
                <p></p>

                Your Confession: <br/>
                <textarea name="home" cols="10" rows="5" placeholder={"Type in your message..."}></textarea>
                
                <div className = "align-right">
                    <button type = "submit" > Submit </button>
                </div>

            </div>
        )
    }
}

export default Home;