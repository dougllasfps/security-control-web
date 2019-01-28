import React, {Component} from 'react'
import DefaultPage from '../DefaultPage'
import {Row, Col} from 'reactstrap'
import {DefaultForm as Form} from '../../common/Form'
import Button from '../../common/Button'
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

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
        
        const cars = [
            { vin: 'test', year: 2018, brand: 'teste', color: 'color' },
            { vin: 'test', year: 2018, brand: 'teste', color: 'color' },
            { vin: 'test', year: 2018, brand: 'teste', color: 'color' },
            { vin: 'test', year: 2018, brand: 'teste', color: 'color' },
            { vin: 'test', year: 2018, brand: 'teste', color: 'color' },
            { vin: 'test', year: 2018, brand: 'teste', color: 'color' },
            { vin: 'test', year: 2018, brand: 'teste', color: 'color' },
            { vin: 'test', year: 2018, brand: 'teste', color: 'color' },
            { vin: 'test', year: 2018, brand: 'teste', color: 'color' },
            { vin: 'test', year: 2018, brand: 'teste', color: 'color' },
            { vin: 'test', year: 2018, brand: 'teste', color: 'color' },
            { vin: 'test', year: 2018, brand: 'teste', color: 'color' },
            { vin: 'test', year: 2018, brand: 'teste', color: 'color' },
            { vin: 'test', year: 2018, brand: 'teste', color: 'color' },
            { vin: 'test', year: 2018, brand: 'teste', color: 'color' },
      
        ]

        return(
            <DefaultPage {...this.props}>
                <Form onSubmit={this.props.onSubmit}>
                    {this.props.children}
                    {customButtons}
                </Form>
                <br />
                <DataTable rows="10" value={cars} responsive={true} paginator>
                    <Column field="vin" header="Vin" />
                    <Column field="year" header="Year" />
                    <Column field="brand" header="Brand" />
                    <Column field="color" header="Color" />
                </DataTable>
            </DefaultPage>
        )
    }
}

export default ListPage