import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/app/App';
import AuthContextProvider from '@/app/context/AuthContext'

ReactDOM.render( 
    <AuthContextProvider>
        <App />
    </AuthContextProvider> , 
    document.getElementById('root') 
);