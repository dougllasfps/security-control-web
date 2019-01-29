import React, { Component, createContext } from 'react'

import axios from 'axios'

const context = createContext()

export const AuthConsumer = context.Consumer;
const AuthProvider = context.Provider

const LOGGED_USER = '_logged_user';
const LOGGED_USER_TOKEN = '_logged_user_btoken';

class AuthContextProvider extends Component{

    state = {
        authenticated : false,
        token: ''
    }
    
    login = (user, token) => {
        localStorage.setItem( LOGGED_USER, JSON.stringify(user) );
        localStorage.setItem( LOGGED_USER_TOKEN, token );
        this.setState({ ...this.state, authenticated: true, token})
    }

    logout = () => {
        localStorage.removeItem(LOGGED_USER)
        localStorage.removeItem(LOGGED_USER_TOKEN)
        this.setState({ ...this.state, authenticated: false})
    }

    validateSession = () => {
        const token = localStorage.getItem( LOGGED_USER_TOKEN )
        
        if( token ){

        }

        return {token}
    }

    componentDidMount(){
       const { token, user } = this.validateSession()

       if(!token){
            this.logout()
       }else{
            this.login( token, user )
       }
    }
        
    render(){
        return(
            <AuthProvider value={{
                login: this.login,
                logout: this.logout
            }}>
                {this.props.children}
            </AuthProvider>
        )
    }
}

export default AuthContextProvider