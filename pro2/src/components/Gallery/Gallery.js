import React, { Component } from 'react';
//import axios from 'axios';
import Text from '../Text/Text'
import Bilde from '../Bilde/Bilde'
import './Gallery.css'
import Tab from '../Tab/Tab'
import Sound from '../Sound/Sound';
import CategoryMenu from '../CategoryMenu/CategoryMenu';


class Gallery extends Component {

    constructor(props) {
        super()

        this.state = {
            tabs: "1",
        }
    }

    handleTabs (val){
      this.setState({tabs : val});
      this.forceUpdate()

    }

    render() {
        console.log('state ved render: '+this.state.tabs)
        console.log("1" == this.state.tabs)
        //let tall = this.state.tabs;
        //console.log(superheroes[currentPage])
        return (
            <div className="content">

            <div id = "test"></div>

                <div className="galleryCategories">
                    <CategoryMenu></CategoryMenu>
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
                    <Bilde category="Superheroes" tabnr={this.state.tabs}></Bilde>

                    </div>

                    <div className="galleryText">
                        <Text category="Riddles" tabnr={this.state.tabs}> </Text>
                    </div>

                    <div className="gallerySound">
                        <Sound category="Animals" tabnr={this.state.tabs}></Sound>
                    </div>

                </div>
            </div>

        );
    }
}

export default Gallery;
