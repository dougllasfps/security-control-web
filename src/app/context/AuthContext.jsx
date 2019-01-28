import React, { Component, createContext } from 'react'

const context = createContext()

export const AuthConsumer = context.Consumer;
const AuthProvider = context.Provider

const LOGGED_USER = '_logged_user';

class AuthContextProvider extends Component{

    state = {
        authenticated : false
    }
    
    login = (user) => {
        localStorage.setItem( LOGGED_USER, JSON.stringify(user) );
        this.setState({ ...this.state ,authenticated: true})
    }

    logout = () => {
        localStorage.removeItem(LOGGED_USER)
        this.setState({ ...this.state ,authenticated: false})
    }

    componentDidMount(){
        const loggedUser = localStorage.getItem(JSON.parse(LOGGED_USER) )
        if(loggedUser){
            this.setState({ ...this.state ,authenticated: true})
        }
    }
        
    render(){
        return(
            <AuthProvider value={{
                login: this.login,
                logout: this.logout
            }}>

            </AuthProvider>
        )
    }
}
