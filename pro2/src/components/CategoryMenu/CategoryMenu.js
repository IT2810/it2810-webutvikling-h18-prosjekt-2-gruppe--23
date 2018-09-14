import React, {Component} from 'react';
import CategoryContent from './CategoryContent';
import './CategoryMenu.css';

class CategoryMenu extends Component {
    constructor(props){
        super();

        this.state = { showMenu : false };

        this.toggleDiv = this.toggleDiv.bind(this);
    }

    toggleDiv = () => {
        console.log("Kommer inn hit")
        const { showMenu} = this.state;
        this.setState( { showMenu : !showMenu})
    }

    render() {
        return( 
            <div>
                <button className="menuButton" onClick={this.toggleDiv}>Kategorier</button>
                {this.state.showMenu && <CategoryContent></CategoryContent>}
            </div>
        )
    }
}

export default CategoryMenu;