import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from '@/views/Home'
import Login from '@/views/Login'
import ModuleList from '@/views/modules/list'
import ModuleForm from '@/views/modules/form'


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
                <Route path="/login" component={Login} />
                <Route path="/views/modules" component={ModuleList} />
                <Route path="/views/module-form/:id?" component={ModuleForm} />
            </Switch>
        </HashRouter>
    </div>
)

export default Rotas