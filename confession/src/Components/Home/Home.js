import React, { Component } from 'react'
import "./Home.css"
import {ref} from '../../base'


class Home extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        let location = document.getElementById("blocation").value;
        let description = document.getElementById("description").value;
        let dateNow = this.formatDate(Date.now());
        let data = {
            Name:  location,
            Created_at: dateNow,
            Description: description
        };
        ref.push(data);
        window.location.reload();
    }

    formatDate(date) {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }

    render() {
        return (
            <div className="home">
                <h2>Make a confession!</h2>
                <span id="flocation"> Your Location:<br/></span>
                <textarea id="blocation" name="home" cols="10" rows="1" placeholder={"Type in your city"}></textarea>
                <p></p>
                <span id="flocation"> Your Confession:<br/></span>
                <textarea id="description" name="home" cols="10" rows="5" placeholder={"Type in your message..."}></textarea>
                <div className = "align-right">
                    <p>
                    <button className="btn pink lighten-1 z-depth-0" type="submit" onClick={() => this.onSubmit()}> Submit </button>
                    </p>
                </div>
                {this.props.posts}
            </div>
        )
    }
}

export default Home;