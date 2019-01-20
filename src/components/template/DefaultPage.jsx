import React, {Component, Fragment} from 'react'
import Box from './fragments/Box'
import ContentHeader from './fragments/ContentHeader'
import Content from './fragments/Content'

class DefaultPage extends Component{
    render(){
        return(
            <Fragment>
                <ContentHeader title={this.props.title} small={this.props.small} />
                <Content>
                    <Box title={this.props.header} color={this.props.color}>
                        {this.props.children}
                    </Box>
                </Content>
            </Fragment>
        )
    }
}

export default DefaultPage