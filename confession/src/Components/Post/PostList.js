import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {clickPost} from '../../Actions/ShowDetail';
import './Post.css';

class PostList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listPosts: [],
        };
    }

    componentDidMount() {
        let that = this;
        this.props.posts.then(function (data) {
            console.log(Object.values(data));
            let filteredList = that.filterListItem(Object.values(data));
            if (filteredList) {
                that.setState({
                    listPosts: filteredList.map((post, index) => {
                        return (
                            <div className="card z-depth-0 project-summary pointer" key={index}
                                 onClick={() => that.props.clickPost(post)}>
                                <div className="card-content grey-text text-darken-3">
                                    <span className="card-title">{post.Name}</span>
                                    <p>Category and short summary (TDLR)</p>
                                    <p className="grey-text">{post.Created_at}</p>
                                </div>
                            </div>
                        );
                    }),
                });

            }
        });
    }



    filterListItem(data) {
        switch(this.props.type) {
            case "Top":
                return data;
            case "New":
                // filter by created_at
                return data.sort(function (a, b) {
                    return b.created_at > a.created_at;
                }).slice(0, 2);
            case "Recent":
                return data;
            case "Suggest":
                return data;
            default:
                return data;
        }
    }

    getDateToString(date) {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return year + '-' + month + '-' + day;
    }

    createListItem() {
        let that = this;
        this.props.posts.then(function (data) {
            let filteredList = that.filterListItem(Object.values(data));
            if (filteredList) {
                return filteredList.map((post, index) => {
                    return (
                        <div className="card z-depth-0 project-summary pointer" key={index}
                             onClick={() => that.props.clickPost(post)}>
                            <div className="card-content grey-text text-darken-3">
                                <span className="card-title">{post.Name}</span>
                                <p>Category and short summary (TDLR)</p>
                                <p className="grey-text">{post.Created_at}</p>
                            </div>
                        </div>
                    );
                });
            }
        });
    }

    render() {
        return (
            <div className="project-list section">
                {this.state.listPosts}
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