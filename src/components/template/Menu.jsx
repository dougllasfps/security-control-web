import React from 'react'

import MenuItem from './fragments/MenuItem'
import MenuTree from './fragments/MenuTree'

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path="#/" label="Inicio" icon="home" />

        <MenuTree label="Users" icon="users">
            <MenuItem path="#/form" label="New" icon="plus" />
            <MenuItem path="#/list" label="Search" icon="search" />
        </MenuTree>

        <MenuTree label="Modules" icon="desktop">
            <MenuItem path="#/views/module-form" label="New" icon="plus" />
            <MenuItem path="#/views/modules" label="Search" icon="search" />
        </MenuTree>

        <MenuTree label="Authorities" icon="lock">
            <MenuItem path="#/form" label="New" icon="plus" />
            <MenuItem path="#/list" label="Search" icon="search" />
        </MenuTree>

        <MenuTree label="Roles" icon="user-circle">
            <MenuItem path="#/form" label="New" icon="plus" />
            <MenuItem path="#/list" label="Search" icon="search" />
        </MenuTree>
    </ul>
)