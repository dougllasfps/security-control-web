import React, { Component } from 'react';
import Header from '@/components/template/Header'
import SideBar from '@/components/template/SideBar'
import Footer from '@/components/template/Footer'
import Rotas from '@/app/routes/Rotas'
import { AuthConsumer } from '@/app/context/AuthContext'
import withConsumer from '@/app/decorators/withConsumer'
import Login from '@/views/Login'

import '@/components/template/dependencies'

class App extends Component {
  render() {
    if(this.props.authenticated || true){
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

export default withConsumer(App, AuthConsumer);