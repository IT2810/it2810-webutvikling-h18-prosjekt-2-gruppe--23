import React, {Component} from 'react';
import CategoryContent from './CategoryContent';
import './CategoryMenu.css';

class CategoryMenu extends Component {
    
    //Source: https://www.youtube.com/watch?v=Mo2_UPkZjJU
    
    constructor(props){
        super();

        this.state = { showMenu : false };

        this.toggleDiv = this.toggleDiv.bind(this);
    }

    toggleDiv = () => {
        const { showMenu} = this.state;
        this.setState( { showMenu : !showMenu})
    }

    render() {
        return( 
            <div>
                <button className="menuButton" onClick={this.toggleDiv}><h1>Kategorier</h1></button>
                {this.state.showMenu && <CategoryContent></CategoryContent>}
            </div>
        )
    }
}

export default CategoryMenu;