import React, {Component} from 'react';
import './TabStyle.css';

class Tab extends Component {

  constructor(props){
    super(props)
  }


    render() {
        return (
            <button className="tab" onClick={this.props.oClick} >
                <h1 className="tabText"> {this.props.number} </h1>
            </button>
        )
    }
}

export default Tab;
