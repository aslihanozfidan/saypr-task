import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            itemList: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ item: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState(prevState => ({
            itemList: [...prevState.itemList, this.state.item]
        }));
        console.log(this.state.item);
    }

    render() {
        return (
            <div className="SearchBox">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="We want to go viral..." value={this.state.item} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
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