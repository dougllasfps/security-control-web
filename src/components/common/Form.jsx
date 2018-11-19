import React from 'react'
import $ from 'jquery'

export default class Form extends React.Component{

    onSubmit = (event) => {
        event.preventDefault()
        var jsonObject = {}
        $(event.target).serializeArray().map( item => {
             if ( jsonObject[item.name] ) {
                 if ( typeof(jsonObject[item.name]) === "string" ) {
                    jsonObject[item.name] = [jsonObject[item.name]]
                 }
                 jsonObject[item.name].push(item.value)
             } else {
                jsonObject[item.name] = item.value
             }
         })

         if(this.props.onSubmit){
             this.props.onSubmit(jsonObject)
         }
    }

    render(){
        return(
            <form {...this.props} onSubmit={ e => this.onSubmit(e) }>
                {this.props.children}
            </form>
        )
    }
}