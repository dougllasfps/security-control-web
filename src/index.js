import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/app/App';
import { Provider } from 'mobx-react'
import stores from './store'

ReactDOM.render( 
    <Provider {...stores}>
        <App />
    </Provider> , 
    document.getElementById('root') 
);