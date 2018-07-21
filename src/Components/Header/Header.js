import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {
                brand: 'Brand Profile',
                user: '',
            },
            isSaveAndExit: {
                brand: 'Save and exit',
                user: '',
            },
            cell1: {
                brand: 'Objectives',
                user: 'About',
            },
            cell2: {
                brand: 'Audience',
                user: 'Location',
            },
            cell3: {
                brand: 'Voice',
                user: 'Social',
            },
            cell4: {
                brand: 'Taste',
                user: 'Sample Work',
            },
            cell5: {
                brand: 'Assets',
                user: 'Skillset',
            }
        }

        function getProfileType(props) {
            return props.profileType;
        }
    }

    handleSelectProfile = (isTrue) => {
        this.setState({ isUser: '' });
    }
    render() {

        return (
            <header className="App-header">
                <ul>
                    <li className={this.props.profileType === 'user' ? 'bg-blue' : 'bg-yellow'} onClick={() => this.handleSelectProfile('')}>
                        <div></div>
                        <h4>{this.props.profileType === 'user' ? this.state.profile.user : this.state.profile.brand}</h4>
                        <h5>{this.props.profileType === 'user' ? this.state.isSaveAndExit.user : this.state.isSaveAndExit.brand}</h5>
                    </li>
                    <li>
                        <h4>{this.props.profileType === 'user' ? this.state.cell1.user : this.state.cell1.brand}</h4>
                    </li>
                    <li>
                        <h4>{this.props.profileType === 'user' ? this.state.cell2.user : this.state.cell2.brand}</h4>
                    </li>
                    <li>
                        <h4>{this.props.profileType === 'user' ? this.state.cell3.user : this.state.cell3.brand}</h4>
                    </li>
                    <li>
                        <h4>{this.props.profileType === 'user' ? this.state.cell4.user : this.state.cell4.brand}</h4>
                    </li>
                    <li>
                        <h4>{this.props.profileType === 'user' ? this.state.cell5.user : this.state.cell5.brand}</h4>
                    </li>
                </ul>
            </header>
        )
    }
}

export default Header;