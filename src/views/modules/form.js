import React from 'react'

import DefaultPage from '../../components/template/DefaultPage';
import { inject, observer } from 'mobx-react';
import FormGroup from '../../components/common/formGroup';
import Row from '../../components/common/row';

function ModuleForm({ modules }) {
    
    const { module } = modules

    const submitIcon = `fa fa-${module && module.id ? 'refresh' : 'save'}`
    const submitLabel = `${module && module.id ? 'Update' : 'Save'}`

    const onSubmit = (e) => {
        e.preventDefault();
        modules.submit();
    }

    return(
        <DefaultPage title="Modules" header={module.id ? `Updating Module #${module.id}` : "New"}>
            <form onSubmit={onSubmit}>
                <Row>
                    <FormGroup id="name" colsSize={6} label="Name: *">
                        <input type="text" 
                               name="name" 
                               className="form-control" 
                               value={module.name} 
                               onChange={modules.onChange} />
                    </FormGroup>
                    <FormGroup id="label" colsSize={6} label="Label: *">
                        <input type="text" 
                               name="label" 
                               className="form-control" 
                               value={module.label} 
                               onChange={modules.onChange} />
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