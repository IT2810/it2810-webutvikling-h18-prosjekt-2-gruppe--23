import React, { Component } from 'react';
import axios from 'axios';

import Bilde from './../Bilde/Bilde'

class Galleri extends Component {
    constructor() {
        super()
        
        this.state = {
            bilder: [],
            tekst: [],
            lyd: [],
            currentPage: 0,  
        }
        this.getRegisterFile()
    }

    getRegisterFile()  {
        axios.get('/json/RegisterFile.json')
        .then(response => {
            console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
    }

    render() {
        // const kombinasjoner = (<Kombinasjon bilde="", )
        console.log(this.state)
        return (
            <div>
                <Bilde></Bilde>
            </div>
        );
    }
}

export default Galleri;