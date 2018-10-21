import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import "./Home.css"
//import {ref} from "../../base";
//import {post} from "../../Actions/GetDetails";


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
                    <p>
                    <button type = "submit"> Submit </button>
                    </p>
                </div>
                {this.props.posts}
            </div>
        )
    }
}

// function matchDispatchToProps(dispatch) {
//     return bindActionCreators({
//         post: post
//     }, dispatch)
// }


function mapStateToProps(state) {
    return {
        post: state.post
    };
}

export default connect(mapStateToProps)(Home);