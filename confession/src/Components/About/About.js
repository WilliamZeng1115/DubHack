import React, { Component } from 'react'
import './About.css'

class About extends Component {

    render() {
        return (
            <div className="AboutText">
                <div className="leftcolumn">
                    <div className="card">
                        <h2>TITLE HEADING</h2>
                        <h5>Title description</h5>
                        <div className="fakeimg">Image</div>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco.</p>
                    </div>
                    <div className="card">
                        <h2>TITLE HEADING</h2>
                        <h5>Title description</h5>
                        <div className="fakeimg">Image</div>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco.</p>
                    </div>
                </div>

                <div className="rightcolumn">
                    <div className="card">
                        <h2>About Us</h2>
                        <div className="fakeimg">Image</div>
                        <p>Some text about me in culpa qui officia deserunt mollit anim..
                            Some text about me in culpa qui officia deserunt mollit anim..
                            Some text about me in culpa qui officia deserunt mollit anim..
                            Some text about me in culpa qui officia deserunt mollit anim..
                            Some text about me in culpa qui officia deserunt mollit anim..
                            Some text about me in culpa qui officia deserunt mollit anim..
                            Some text about me in culpa qui officia deserunt mollit anim..
                            Some text about me in culpa qui officia deserunt mollit anim..
                            Some text about me in culpa qui officia deserunt mollit anim..
                            Some text about me in culpa qui officia deserunt mollit anim..

                        </p>
                    </div>
                </div>


            </div>
        )
    }
}

export default About;