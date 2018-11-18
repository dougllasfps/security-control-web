import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../views/Home'
import Login from '../views/Login'

import Form from '../views/examples/Form'

export default props => (
    <div className="content-wrapper">
        <Route path="/" exact component={Home} />
        <Route path="/form" exact component={Form} />
        <Route path="/login" exact component={Login} />
    </div>
)