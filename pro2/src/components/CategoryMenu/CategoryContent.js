import React, {Component} from 'react';
import './CategoryMenu.css';
import CategoryPicker from './CategoryPicker';

class CategoryContent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pictureCategory: "",
            textCategory: "",
            soundCategory: "",

        }
    }

    render() {
        return (
        <div className="categoryContent">
            <div className="catPicture">
                <b>Velg bildekategori</b>
                <CategoryPicker id="catPicture" cat1 = "Superheroes" 
                name1="Superhelter" cat2= "Seasons" name2="Årstider" 
                cat3 = "Holidays" name3="Høytider" 
                selectCategory = {this.props.selectPictureCategory}
                mainCat = {this.props.pic}></CategoryPicker>
            </div>
            <div className="catText">
                <b>Velg tekstkategori</b>
                <CategoryPicker id="catText" cat1 = "Cliches" name1="Klisjeer" 
                cat2="Jokes" name2="Vitser" cat3="Riddles" 
                name3="Gåter" selectCategory = {this.props.selectTextCategory}
                mainCat ={this.props.txt}></CategoryPicker>
            </div>
            <div className="catSound">
                <b> Velg lydkategori</b>
                <CategoryPicker id="catSound" cat1="Animals" name1="Dyr" 
                cat2="Feelings" name2="Følelser" cat3="Instruments" 
                name3="Instrumenter" selectCategory = {this.props.selectSoundCategory} 
                mainCat = {this.props.soun}></CategoryPicker> 
            </div>
        </div>
        )
    }
}

export default CategoryContent;