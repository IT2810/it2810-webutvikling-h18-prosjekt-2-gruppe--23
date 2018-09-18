import React, { Component } from 'react';
import Text from '../Text/Text'
import Bilde from '../Bilde/Bilde'
import './Gallery.css'
import Tab from '../Tab/Tab'
import Sound from '../Sound/Sound';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import '../Tab/TabStyle.css';


class Gallery extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tabs: "1",
            pictureCategory : "Superheroes",
            textCategory : "Cliches",
            soundCategory : "Animals",
        }

        this.selectPictureCategory = this.selectPictureCategory.bind(this);
        this.selectTextCategory = this.selectTextCategory.bind(this);
        this.selectSoundCategory = this.selectSoundCategory.bind(this);
    }

    handleTabs (val){
      this.setState({tabs : val});

    }

    selectPictureCategory(category) {
        this.setState({pictureCategory : category});
    }

    selectTextCategory(category) {
        this.setState({textCategory : category})
    }

    selectSoundCategory(category) {
        this.setState({soundCategory : category})
    }


    render() {

        return (
            <div className="content">

            <div id = "test"></div>

                <div className="galleryCategories">
                    <CategoryMenu selectPictureCategory={this.selectPictureCategory}
                    selectTextCategory = {this.selectTextCategory}
                    selectSoundCategory = {this.selectSoundCategory} pic={this.state.pictureCategory}
                    soun = {this.state.soundCategory} txt={this.state.textCategory} ></CategoryMenu>
                </div>
                <div className="galleryTab">
                <div className="tabContainer">
                    <Tab id="tab1" oClick={()=> this.handleTabs(1)}number="1"/>
                    <Tab id="tab2" oClick={()=> this.handleTabs(2)}number="2"/>
                    <Tab id="tab3" oClick={()=> this.handleTabs(3)}number="3"/>
                    <Tab id="tab4" oClick={()=> this.handleTabs(4)}number="4"/>
                </div>
                </div>
                <div className="gridContainer">
                    <div id="pic" className="galleryPic">
                    <Bilde category={this.state.pictureCategory} tabnr={this.state.tabs}></Bilde>

                    </div>

                    <div className="galleryText">
                        <Text className="textInGallery" category={this.state.textCategory} tabnr={this.state.tabs}> </Text>
                    </div>

                    <div className="gallerySound">
                        <Sound category={this.state.soundCategory} tabnr={this.state.tabs}></Sound>
                    </div>

                </div>
            </div>

        );
    }
}

export default Gallery;