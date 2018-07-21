import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            itemList: [],
            inputPlaceholder: {
                brand: 'We want to go viral...',
                user: 'Stop Motion',
            },
            buttonText: {
                brand: 'Next',
                user: 'Finish',
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        function getProfileType(props) {
            return props.profileType;
        }
    }

    handleChange(event) {
        this.setState({ item: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState(prevState => ({
            itemList: [...prevState.itemList, this.state.item]
        }));

        this.setState({ item: '' });
        event.target.value = '';
    }

    removeItem = (index, i) => {
        this.state.itemList.splice(index, 1);
        this.setState({
            itemList: this.state.itemList
        })
    }

    render() {
        return (
            <div className="SearchBox">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder={this.props.profileType === 'user' ? this.state.inputPlaceholder.user : this.state.inputPlaceholder.brand} value={this.state.item} onChange={this.handleChange} maxLength="75" />
                    <input type="submit" value="Submit" />
                </form>
                <span className="max-character">{this.state.item.length}/75</span>
                <div className="label-area">
                    {this.state.itemList.map(
                        (item, i) =>
                            <div className="label" key={item} onClick={this.removeItem.bind(this, i)}>{item}</div>
                    )}
                </div>

                <a className={this.props.profileType === 'user' ? 'next-btn bg-blue font-white' : 'next-btn bg-yellow font-gray'}>{this.props.profileType === 'user' ? this.state.buttonText.user : this.state.buttonText.brand}</a>
            </div>
        )
    }
}

export default SearchBox;