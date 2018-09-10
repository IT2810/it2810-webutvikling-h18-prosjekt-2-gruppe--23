import React, { Component } from 'react';
import axios from 'axios';

class Bilde extends Component {
    constructor(props) {
        super()
        
        this.state = {
            tekst: ""  
        }

        this.getPicture();
    }

    getPicture()  {
        axios.get('/Tekst/riddle0.json')
        .then(response => {
            //console.log(response.data);
            this.setState({tekst : response.data.text })
            console.log(this.state)
      })
      .catch(error => {
        console.log(error);
      })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <p> {this.state.tekst} </p>
            </div>
        );
    }
}

export default Bilde;