import React, {Component} from 'react';
import Tab from './Tab.js';

class TabContainer extends Component {
    render() {
        return (
            <div className="tabContainer">
                <Tab id="tab1" number="1"/>
                <Tab id="tab2" number="2"/>
                <Tab id="tab3" number="3"/>
                <Tab id="tab4" number="4"/>
            </div>
        )
    }
}

export default TabContainer;
