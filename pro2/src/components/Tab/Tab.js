import React, {Component} from 'react';
import './TabStyle.css';
//import Gallery from '../Gallery/Gallery';

class Tab extends Component {

  constructor(props){
    super(props)
  }

  /*handleClick = () => {
    console.log('Click happened');
    console.log('Tabnr' + this.tabNumber)
    ting
  }*/

    render() {
        return (
            <button className="tab" onClick={this.props.oClick} >
                <h1 className="tabText"> {this.props.number} </h1>
            </button>
        )
    }
}

export default Tab;
