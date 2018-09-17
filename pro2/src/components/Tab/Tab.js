import React, {Component} from 'react';
import './TabStyle.css';

class Tab extends Component {

    render() {
        return (
            <button className="tab" onClick={this.props.oClick} >
                <h1 className="tabText"> {this.props.number} </h1>
            </button>
        )
    }
}

export default Tab;
