import React, { Component } from 'react';
import Header from '@/components/template/Header'
import SideBar from '@/components/template/SideBar'
import Footer from '@/components/template/Footer'
import Rotas from '@/app/routes/Rotas'
import Login from '@/views/Login'
import '@/components/template/dependencies'
import { observer, inject } from 'mobx-react';

@inject("auth")
@observer
class App extends Component {

  render() {
    if(this.props.auth.sessionUser){
      return (
        <div className="wrapper">
            <Header />
            <SideBar />
            <Rotas />
            <Footer />
        </div>
      )
    } else {
      return (
        <Login />
      )
    }
  }
}

export default App;