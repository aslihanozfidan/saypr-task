import React, { Component } from 'react';
import './Bubble.css';

class Bubble extends Component {
    render() {
        return (
            <div className="bubble">
                {this.props.items.length > 0 ?
                    <div className="bubble-container">
                        {this.props.items.map(
                            (item, i) =>
                                <div className="title" key={i} onClick={() => this.props.itemRemoved(i)}>{item}</div>
                        )}
                    </div>
                    :
                    ''
                }
            </div>
        )
    }
}

export default Bubble;