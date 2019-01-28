import React, { Component } from 'react';
import Header from 'components/template/Header'
import SideBar from 'components/template/SideBar'
import Footer from 'components/template/Footer'
import Rotas from '@/app/routes/Rotas'

import '@/dependencies/dependences'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
          <Header />
          <SideBar />
          <Rotas />
          <Footer />
      </div>
    );
  }
}

export default App;