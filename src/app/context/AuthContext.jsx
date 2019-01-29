import React, { Component, createContext } from 'react'

import ApiClientService from '../service/ApiClientService';

const context = createContext()

export const AuthConsumer = context.Consumer;
const AuthProvider = context.Provider

const LOGGED_USER = '_logged_user';
const LOGGED_USER_TOKEN = '_logged_user_btoken';

class AuthContextProvider extends Component{

    state = {
        authenticated : false
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
        let token = localStorage.getItem( LOGGED_USER_TOKEN ) || null
        
        if( token && this.props.verifyToken ){
            return this.props.verifyToken(token)
        }

        return false
    }

    componentDidMount(){
       const { token, user } = this.validateSession()

       if(!token){
            this.logout()
       }else{
            ApiClientService.setToken(token)
            this.login( token, user )
       }
    }
        
    render(){
        return(
            <AuthProvider value={{
                login: this.login,
                logout: this.logout,
                authenticated: this.state.authenticated
            }}>
                {this.props.children}
            </AuthProvider>
        )
    }
}

export default AuthContextProvider