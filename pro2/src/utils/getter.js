import React, { Component } from 'react';
import axios from 'axios';

class Getter extends Component {
  render() {
    return (
      <div className="Getter">
      </div>
    );
  }

  componentDidMount() {
    axios.get('/json/txt.json')
      .then(response => {
          console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
  }
}

export default Getter;
