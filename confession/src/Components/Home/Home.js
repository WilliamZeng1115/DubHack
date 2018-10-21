import React, { Component } from 'react'
import "./Home.css"
import {ref} from '../../base'


class Home extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        let location = $('location').val();
        let description = $('description').val();
        let dateNow = Date.now().toString();
        let data = {
            Name:  location,
            Created_at: dateNow,
            Description: description
        };
        ref.push(data);
    }

    render() {
        return (
            <div className="home">
                <h2>Make a confession!</h2>
                Your Location:<br/>
                <input id="location" type="location" names="location" className="validate" placeholder={"City"}/>
                <p></p>
                Your Confession: <br/>
                <textarea id="description" name="home" cols="10" rows="5" placeholder={"Type in your message..."}></textarea>
                <div className = "align-right">
                    <p>
                    <button type = "submit" onClick={() => this.onSubmit()}> Submit </button>
                    </p>
                </div>
                {this.props.posts}
            </div>
        )
    }
}

export default Home;