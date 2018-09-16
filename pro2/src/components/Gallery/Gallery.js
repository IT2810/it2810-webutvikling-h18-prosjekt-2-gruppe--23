import React, { Component } from 'react';
import axios from 'axios';
import Text from '../Text/Text'
import TabContainer from '../Tab/TabContainer';
import Sound from '../Sound/Sound';
import './Gallery.css'
import CategoryMenu from '../CategoryMenu/CategoryMenu';

class Gallery extends Component {
    constructor() {
        super()

        this.state = {
            currentPage: 0,
        }
        this.getRegisterFile()
    }
    //Retrieves the Registerfile, which holds an array with categories and picutes/text
    getRegisterFile()  {
        axios.get('/json/RegisterFile.json')
        .then(response => {
      })
      .catch(error => {
        console.log(error);
      })
    }

    render() {
        //console.log(this.state)
        return (
            <div className="content">
                <div className="galleryCategories">
                    <CategoryMenu></CategoryMenu>
                </div>

                <div className="galleryTab">
                    <TabContainer></TabContainer>
                </div>


                <div className="gridContainer">
                    <div className="galleryPic">
                        <p> Her kommer bildet som komponent</p>
                    </div>

                    <div className="galleryText">
                        <Text name="cliche0"></Text>
                    </div>

                    <div className="gallerySound">
                        <Sound category="Animals" tabnr="1"></Sound>
                    </div>

                </div>

            </div>
        );
    }
}

export default Gallery;
