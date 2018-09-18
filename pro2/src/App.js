import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import './App.css'
import Gallery from './components/Gallery/Gallery'
import Header from './components/Header/Header'


class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="appContent">
            <Header></Header>
            <Gallery></Gallery>
          </div>
          <div className="stickyFooter">
            <Footer></Footer>
          </div>
      </div>
    );
  }
}

export default App;
