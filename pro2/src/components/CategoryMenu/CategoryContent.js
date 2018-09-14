import React, {Component} from 'react';
import './CategoryMenu.css';
import CategoryPicker from './CategoryPicker';

class CategoryContent extends Component {

    render() {
        return (
        <div className="categoryContent">
            <b>Velg bildekategori</b>
            <CategoryPicker id="picture" cat1 = "superheroes" name1="Superhelter" cat2= "seasons" name2="Årstider" cat3 = "holidays" name3="Høytider"></CategoryPicker>
            <b>Velg tekstkategori</b>
            <CategoryPicker id="text" cat1 = "cliches" name1="Klisjeer" cat2="jokes" name2="Vitser" cat3="riddles" name3="Gåter"></CategoryPicker>
            <b> Velg lydkategorier</b>
            <CategoryPicker id="sound" cat1="animals" name1="Dyr" cat2="feelings" name2="Følelser" cat3="instruments" name3="Instrumenter"></CategoryPicker> 
        </div>
        )
    }
}

export default CategoryContent;