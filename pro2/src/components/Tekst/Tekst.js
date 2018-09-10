import React, { Component } from 'react';
import axios from 'axios';

class Tekst extends Component {
    constructor(props) {
        super()
        
        this.state = {
            tekst:  
        }
    }

    getPicture(props)  {
        axios.get('/Tekst/' + this.props.navn + '.json')
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

export default Tekst;