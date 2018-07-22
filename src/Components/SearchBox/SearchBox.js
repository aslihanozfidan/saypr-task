import React, { Component } from 'react';
import './SearchBox.css';
import { searchConst } from '../../Constants/searchData';

import Bubble from '../Bubble/Bubble';
class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '', 
            items: [], 
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.value.length > 0) {
            this.setState(prevState => ({
                items: [...prevState.items, this.state.value],
                value: ''
            }));
        }
    }

    removeItem = (index) => {
        this.state.items.splice(index, 1);
        this.setState({
            items: this.state.items
        })
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.theme !== this.props.theme) {
            this.setState({
                items: '',
                value: '',
            })
        }
    }

    render() {
        return (
            <div className="search-box">
                <form onSubmit={this.handleSubmit}>
                    <span onClick={this.handleSubmit}>+</span>
                    <input type="text"
                        placeholder={searchConst.inputPlaceholder[this.props.profileType]}
                        value={this.state.value}
                        onChange={this.handleChange}
                        maxLength="75" />
                    <input type="submit" value="Submit" />
                </form>
                <span className="max-character-count">{this.state.value.length}/75</span>

                <Bubble items={this.state.items} itemRemoved={this.removeItem} />

                <a className={`next-btn bg-${this.props.profileType} ${this.state.items.length === 0 ? 'mr-top-48' : ''}`}>
                    {searchConst.buttonText[this.props.profileType]}
                </a>
            </div>
        )
    }
}

export default SearchBox;