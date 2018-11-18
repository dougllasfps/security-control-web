import React from 'react'

import Content from '../../components/template/fragments/Content'
import ContentHeader from '../../components/template/fragments/ContentHeader'
import {Row, Col, Form, FormGroup, Input, Button, Label, InputGroup} from 'reactstrap'

export default props => (
    <div>
        <ContentHeader title="Form Example" />
        <Content>
            <div className="box box-default">
                <div className="box-header with-border">
                    <h3 className="box-title">
                        Some Form Title
                    </h3>
                </div>

                <div className="box-body">
                    <Form>
                        <Row>
                            <Col md="12">
                            <FormGroup>
                                <Label>Email</Label>
                                <InputGroup>
                                    <span className="input-group-addon">
                                        <i className="fa fa-envelope"></i>
                                    </span>
                                    <Input type="text" name="email" placeholder="Email" />
                                </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="6">
                                <FormGroup>
                                    <Label>Name</Label>
                                    <Input type="text" name="name"/>
                                </FormGroup>
                            </Col>

                            <Col md="6">
                                <FormGroup>
                                    <Label>Last Name</Label>
                                    <Input type="text" name="lastname" />
                                </FormGroup>
                            </Col>
                        </Row>                   

                        <Row>
                            <Col md="12">
                                <Button color="default"><i className="fa fa-save"></i>  Save</Button>
                                <Button color="danger">Cancel</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>            
        </Content>
    </div>
)