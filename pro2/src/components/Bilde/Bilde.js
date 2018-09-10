import React, { Component } from 'react';
import axios from 'axios';

class Bilde extends Component {
    constructor(props) {
        super()
        
        this.state = {
            bilde:  
        }
    }

    getPicture(props)  {
        axios.get('/BilderP2/' + this.props.navn + '.svg')
        .then(response => {
            console.log(response.data);
            this.setState({ bilder: response.data.bilder.hoytider, tekst: response.data.text.jokes})
      })
      .catch(error => {
        console.log(error);
      })
    }

    render() {
        console.log(this.state)
        return (
        );
    }
}

export default Bilde;