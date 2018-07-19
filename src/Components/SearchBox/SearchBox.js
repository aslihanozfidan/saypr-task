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
        this.setState({ item: '' });
        event.target.value = '';
    }

    removeItem = (id) => {
        const removedItem = this.state.itemList.slice();
        removedItem.splice(id, 1);
        this.setState({
            itemList: removedItem
        })
    }

    render() {
        return (
            <div className="SearchBox">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="We want to go viral..." value={this.state.item} onChange={this.handleChange} maxLength="75" />
                    <input type="submit" value="Submit" />
                </form>
                <span className="max-character">{this.state.item.length}/75</span>
                <div className="label-area">
                    {this.state.itemList.map(
                        (item, i) =>
                            <div className="label" key={item} onClick={this.removeItem.bind(this, i)}>{item}</div>
                    )}
                </div>
                <a className="next-btn">Next</a>
            </div>
        )
    }
}

export default SearchBox;