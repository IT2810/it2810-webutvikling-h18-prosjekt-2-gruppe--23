import React, {Component} from 'react';
import Tab from './Tab.js';

class TabContainer extends Component {
    render() {
        return (
            <div className="tabContainer"> 
                <Tab number="1"/>
                <Tab number="2"/>
                <Tab number="3"/>
                <Tab number="4"/>
            </div>
        )
    }
}

export default TabContainer;