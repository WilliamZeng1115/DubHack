import React, { Component } from 'react'

class Filter extends Component {
    render() {
        return (
            <div className="input-field col s12">
                <select id="filter" className="browser-default" onChange={this.props.onSelect} value={this.props.select}>
                    <option value="All">All</option>
                    <option value="New">New</option>
                    <option value="Top">Top</option>
                    <option value="Recent">Recent</option>
                    <option value="Recommend">Recommend</option>
                </select>
            </div>
        )
    }
}

export default Filter;
