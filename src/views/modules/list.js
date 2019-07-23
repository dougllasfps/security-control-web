import React, {useState} from 'react'
import DefaultPage from '../../components/template/DefaultPage';
import { inject, observer } from 'mobx-react';
import { DataTable } from 'primereact/datatable'
import {Column} from 'primereact/column';
import FormGroup from '../../components/common/formGroup';
import Row from '../../components/common/row';


function ModuleList({
    modules
}){
    const [name, setName] = useState('')

    const executeFind = (e) => {
        e.preventDefault();
        modules.find(name)
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
                    <div className="col-md-2">  
                        <button type="button" className="btn btn-default" onClick={executeFind}>
                            <i className="fa fa-search"></i>    Search
                        </button>
                    </div>
                </Row>
            </form>

            <br />

            <Row>
                <div className="col-md-12">
                    <DataTable value={modules.list}>
                        <Column field="name" header="Name" />
                    </DataTable>
                </div>
            </Row>


        </DefaultPage>
    )
}

export default inject("modules")((observer(ModuleList)))
