import React, { Component } from 'react';
import './Header.css';
import { headerConst } from '../../Constants/headerData';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <ul>
                    <li className={this.props.profileType === 'user' ? 'bg-blue' : 'bg-yellow'} onClick={this.props.cleanIsUser}>
                        <div></div>
                        <h4>{headerConst.profile[this.props.profileType]}</h4>
                        <h5>{headerConst.isSaveAndExit[this.props.profileType]}</h5>
                    </li>
                    <li>
                        <h4>{headerConst.cell1[this.props.profileType]}</h4>
                    </li>
                    <li>
                        <h4>{headerConst.cell2[this.props.profileType]}</h4>
                    </li>
                    <li>
                        <h4>{headerConst.cell3[this.props.profileType]}</h4>
                    </li>
                    <li>
                        <h4>{headerConst.cell4[this.props.profileType]}</h4>
                    </li>
                    <li>
                        <h4>{headerConst.cell5[this.props.profileType]}</h4>
                    </li>
                </ul>
            </header>
        )
    }
}

export default Header;