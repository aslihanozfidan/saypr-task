import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    render() {
        return (
            <div className="SearchBox">
                <input type="text" placeholder="We want to go viral..." />
                <span className="max-character">0/75</span>
                <div className="label-area">
                    <div className="label"></div>
                </div>
                <a className="next-btn">Next</a>
            </div>
        )
    }
}

export default SearchBox;