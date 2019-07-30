import React, {useState, useEffect} from 'react'
import DefaultPage from '../../components/template/DefaultPage';
import { inject, observer } from 'mobx-react';
import { DataTable } from 'primereact/datatable'
import {Column} from 'primereact/column';
import FormGroup from '../../components/common/formGroup';
import Row from '../../components/common/row';
import { withRouter } from 'react-router-dom'

function ModuleList({ modules, history }){

    const [name, setName] = useState('')

    useEffect(() => {
        modules.init();
    },[])

    const executeFind = (e) => {
        e.preventDefault();
        modules.find(name)
    }

    const prepareForm = (id) => {
        history.push(`/views/module-form/${id}`)
    }

    return(
        <DefaultPage title="Modules" header="Search">
            <form>
                <Row>
                    <FormGroup label="Name:" colsSize={6} id="inputName">
                        <input placeholder="insert a name to search" className="form-control" 
                                type="text" id="inputName" name="name" value={name} 
                                onChange={e => setName(e.target.value)} />
                    </FormGroup>
                </Row>
                <Row>
                    <div className="col-md-12">  
                        <button type="button" className="btn btn-default" onClick={executeFind}>
                            <i className="fa fa-search"></i>    Search
                        </button>
                        <button type="button" className="btn btn-warning" onClick={e => prepareForm()}>
                            <i className="fa fa-plus"></i>    Add New
                        </button>
                    </div>
                </Row>
            </form>

            <br />

            <Row>
                <div className="col-md-12">
                    <DataTable value={modules.list}>
                        <Column field="id" header="Id" />
                        <Column field="name" header="Name" />
                        <Column field="label" header="Label" />
                    </DataTable>
                </div>
            </Row>

        </DefaultPage>
    )
}

ModuleList = withRouter(ModuleList)

export default inject("modules")((observer(ModuleList))) 
