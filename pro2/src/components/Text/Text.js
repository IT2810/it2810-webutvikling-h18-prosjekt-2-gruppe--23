import React, { Component } from 'react';
import axios from 'axios';

class Text extends Component {
    constructor(props) {
        super()

        this.state = {
            text: "",  
        }

        this.getText(props.name);
    }


    getText(props)  {
        axios.get('/TextFile/' + props + '.json')
        .then(response => {
            this.setState({text : response.data.text })
      })
      .catch(error => {
        console.log(error);
      })
    }


    render() {
        return (
            <div className = "jsontxt">
                <p> {this.state.text} </p>
            </div>
        );
    }
}

export default Text;