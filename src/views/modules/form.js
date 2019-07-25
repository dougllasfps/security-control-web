import React, {useState} from 'react'

import DefaultPage from '../../components/template/DefaultPage';
import { inject, observer } from 'mobx-react';
import FormGroup from '../../components/common/formGroup';
import Row from '../../components/common/row';

function ModuleForm({
    modules
}) {
    
    const entity = {modules}
    const [name, setName] = useState('')
    const [label, setLabel] = useState('')

    const submitIcon = `fa fa-${entity && entity.id ? 'refresh' : 'save'}`
    const submitLabel = `${entity && entity.id ? 'Update' : 'Save'}`

    const onSubmit = (e) => {
        e.preventDefault();
        modules.save({
            id: ( entity && entity.id ) || null,
            name,
            label
        })
    }


    return(
        <DefaultPage title="Modules" header="New">
            <form onSubmit={onSubmit}>
                <Row>
                    <FormGroup id="name" colsSize={6} label="Name: *">
                        <input type="text" className="form-control" value={entity.name  || name } onChange={e => setName(e.target.value)} />
                    </FormGroup>
                    <FormGroup id="label" colsSize={6} label="Label: *">
                        <input type="text"  className="form-control" value={entity.label  || label } onChange={e => setLabel(e.target.value)} />
                    </FormGroup>
                </Row>
                <Row>
                    <div className="col col-md-12">
                        <button className="btn btn-default" type="submit">
                            <i className={submitIcon}></i> {submitLabel}
                        </button>
                    </div>
                </Row>
            </form>
        </DefaultPage>
    )
}

export default inject("modules")( observer(ModuleForm) )