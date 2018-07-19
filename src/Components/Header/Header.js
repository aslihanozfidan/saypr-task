import React from 'react';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = props => {
    return (
        <header className="App-header">
            <ul>
                <li>
                    <div><FontAwesomeIcon icon="stroopwafel" /></div>
                    <h4>Brand Profile</h4>
                    <h5>Save and exit</h5>
                </li>
                <li>
                    <h4>Objectives</h4>
                </li>
                <li>
                    <h4>Audience</h4>
                </li>
                <li>
                    <h4>Voice</h4>
                </li>
                <li>
                    <h4>Taste</h4>
                </li>
                <li>
                    <h4>Assets</h4>
                </li>
            </ul>
        </header>
    )
}

export default Header;