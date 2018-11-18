import React, { Component } from 'react';
import Header from './components/template/Header'
import SideBar from './components/template/SideBar'
import Footer from './components/template/Footer'

import Home from './views/Home'

import './dependencies/dependences'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
          <Header />
          <SideBar />
          <div className="content-wrapper">
              <Home />
          </div>
          <Footer />
      </div>
    );
  }
}

export default App;
