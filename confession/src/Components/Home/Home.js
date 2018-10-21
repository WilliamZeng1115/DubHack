import React, { Component } from 'react'
<<<<<<< Updated upstream
import './Home.css'
=======
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import {ref} from "../../base";
//import {post} from "../../Actions/GetDetails";

>>>>>>> Stashed changes

class Home extends Component {

    render() {
        return (
            <div className="home">
                <h2>Make a confession!</h2>
                Your Location:<br/>
                <input type="location" names="location" className="validate" placeholder={"City"}/>
                <p></p>
<<<<<<< Updated upstream

                Your Confession: <br/>
                <textarea name="home" cols="10" rows="5" placeholder={"Type in your message..."}></textarea>
                
=======
                <input type="post" name="post" placeholder={"Type in your message..."}/>

>>>>>>> Stashed changes
                <div className = "align-right">
                    <p>
                    <button type = "submit"> Submit </button>
                    </p>
                </div>
<<<<<<< Updated upstream

=======
                {this.props.posts}
>>>>>>> Stashed changes
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