import React from 'react'

export default props => (
    <header className="main-header">
        <a href="/" className="logo">
            <span className="logo-mini">{props.appMini || 'App'}</span>
            <span className="logo-lg">
                <i className={`fa fa-${props.logo ||'github-alt'}`}></i><b>  {props.appTitle || 'AppTitle'}</b>
            </span>
        </a>
        <nav className="navbar navbar-static-top">
            <a href className="sidebar-toggle" data-toggle="offcanvas"></a>
        </nav>
    </header>
)