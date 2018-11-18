import React from 'react'

import MenuItem from './fragments/MenuItem'
import MenuTree from './fragments/MenuTree'

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path="/" label="Inicio" icon="dashboard" />
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem path="#/other" label="Example" icon="usd" />
        </MenuTree>
    </ul>
)