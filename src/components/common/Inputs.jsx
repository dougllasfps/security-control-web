import React, {Component} from 'react'
import {Input} from 'reactstrap'
import {Field} from 'react-final-form'

const InputTextAdapter = ({input, ...rest}) => (
    <Input {...input} {...rest} />
)

export class InputText extends Component{
    render(){
        return(
            <Field component={InputTextAdapter} {...this.props} />
        )
    }
}   