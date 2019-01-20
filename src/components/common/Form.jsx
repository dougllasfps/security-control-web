import React from 'react'
import {Form} from 'react-final-form'

export class DefaultForm extends React.Component{

    onSubmit = (event) => {
         if(this.props.onSubmit){
             this.props.onSubmit(event)
         }
    }

    render(){
        return(
            <Form onSubmit={this.onSubmit} render={
                (form) => (
                    <form onSubmit={form.handleSubmit}>
                        {this.props.children}
                    </form>
                )
            } />
        )
    }
}