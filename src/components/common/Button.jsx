import React from 'react'
import {Button} from 'reactstrap'

export default props => {
    let icon = props.icon
    if(icon){
        icon = (
            <i className={`fa fa-${icon}`}></i>
        ) 
    }

    return (
        <Button color={props.color} {...props}>{icon} {props.label}</Button>
    )
    
}
