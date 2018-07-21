import React, { Component } from 'react';
import './Header.css';
import { headerConst } from '../../Constants/headerData';

import FaCheckCircle from 'react-icons/lib/fa/check-circle';
import FaChevronCircleLeft from 'react-icons/lib/fa/chevron-circle-left';
import FaQuestionCircleO from 'react-icons/lib/fa/question-circle-o';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <ul>
                    <li className={this.props.profileType === 'user' ? 'bg-blue' : 'bg-yellow'} onClick={this.props.cleanIsUser}>
                        <span><FaChevronCircleLeft /></span>
                        <span>
                            <h4>{headerConst.profile[this.props.profileType]}</h4>
                            <h5>{headerConst.isSaveAndExit[this.props.profileType]}</h5>
                        </span>
                    </li>
                    <li>
                        <h4>
                            <FaCheckCircle />
                            {headerConst.cell1[this.props.profileType]}
                        </h4>
                    </li>
                    <li>
                        <h4>
                            <FaQuestionCircleO />
                            {headerConst.cell2[this.props.profileType]}
                        </h4>
                    </li>
                    <li>
                        <h4>
                            <FaQuestionCircleO />
                            {headerConst.cell3[this.props.profileType]}
                        </h4>
                    </li>
                    <li>
                        <h4>
                            <FaQuestionCircleO />
                            {headerConst.cell4[this.props.profileType]}
                        </h4>
                    </li>
                    <li>
                        <h4>
                            <FaQuestionCircleO />
                            {headerConst.cell5[this.props.profileType]}
                        </h4>
                    </li>
                </ul>
            </header>
        )
    }
}

export default Header;