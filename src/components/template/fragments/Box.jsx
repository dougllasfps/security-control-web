import React, {Component} from 'react'

class Box extends Component{
    render(){
        const boxStyle = this.props.color || 'default'
        return(
            <div className={`box box-${boxStyle}`}>
                <div className="box-header with-border">
                    <h3 className="box-title">
                        {this.props.title || 'Title'}
                    </h3>
                </div>

                <div className="box-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Box