import React, {Component} from 'react'
import DefaultPage from '../DefaultPage'

class FormPage extends Component{
    render(){
        return(
            <DefaultPage {...this.props}>
                {this.props.children}
            </DefaultPage>
        )
    }
}

export default FormPage