import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import './App.css'
import Galleri from './components/Galleri/Galleri'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Galleri></Galleri>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
