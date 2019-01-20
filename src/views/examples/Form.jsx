import React from 'react'

import FormPage from '../../components/template/forms/FormPage'
import {Row, Col, FormGroup, Input, Button, Label, InputGroup} from 'reactstrap'
import {InputText} from '../../components/common/Inputs'
import {Field} from 'react-final-form'
import Form from '../../components/common/Form'

export default class Formulario extends React.Component{

    submit = (values) => {
        console.log(values)
    }

    render(){
        return(
            <FormPage title="Formulário" 
                        small="Registros de Formulário"   
                        header="Cadastro">
                <Form onSubmit={this.submit}>
                    <Row>
                        <Col md="12">
                        <FormGroup>
                            <Label>Email</Label>
                            <InputGroup>
                                <span className="input-group-addon">
                                    <i className="fa fa-envelope"></i>
                                </span>
                                <InputText rendered={false} type="text" name="email" placeholder="Email" />
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
                    <Row>
                        <Col md="12">
                            <Button type="submit" color="default"><i className="fa fa-save"></i>  Save</Button>
                            <Button color="danger">Cancel</Button>
                        </Col>
                    </Row>         
                </Form>
            </FormPage>
        )
    }
}