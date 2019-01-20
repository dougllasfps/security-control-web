import React, {Component} from 'react'
import DefaultPage from '../DefaultPage'
import {Row, Col} from 'reactstrap'
import {DefaultForm as Form} from '../../common/Form'
import Button from '../../common/Button'
import DataTable from '../../common/DataTable';

class ListPage extends Component{
    render(){
        let customButtons = this.props.customButtons;

        if(!customButtons){
            customButtons = (
                <Row>
                    <Col md="12">
                        <Button type="submit" 
                                color="default" 
                                icon={this.props.findIcon || 'search'} 
                                label={this.props.findLabel || 'Consultar'} />
                    </Col>
                </Row>                
            ) 
        }

        return(
            <DefaultPage {...this.props}>
                <Form onSubmit={this.props.onSubmit}>
                    {this.props.children}
                    {customButtons}
                </Form>
                <br />
                <DataTable />
            </DefaultPage>
        )
    }
}

export default ListPage