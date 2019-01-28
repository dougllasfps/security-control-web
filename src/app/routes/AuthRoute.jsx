import React from 'react'


const CustomRoute = ({ path, component:Component, ...rest }) => {
    return (
        <Route {...rest} render={ props => (
            <Component />
        )} />
    )
}