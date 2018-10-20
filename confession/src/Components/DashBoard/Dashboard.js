import React, { Component } from 'react'
import PostList from '../Post/PostList';
import PostDetail from '../Post/PostDetail';
import Filter from './Filter';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {select: "All"};
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(event) {
        this.setState({select: event.target.value});
    }

    render() {
        return (
            <div className="dashboard container">
                <Filter onSelect={this.onSelect}/>
                <div className="row">
                    <div className="col s12 m6">
                        <PostList type={this.state.select}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <PostDetail />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
