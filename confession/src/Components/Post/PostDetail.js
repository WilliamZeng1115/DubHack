import React, {Component} from 'react';
import {connect} from 'react-redux';

class PostDetail extends Component {

    render() {
        if (!this.props.post) {
            return (
                <h3 id="postpara">Select a post.</h3>
            );
        }
        return (
          <div>
              <h3 id="postpara">{this.props.post.detail}</h3>
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