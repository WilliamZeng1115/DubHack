import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {clickPost} from '../../Actions/ShowDetail';
import './Post.css'

class PostList extends Component {

    filterListItem() {
        switch(this.props.type) {
            case "Top":
                return this.props.posts;
            case "New":
                // filter by created_at
                return this.props.posts.sort(function (a, b) {
                    return b.created_at > a.created_at;
                }).slice(0, 2);
            case "Recent":
                return this.props.posts;
            case "Suggest":
                return this.props.posts;
            default:
                return this.props.posts;
        }
    }

    getDateToString(date) {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return year + '-' + month + '-' + day;
    }

    createListItem() {
        let filteredList = this.filterListItem();
        console.log(filteredList);
        if (filteredList) {
            return filteredList.map((post) => {
                return (
                    <div className="card z-depth-0 project-summary pointer" key={post.id} onClick={() => this.props.clickPost(post)}>
                        <div className="card-content grey-text text-darken-3">
                            <span className="card-title">{post.title}</span>
                            <p>Category and short summary (TDLR)</p>
                            <p className="grey-text">{this.getDateToString(post.created_at)}</p>
                        </div>
                    </div>
                );
            });
        }
    }

    render() {
        return (
            <div className="project-list section">
                {this.createListItem()}
            </div>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        clickPost: clickPost
    }, dispatch)
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(PostList);