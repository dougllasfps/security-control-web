import React from 'react'

import MenuItem from './fragments/MenuItem'
import MenuTree from './fragments/MenuTree'

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path="/" label="Inicio" icon="home" />
        <MenuItem path="#/login" label="Login Example" icon="users" />
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem path="#/form" label="Form Example" icon="usd" />
            <MenuItem path="#/list" label="List Example" icon="reorder" />
        </MenuTree>
    </ul>
)