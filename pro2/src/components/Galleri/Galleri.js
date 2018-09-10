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
        axios.get('/json/txt.json')
        .then(response => {
            console.log(response.data);
            this.setState({ bilder: response.data.bilder.hoytider, tekst: response.data.text.jokes})
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
            
            </div>
        );
    }
}

export default Galleri;