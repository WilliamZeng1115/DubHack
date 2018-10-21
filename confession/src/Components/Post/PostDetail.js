import React, {Component} from 'react';
import {connect} from 'react-redux';

class PostDetail extends Component {

    render() {
        console.log(this.props.post);
        if (!this.props.post) {
            return (
                <h3 id="postpara">Select a post.</h3>
            );
        }
        return (
          <div>
              <h2>{this.props.post.Description}</h2>
          </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      post: state.active_post
    };
}

export default connect(mapStateToProps)(PostDetail);