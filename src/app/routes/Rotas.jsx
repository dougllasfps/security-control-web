import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from '@/views/Home'
import Login from '@/views/Login'

import Form from '@/views/examples/FormExample'
import List from '@/views/examples/ListExample'


const CustomRoute = ({ path, component:Component, ...rest }) => {
    return (
        <Route {...rest} render={ props => (
            <Component />
        )} />
    )
}

const Rotas = () => (
    <div className="content-wrapper">
        <HashRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/form" exact component={Form} />
                <Route path="/list" exact component={List} />
                <Route path="/login" exact component={Login} />
            </Switch>
        </HashRouter>
    </div>
)

export default Rotas