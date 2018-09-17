import React, { Component } from 'react';
import axios from 'axios';

class Text extends Component {
    constructor({category, tabnr}) {
        super()

        this.state = {
            text: "",  
        }

        this.getText({category, tabnr});
    }

    componentWillReceiveProps(props) {
        this.getText(props)
      }
  
    shouldComponentUpdate(props, newProps) {
        if( props.tabnr === newProps.tabnr) {
          return false;
        }
        return true;
      } 


    getText({category, tabnr})  {
        axios.get('/TextFile/' + category + "/" + tabnr + '.json')
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