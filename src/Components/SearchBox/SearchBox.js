import React, { Component } from 'react';
import './SearchBox.css';
import { searchConst } from '../../Constants/searchData';
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
        if (this.state.item.length > 0) {
            this.setState(prevState => ({
                itemList: [this.state.item, ...prevState.itemList],
                item: ''
            }));
        }
    }

    removeItem = (index, i) => {
        this.state.itemList.splice(index, 1);
        this.setState({
            itemList: this.state.itemList
        })
    }

    componentWillReceiveProps() {
        this.setState({
            itemList: '',
            item: '',
        })

    }

    render() {

        return (
            <div className="SearchBox">
                <form onSubmit={this.handleSubmit}>
                    <span onClick={this.handleSubmit}>+</span>
                    <input type="text"
                        placeholder={searchConst.inputPlaceholder[this.props.profileType]}
                        value={this.state.item}
                        onChange={this.handleChange}
                        maxLength="75" />
                    <input type="submit" value="Submit" />
                </form>
                <span className="max-character-count">{this.state.item.length}/75</span>
                {this.state.itemList.length > 0 ?
                    <div className="label-area">
                        {this.state.itemList.map(
                            (item, i) =>
                                <div className="label" key={i} onClick={this.removeItem.bind(this, i)}>{item}</div>
                        )}
                    </div>
                    :
                    ''
                }

                {this.props.profileType === 'buyer' ?
                    <a className={this.state.itemList.length > 0 ?
                        'next-btn bg-yellow' :
                        'next-btn bg-yellow mr-top-48'}>{searchConst.buttonText[this.props.profileType]}</a>
                    :
                    <a className={this.state.itemList.length > 0 ?
                        'next-btn bg-blue' :
                        'next-btn bg-blue mr-top-48'}>{searchConst.buttonText[this.props.profileType]}</a>
                }
            </div>
        )
    }
}

export default SearchBox;