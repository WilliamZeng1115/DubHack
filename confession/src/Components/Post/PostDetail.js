import React, {Component} from 'react';
import {connect} from 'react-redux';

class PostDetail extends Component {

    render() {
        if (!this.props.post) {
            return (
                <h2>Select a post.</h2>
            );
        }
        return (
          <div>
              <h2>{this.props.post.detail}</h2>
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