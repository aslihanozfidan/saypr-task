import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    render() {
        return (
            <div className="SearchBox">
                <input type="text" placeholder="We want to go viral..." />
                <span className="max-character">0/75</span>
                <div className="label-area">
                    <div className="label">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    <div className="label">Lorem</div>
                    <div className="label">Lorem ipsum dolor sit amet.</div>
                    <div className="label">Lorem ipsum dolor sit amet, consectetur</div>
                </div>
                <a className="next-btn">Next</a>
            </div>
        )
    }
}

export default SearchBox;