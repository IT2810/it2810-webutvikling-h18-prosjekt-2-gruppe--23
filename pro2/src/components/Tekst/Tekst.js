import React, { Component } from 'react';
import axios from 'axios';

class Tekst extends Component {
    constructor(props) {
        super()

        this.state = {
            tekst: "",  
        }

        this.getText(props.name);
    }

    getText(props)  {
        axios.get('/Tekst/' + props + '.json')
        .then(response => {
            this.setState({tekst : response.data.text })
      })
      .catch(error => {
        console.log(error);
      })
    }

    render() {
        return (
            <div className = "jsontxt">
                <h3> {this.state.tekst} </h3>
            </div>
        );
    }
}

export default Tekst;