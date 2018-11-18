import React from 'react'

import MenuItem from './fragments/MenuItem'
import MenuTree from './fragments/MenuTree'

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path="/" label="Inicio" icon="dashboard" />
        <MenuItem path="#/login" label="Login Example" icon="users" />
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem path="#/form" label="Form Example" icon="usd" />
        </MenuTree>

        <MenuItem path="/" label="Inicio" icon="dashboard" />
        <MenuItem path="#/login" label="Login Example" icon="map" />
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem path="#/form" label="Form Example" icon="usd" />
        </MenuTree>

        <MenuItem path="/" label="Inicio" icon="dashboard" />
        <MenuItem path="#/login" label="Login Example" icon="users" />
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem path="#/form" label="Form Example" icon="usd" />
        </MenuTree>

        <MenuItem path="/" label="Inicio" icon="dashboard" />
        <MenuItem path="#/login" label="Login Example" icon="users" />
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem path="#/form" label="Form Example" icon="usd" />
        </MenuTree>

        <MenuItem path="/" label="Inicio" icon="dashboard" />
        <MenuItem path="#/login" label="Login Example" icon="users" />
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem path="#/form" label="Form Example" icon="usd" />
        </MenuTree>
    </ul>
)