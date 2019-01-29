import React from 'react'

import FormPage from '@/components/template/forms/FormPage'
import {Row, Col, FormGroup, Label, InputGroup} from 'reactstrap'
import {InputText} from '@/components/common/Inputs'

export default class Formulario extends React.Component{

    submit = (values) => {
        console.log(values)
    }

    render(){
        return(
            <FormPage title="Formulário" 
                        small="Registros de Formulário"   
                        header="Cadastro"
                        onSubmit={this.submit}
                        submitLabel="Atualizar"
                        submitIcon="refresh" 
                        >
                    <Row>
                        <Col md="12">
                        <FormGroup>
                            <Label>Email</Label>
                            <InputGroup>
                                <span className="input-group-addon">
                                    <i className="fa fa-envelope"></i>
                                </span>
                                <InputText type="text" name="email" placeholder="Email" />
                            </InputGroup>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col md="6">
                            <FormGroup>
                                <Label>Name</Label>
                                <InputText type="text" name="name"/>
                            </FormGroup>
                        </Col>

                        <Col md="6">
                            <FormGroup>
                                <Label>Last Name</Label>
                                <InputText type="text" name="lastname" />
                            </FormGroup>
                        </Col>
                    </Row>            
       
            </FormPage>
        )
    }
}