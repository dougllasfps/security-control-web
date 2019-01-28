import React from 'react'

export default ( WrappedComponent, Consumer ) => {
    return class extends React.Component {
        render(){
            return(
                <Consumer>
                    {ctx =>(
                        <WrappedComponent {...ctx} />
                    )}
                </Consumer>
            )
        }
    }
}

/*
export default ( WrappedComponent, Consumer ) => {
    return class extends React.Component {
        render(){
            return(
                <Consumer>
                    {ctx =>(
                        <WrappedComponent {...ctx} />
                    )}
                </Consumer>
            )
        }
    }
}
*/